const CommandLine = ({ inputRef, value, onChange, onKeyDown, onSubmit, hints }) => (
  <div>
    <form onSubmit={onSubmit} className="flex items-center gap-2 flex-wrap">
      <span className="text-[var(--term-accent)] select-none">emilie@portfolio</span>
      <span className="text-[var(--term-dim)] select-none">:~$</span>
      <input
        ref={inputRef}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck="false"
        aria-label="terminal command input"
        className="flex-1 min-w-[2ch] bg-transparent outline-none border-none text-[16px] text-[var(--term-fg)] caret-[var(--term-fg)]"
      />
    </form>
    {hints.length > 0 && (
      <div className="text-[var(--term-dim)] text-sm mt-1 flex flex-wrap gap-x-4">
        {hints.map((h) => (
          <span key={h}>{h}</span>
        ))}
      </div>
    )}
  </div>
);

export default CommandLine;
