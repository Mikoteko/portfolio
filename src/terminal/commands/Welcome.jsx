import { profile } from "../../constants";

const Welcome = () => (
  <div className="mb-6">
    <p className="text-[var(--term-accent)] font-bold">
      {profile.name} — {profile.roles.join(" / ")}
    </p>
    <p className="text-[var(--term-dim)] mt-1">
      Type <span className="text-[var(--term-fg)]">help</span> to see available
      commands, or tap a command below.
    </p>
  </div>
);

export default Welcome;
