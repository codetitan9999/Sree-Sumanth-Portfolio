import SectionTitle from './SectionTitle';

function ProjectsGrid({ projects }) {
  return (
    <section className="panel" id="projects">
      <SectionTitle eyebrow="Selected Work" title="Projects & Live Demos" />
      <p className="projects-lede">
        A curated set of product-focused builds spanning developer tools, AI workflows,
        interactive visual systems, and full-stack applications.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const techTags = project.subtitle.split('|').map((tag) => tag.trim());

          return (
          <article className="project-card" key={project.title}>
            <div className="project-card-top">
              <span className="project-index">0{index + 1}</span>
              <div className="project-status-group">
                {project.status ? <span className="project-status project-status-muted">{project.status}</span> : null}
                {project.liveUrl ? <span className="project-status">Live</span> : null}
              </div>
            </div>
            <div className="project-heading">
              <h4>{project.title}</h4>
              <div className="project-tags">
                {techTags.map((tag) => (
                  <span className="project-tag" key={`${project.title}-${tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-impact-block">
              <span>Why it matters</span>
              <p>{project.impact}</p>
            </div>
            {project.statusNote ? <p className="project-note">{project.statusNote}</p> : null}
            <ul className="project-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="project-actions">
              {project.liveUrl ? (
                <a className="project-action-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              ) : null}
              <a className="project-action-secondary" href={project.repoUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsGrid;
