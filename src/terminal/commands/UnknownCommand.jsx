const UnknownCommand = ({ cmd }) => (
  <p className="text-[var(--term-error)]">
    command not found: {cmd}. type{" "}
    <span className="text-[var(--term-accent)]">help</span> for a list of
    commands.
  </p>
);

export default UnknownCommand;
