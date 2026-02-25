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
  return (
    <section className="panel contact-panel" id="contact">
      <SectionTitle eyebrow="Contact" title="Let&apos;s Build Something Great" />
      <p className="body-text">
        Open to backend, integration engineering, and enterprise automation opportunities.
      </p>
      <div className="contact-links">
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a>
      </div>
      <div className="social-links">
        <SocialLink label="GitHub" href={personalInfo.socials.github} />
        <SocialLink label="LinkedIn" href={personalInfo.socials.linkedin} />
        <SocialLink label="LeetCode" href={personalInfo.socials.leetcode} />
        <SocialLink label="HackerRank" href={personalInfo.socials.hackerrank} />
        <SocialLink label="CodeChef" href={personalInfo.socials.codechef} />
      </div>
    </section>
  );
}

export default ContactSection;
