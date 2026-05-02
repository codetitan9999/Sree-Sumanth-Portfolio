import SectionTitle from './SectionTitle';

function EducationSection({ education }) {
  return (
    <section className="panel" id="education">
      <SectionTitle eyebrow="Academics" title="Education" />
      <article className="mini-card">
        <h4>{education.degree}</h4>
        <p>{education.institution}</p>
        {education.location ? <p>{education.location}</p> : null}
        <p>{education.duration}</p>
        <p>CGPA: {education.cgpa}</p>
      </article>
    </section>
  );
}

export default EducationSection;
