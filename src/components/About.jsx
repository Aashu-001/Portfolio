import './About.css'

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a pre-final year Computer Science student at GL Bajaj Institute of Technology and Management with a passion for building scalable web applications and solving complex problems through code.
            </p>
            <p className="about-paragraph">
              My journey in tech started with competitive programming, where I've consistently solved 650+ problems and achieved a LeetCode peak rating of 1735. This foundation has shaped my problem-solving approach across full-stack development.
            </p>
            <p className="about-paragraph">
              I specialize in the MERN stack and have built production-level applications that demonstrate both technical depth and user-centric design. I'm committed to writing clean, secure, and maintainable code while continuously learning emerging technologies.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>8.76/10</h3>
                <p>CGPA</p>
              </div>
              <div className="stat">
                <h3>750+</h3>
                <p>DSA Problems</p>
              </div>
              <div className="stat">
                <h3>1735</h3>
                <p>LeetCode Peak</p>
              </div>
            </div>
          </div>
          <div className="about-highlights">
            <div className="highlight-item">
              <h4>🎯 Mission</h4>
              <p>Build secure, scalable systems that solve real-world problems</p>
            </div>
            <div className="highlight-item">
              <h4>💡 Approach</h4>
              <p>Data-driven development with focus on performance and user experience</p>
            </div>
            <div className="highlight-item">
              <h4>🚀 Focus</h4>
              <p>Full-stack development and cloud-based solutions</p>
            </div>
            <div className="highlight-item">
              <h4>🤝 Values</h4>
              <p>Continuous learning, collaboration, and delivering excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
