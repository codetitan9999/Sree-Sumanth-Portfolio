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

  return (
    <section className="panel" id="skills">
      <SectionTitle eyebrow="Technical Stack" title="Skills" />
      <div className="skills-grid">
        {skillGroups.map(([key, items]) => (
          <SkillGroup
            key={key}
            title={key.charAt(0).toUpperCase() + key.slice(1)}
            items={items}
          />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
