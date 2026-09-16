const Output = ({ cmd, output }) => (
  <div className="mb-4">
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[var(--term-accent)]">emilie@portfolio</span>
      <span className="text-[var(--term-dim)]">:~$</span>
      <span className="break-all">{cmd}</span>
    </div>
    {output && <div className="mt-2">{output}</div>}
  </div>
);

export default Output;
