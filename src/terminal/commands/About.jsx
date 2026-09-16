import { profile } from "../../constants";

const About = () => (
  <div>
    <p>{profile.name}</p>
    <p className="text-[var(--term-dim)]">{profile.roles.join(" · ")}</p>
    <p className="mt-2">{profile.bio}</p>
  </div>
);

export default About;
