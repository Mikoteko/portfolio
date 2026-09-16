import { commandList } from "../commandList";

const Help = () => (
  <div className="flex flex-col gap-1">
    <p className="text-[var(--term-dim)] mb-1">Available commands:</p>
    {commandList.map(({ cmd, description }) => (
      <p key={cmd}>
        <span className="text-[var(--term-accent)] inline-block w-24">{cmd}</span>
        <span className="text-[var(--term-dim)]">{description}</span>
      </p>
    ))}
  </div>
);

export default Help;
