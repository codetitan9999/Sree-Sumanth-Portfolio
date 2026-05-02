import SectionTitle from './SectionTitle';

function CredentialItem({ item }) {
  if (typeof item === 'string') {
    return <li>{item}</li>;
  }

  if (item.url) {
    return (
      <li>
        <a href={item.url} target="_blank" rel="noreferrer">
          {item.label}
        </a>
      </li>
    );
  }

  return <li>{item.label}</li>;
}

function CredentialsSection({ certifications, achievements }) {
  return (
    <section className="panel" id="credentials">
      <SectionTitle eyebrow="Recognition" title="Certifications & Achievements" />
      <div className="credentials-grid">
        <article className="mini-card">
          <h4>Certifications</h4>
          <ul>
            {certifications.map((item) => (
              <CredentialItem key={typeof item === 'string' ? item : item.label} item={item} />
            ))}
          </ul>
        </article>
        <article className="mini-card">
          <h4>Achievements</h4>
          <ul>
            {achievements.map((item) => (
              <CredentialItem key={typeof item === 'string' ? item : item.label} item={item} />
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default CredentialsSection;
