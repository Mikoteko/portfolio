import { profile, education, languages, interests } from "../../constants";

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

    <p className="text-[var(--term-dim)] mt-4 mb-1">Langues:</p>
    <p>
      {languages.map((lang, i) => (
        <span key={lang.name}>
          {i > 0 && " · "}
          <span className="text-[var(--term-accent)]">{lang.name}</span>{" "}
          <span className="text-[var(--term-dim)]">({lang.level})</span>
        </span>
      ))}
    </p>

    <p className="text-[var(--term-dim)] mt-4 mb-1">Centres d&apos;intérêt:</p>
    <p>{interests.join(" · ")}</p>
  </div>
);

export default About;
