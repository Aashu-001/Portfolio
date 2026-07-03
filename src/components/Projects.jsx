import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'CodeJudge',
      description: 'A scalable MERN coding platform with 100+ DSA problems, automated code execution, and AI-powered hints.',
      tech: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Judge0', 'Redis', 'JWT', 'Cloudinary'],
      highlights: [
        'Architected scalable MERN coding platform with 100+ problems',
        'Implemented JWT with Redis-backed token blocklisting',
        'Built resilient code execution engine supporting 10+ languages',
        'Designed 8+ RESTful APIs following secure coding standards',
        'Integrated AI-powered DSA assistant with OpenAI API',
        'Implemented Cloudinary for video storage and streaming'
      ],
      link: 'https://14-dev.vercel.app/signup',
      github: 'https://github.com/Aashu-001/CODDING_PLATFORM'
    },
    {
      title: 'HealthNexus',
      description: 'Full-stack MERN web application for clinic operations management with appointment, billing, and patient records.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Vercel'],
      highlights: [
        'Developed full-stack MERN web application for clinic operations',
        'Built 10+ RESTful APIs handling CRUD operations',
        'Designed 6+ MongoDB schemas with Mongoose ORM',
        'Built responsive React (Vite) frontend with Tailwind CSS',
        'Deployed on Vercel with cloud-based delivery',
        'Zero-downtime releases and scalable infrastructure'
      ],
      link: 'https://health-nexus-frontend.vercel.app/',
      github: 'https://github.com/Aashu-001/HealthNexus-backend'
    }
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                <ul>
                  {project.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx}>✓ {highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} className="project-link" title="GitHub">
                  <FaGithub /> Code
                </a>
                <a href={project.link} className="project-link" title="Live Demo">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
