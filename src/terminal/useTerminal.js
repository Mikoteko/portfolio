import { useCallback, useRef, useState } from "react";
import { commandList } from "./commandList";
import { runCommand } from "./runCommand";

export function useTerminal({ theme, setTheme }) {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [log, setLog] = useState([]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const [hints, setHints] = useState([]);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const runAndLog = useCallback(
    (raw) => {
      const trimmed = raw.trim();
      if (!trimmed) return;

      const [cmdWord] = trimmed.split(/\s+/);

      if (cmdWord.toLowerCase() === "clear") {
        setLog([]);
        setCmdHistory((h) => [trimmed, ...h]);
        setHistoryPointer(-1);
        return;
      }

      const output = runCommand(trimmed, { history: cmdHistory, theme, setTheme });
      setLog((l) => [...l, { id: `${Date.now()}-${l.length}`, cmd: trimmed, output }]);
      setCmdHistory((h) => [trimmed, ...h]);
      setHistoryPointer(-1);
    },
    [cmdHistory, theme, setTheme]
  );

  const submit = useCallback(
    (raw) => {
      runAndLog(raw ?? inputValue);
      setInputValue("");
      setHints([]);
    },
    [inputValue, runAndLog]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submit();
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (cmdHistory.length === 0) return;
        const nextPointer = Math.min(historyPointer + 1, cmdHistory.length - 1);
        setHistoryPointer(nextPointer);
        setInputValue(cmdHistory[nextPointer]);
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyPointer <= 0) {
          setHistoryPointer(-1);
          setInputValue("");
          return;
        }
        const nextPointer = historyPointer - 1;
        setHistoryPointer(nextPointer);
        setInputValue(cmdHistory[nextPointer]);
        return;
      }

      if (e.key === "Tab" || (e.ctrlKey && e.key.toLowerCase() === "i")) {
        e.preventDefault();
        if (!inputValue) return;
        const matches = commandList
          .map((c) => c.cmd)
          .filter((cmd) => cmd.startsWith(inputValue.toLowerCase()));
        if (matches.length === 1) {
          setInputValue(matches[0]);
          setHints([]);
        } else if (matches.length > 1) {
          setHints(matches);
        }
        return;
      }

      if (e.ctrlKey && e.key.toLowerCase() === "l") {
        e.preventDefault();
        setLog([]);
        return;
      }
    },
    [cmdHistory, historyPointer, inputValue, submit]
  );

  const runQuickCommand = useCallback(
    (cmd) => {
      runAndLog(cmd);
      setInputValue("");
      setHints([]);
      focusInput();
    },
    [runAndLog, focusInput]
  );

  return {
    inputRef,
    inputValue,
    setInputValue,
    log,
    hints,
    handleKeyDown,
    submit,
    focusInput,
    runQuickCommand,
  };
}
