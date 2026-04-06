import SectionTitle from './SectionTitle';

function ProjectsGrid({ projects }) {
  return (
    <section className="panel" id="projects">
      <SectionTitle eyebrow="Selected Work" title="Projects & Live Demos" />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h4>{project.title}</h4>
            <p className="subtitle">{project.subtitle}</p>
            <p>{project.description}</p>
            <p className="impact">Impact: {project.impact}</p>
            <ul className="project-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="project-actions">
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              ) : null}
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
