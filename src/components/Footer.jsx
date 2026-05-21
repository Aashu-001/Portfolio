import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Aashutosh Sharma</h3>
            <p>MERN Stack Developer | Competitive Programmer | Problem Solver</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://github.com/Aashu-001" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/aashutosh-s-b17778236/?_l=en_US" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:aashush800660@gmail.com"  rel="noopener noreferrer" title="Email">
                    <FaEnvelope />
              </a>
            
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p> Aashutosh Sharma.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
