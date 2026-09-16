import { useEffect, useRef, useState } from "react";
import { useTerminal } from "./useTerminal";
import Output from "./Output";
import CommandLine from "./CommandLine";
import QuickCommands from "./QuickCommands";
import Welcome from "./commands/Welcome";
import { themeNames } from "./commandList";

const THEME_KEY = "portfolio-terminal-theme";
const DEFAULT_THEME = "green";

const readStoredTheme = () => {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    return themeNames.includes(saved) ? saved : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
};

const Terminal = () => {
  const [theme, setThemeState] = useState(readStoredTheme);
  const bottomRef = useRef(null);

  const setTheme = (next) => {
    const value = themeNames.includes(next) ? next : DEFAULT_THEME;
    setThemeState(value);
    try {
      localStorage.setItem(THEME_KEY, value);
    } catch {
      // ignore storage failures (private browsing, blocked storage, etc.)
    }
  };

  const {
    inputRef,
    inputValue,
    setInputValue,
    log,
    hints,
    handleKeyDown,
    submit,
    focusInput,
    runQuickCommand,
  } = useTerminal({ theme, setTheme });

  useEffect(() => {
    focusInput();
  }, [focusInput]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [log]);

  return (
    <div
      data-theme={theme}
      onClick={focusInput}
      className="h-[100dvh] overflow-hidden bg-[var(--term-bg)] text-[var(--term-fg)] font-mono flex flex-col"
    >
      <div className="flex-1 min-h-0 overflow-y-auto px-4 pt-6 pb-2 sm:px-8">
        <Welcome />
        {log.map((entry) => (
          <Output key={entry.id} cmd={entry.cmd} output={entry.output} />
        ))}
        <CommandLine
          inputRef={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          hints={hints}
        />
        <div ref={bottomRef} />
      </div>
      <QuickCommands onRun={runQuickCommand} />
    </div>
  );
};

export default Terminal;
