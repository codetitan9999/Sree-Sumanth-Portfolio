function Navbar({ name }) {
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Go to top">
        {name
          .split(' ')
          .filter(Boolean)
          .map((part) => part[0])
          .join('')
          .slice(0, 3)}
      </a>
      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
