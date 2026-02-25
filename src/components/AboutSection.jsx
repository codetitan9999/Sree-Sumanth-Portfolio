import SectionTitle from './SectionTitle';

function AboutSection({ about }) {
  return (
    <section className="panel" id="about">
      <SectionTitle eyebrow="About" title="What I Build" />
      <p className="body-text">{about.shortBio}</p>
      <p className="body-text muted">{about.longBio}</p>
    </section>
  );
}

export default AboutSection;
