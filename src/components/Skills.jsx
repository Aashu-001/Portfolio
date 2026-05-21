import './Skills.css'

function Skills() {
  const skills = {
    languages: ['C', 'C++', 'JavaScript', 'MySQL', 'Python'],
    frameworks: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js'],
    databases: ['MongoDB', 'Redis'],
    tools: ['GitHub', 'VS Code', 'Postman', 'Docker', 'Cloudinary', 'Vercel', 'Notion'],
    methodologies: ['RESTful API Design', 'MERN Stack', 'Agile Development']
  }

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">Languages</h3>
            <div className="skill-tags">
              {skills.languages.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Frameworks & Libraries</h3>
            <div className="skill-tags">
              {skills.frameworks.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Databases</h3>
            <div className="skill-tags">
              {skills.databases.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Tools & Platforms</h3>
            <div className="skill-tags">
              {skills.tools.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Methodologies</h3>
            <div className="skill-tags">
              {skills.methodologies.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
