import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CredentialsSection from './components/CredentialsSection';
import EducationSection from './components/EducationSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectsGrid from './components/ProjectsGrid';
import SkillsSection from './components/SkillsSection';
import { portfolioData } from './data/portfolioData';

function App() {
  const { personalInfo, about, experience, projects, skills, education, certifications, achievements } =
    portfolioData;

  return (
    <div className="page-shell">
      <div className="bg-orb bg-orb-a" aria-hidden="true" />
      <div className="bg-orb bg-orb-b" aria-hidden="true" />

      <Navbar name={personalInfo.fullName} />

      <main>
        <Hero personalInfo={personalInfo} />
        <AboutSection about={about} />
        <ExperienceTimeline experience={experience} />
        <ProjectsGrid projects={projects} />
        <SkillsSection skills={skills} />
        <EducationSection education={education} />
        <CredentialsSection certifications={certifications} achievements={achievements} />
        <ContactSection personalInfo={personalInfo} />
      </main>
    </div>
  );
}

export default App;
