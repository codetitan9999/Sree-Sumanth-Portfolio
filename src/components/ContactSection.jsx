import SectionTitle from './SectionTitle';

function SocialLink({ label, href }) {
  if (!href) {
    return (
      <span className="social-disabled" aria-disabled="true">
        {label} (add link)
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}

function ContactSection({ personalInfo }) {
  const socialOrder = [
    ['github', 'GitHub'],
    ['linkedin', 'LinkedIn'],
    ['leetcode', 'LeetCode'],
    ['hackerrank', 'HackerRank'],
    ['codechef', 'CodeChef'],
    ['codeforces', 'Codeforces']
  ];

  return (
    <section className="panel contact-panel" id="contact">
      <SectionTitle eyebrow="Contact" title="Let&apos;s Build Something Great" />
      <p className="body-text">
        Open to software engineering opportunities where I can build meaningful products and solve hard problems at scale.
      </p>
      <div className="contact-links">
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a>
        <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
      <div className="social-links">
        {socialOrder.map(([key, label]) => (
          <SocialLink key={key} label={label} href={personalInfo.socials[key]} />
        ))}
      </div>
    </section>
  );
}

export default ContactSection;
