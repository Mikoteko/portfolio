import { technologies } from "../../constants";

const Skills = () => (
  <div className="flex flex-wrap gap-2">
    {technologies.map((tech) => (
      <span
        key={tech}
        className="rounded border border-[var(--term-dim)] px-2 py-0.5"
      >
        {tech}
      </span>
    ))}
  </div>
);

export default Skills;
