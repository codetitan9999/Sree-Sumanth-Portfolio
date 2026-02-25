import SectionTitle from './SectionTitle';

function ExperienceTimeline({ experience }) {
  return (
    <section className="panel" id="experience">
      <SectionTitle eyebrow="Professional Journey" title="Experience Timeline" />
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={`${item.company}-${item.role}`}>
            <div className="timeline-head">
              <h4>{item.role}</h4>
              <span>{item.duration}</span>
            </div>
            <p className="company">
              {item.company} | {item.location}
            </p>
            <ul>
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="chips inline-chips">
              {item.technologies.map((tech) => (
                <span key={tech} className="chip small">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;
