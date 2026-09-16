import { projects } from "../../constants";

const Projects = () => (
  <div className="flex flex-col gap-4">
    {projects.map((project) => (
      <div key={project.name} className="border-l-2 border-[var(--term-dim)] pl-3">
        <p className="text-[var(--term-accent)]">{project.name}</p>
        <p className="mt-1">{project.description}</p>
        <p className="text-[var(--term-dim)] mt-1">{project.tags.join(", ")}</p>
        {project.source_code_link && (
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noreferrer"
            className="underline break-all"
          >
            {project.source_code_link}
          </a>
        )}
      </div>
    ))}
  </div>
);

export default Projects;
