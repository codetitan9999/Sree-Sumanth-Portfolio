function Hero({ personalInfo }) {
  return (
    <section className="hero panel" id="home">
      <p className="eyebrow">Software Engineer Portfolio</p>
      <h1>{personalInfo.fullName}</h1>
      <h3>{personalInfo.title}</h3>
      <p className="hero-copy">{personalInfo.shortBio}</p>

      <div className="hero-actions">
        <a className="btn btn-primary" href="#contact">
          Contact Me
        </a>
        <a className="btn btn-ghost" href="#projects">
          View Projects
        </a>
      </div>

      <div className="hero-meta">
        <span>{personalInfo.location}</span>
        <span>{personalInfo.phone}</span>
      </div>
    </section>
  );
}

export default Hero;
