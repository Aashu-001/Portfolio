import { FaTrophy, FaLightbulb, FaGraduationCap } from 'react-icons/fa'
import './Achievements.css'

function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: 'LeetCode Excellence',
      description: 'Contest Rating 1735 (MAX) with 650+ problems solved and active participation in contests'
    },
    {
      icon: <FaTrophy />,
      title: 'CodeChef Champion',
      description: 'Contest Rating 1394 with consistent participation in competitive programming competitions'
    },
    {
      icon: <FaLightbulb />,
      title: 'DSA Mastery',
      description: 'Solved 1000+ problems across LeetCode, Codeforces, CodeChef, and GeeksforGeeks'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Academic Excellence',
      description: 'CGPA 8.76/10 in B.Tech CSE with coursework in advanced DSA and system design'
    }
  ]

  return (
    <section className="section achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
