import SectionTitle from './SectionTitle';

function ProjectsGrid({ projects }) {
  return (
    <section className="panel" id="projects">
      <SectionTitle eyebrow="Selected Work" title="Project Highlights" />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h4>{project.title}</h4>
            <p className="subtitle">{project.subtitle}</p>
            <p>{project.description}</p>
            <p className="impact">Impact: {project.impact}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
