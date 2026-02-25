import SectionTitle from './SectionTitle';

function CredentialsSection({ certifications, achievements }) {
  return (
    <section className="panel" id="credentials">
      <SectionTitle eyebrow="Recognition" title="Certifications & Achievements" />
      <div className="credentials-grid">
        <article className="mini-card">
          <h4>Certifications</h4>
          <ul>
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="mini-card">
          <h4>Achievements</h4>
          <ul>
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default CredentialsSection;
