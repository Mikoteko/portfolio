import { quickCommands } from "./commandList";

const QuickCommands = ({ onRun }) => (
  <div className="sm:hidden border-t border-[var(--term-dim)] bg-[var(--term-bg)] px-3 py-2 flex gap-2 overflow-x-auto">
    {quickCommands.map((cmd) => (
      <button
        key={cmd}
        type="button"
        onClick={() => onRun(cmd)}
        className="shrink-0 rounded-full border border-[var(--term-dim)] px-3 py-1.5 text-sm active:bg-[var(--term-dim)]"
      >
        {cmd}
      </button>
    ))}
  </div>
);

export default QuickCommands;
