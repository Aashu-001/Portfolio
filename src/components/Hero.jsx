import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Aashutosh Sharma</span>
          </h1>
          <p className="hero-subtitle">
            MERN Stack Developer | Problem Solver | Competitive Programmer
          </p>
          <p className="hero-description">
            Pre-final year CS undergraduate building scalable web applications and solving complex algorithmic challenges. LeetCode 1735 Rating | 750+ Problems Solved.
          </p>

          <div className="cta-buttons">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/Aashu-001" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aashutosh-s-b17778236/?_l=en_US" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/hyper_001/" target="_blank" rel="noopener noreferrer" className="social-link" title="LeetCode">
              <FaCode />
            </a>
            <a href="mailto:aashush800660@gmail.com" className="social-link" title="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-content">
              <p className="stat-number">750+</p>
              <p className="stat-label">Problems Solved</p>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="card-content">
              <p className="stat-number">1735</p>
              <p className="stat-label">LeetCode Rating</p>
            </div>
          </div>
          <div className="floating-card card-3">
            <div className="card-content">
              <p className="stat-number">2+</p>
              <p className="stat-label">Projects Built</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
