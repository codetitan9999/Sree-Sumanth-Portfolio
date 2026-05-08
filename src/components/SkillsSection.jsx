import SectionTitle from './SectionTitle';

function SkillGroup({ title, items }) {
  return (
    <article className="skill-group">
      <h4>{title}</h4>
      <div className="chips">
        {items.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function SkillsSection({ skills }) {
  const skillGroups = Object.entries(skills);
  const titleMap = {
    languages: 'Languages',
    frontend: 'Frontend',
    backendApis: 'Backend & APIs',
    toolsPlatforms: 'Tools & Platforms',
    databases: 'Databases',
    core: 'Core'
  };

  return (
    <section className="panel" id="skills">
      <SectionTitle eyebrow="Technical Stack" title="Skills" />
      <div className="skills-grid">
        {skillGroups.map(([key, items]) => (
          <SkillGroup
            key={key}
            title={titleMap[key] ?? key}
            items={items}
          />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
