import { profile, education } from "../../constants";

const About = () => (
  <div>
    <p>{profile.name}</p>
    <p className="text-[var(--term-dim)]">{profile.roles.join(" · ")}</p>
    <p className="text-[var(--term-dim)]">{profile.location}</p>
    <p className="mt-2">{profile.bio}</p>

    <p className="text-[var(--term-dim)] mt-4 mb-1">Formation:</p>
    <div className="flex flex-col gap-1">
      {education.map((entry) => (
        <p key={entry.school}>
          <span className="text-[var(--term-accent)]">{entry.school}</span>
          {" — "}
          {entry.degree}
          <span className="text-[var(--term-dim)]"> ({entry.date})</span>
        </p>
      ))}
    </div>
  </div>
);

export default About;
