import { experiences } from "../../constants";

const Experience = () => (
  <div className="flex flex-col gap-4">
    {experiences.map((exp) => (
      <div
        key={`${exp.company_name}-${exp.title}`}
        className="border-l-2 border-[var(--term-dim)] pl-3"
      >
        <p className="text-[var(--term-accent)]">{exp.title}</p>
        <p>{exp.company_name}</p>
        <p className="text-[var(--term-dim)]">{exp.date}</p>
        <ul className="list-disc list-inside mt-1 flex flex-col gap-1">
          {exp.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Experience;
