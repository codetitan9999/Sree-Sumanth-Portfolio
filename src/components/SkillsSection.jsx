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
  return (
    <section className="panel" id="skills">
      <SectionTitle eyebrow="Technical Stack" title="Skills" />
      <div className="skills-grid">
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Frameworks" items={skills.frameworks} />
        <SkillGroup title="Databases" items={skills.databases} />
        <SkillGroup title="Tools" items={skills.tools} />
      </div>
    </section>
  );
}

export default SkillsSection;
