import './Education.css'

function Education() {
  const education = [
    {
      degree: 'B.Tech - Computer Science and Engineering',
      institution: 'GL Bajaj Institute of Technology and Management',
      location: 'Greater Noida',
      year: '2023 - present',
      details: 'CGPA: 8.76/10',
      coursework: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'OOP']
    },
    {
      degree: 'Intermediate (PCM)',
      institution: 'Gyandeep Public Sr. Sec. School',
      location: 'Seohara',
      year: '2022 - 2023',
      details: 'Percentage: 95.8%'
    },
    {
      degree: 'High School',
      institution: 'Gyandeep Public Sr. Sec. School',
      location: 'Seohara',
      year: '2021 - 2022',
      details: 'Percentage: 93.6%'
    }
  ]

  return (
    <section className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="timeline-marker"></div>
              <div className="education-content">
                <h3 className="degree">{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="location">{edu.location}</p>
                <p className="year">{edu.year}</p>
                <p className="details">{edu.details}</p>
                {edu.coursework && (
                  <div className="coursework">
                    <h4>Coursework:</h4>
                    <div className="coursework-list">
                      {edu.coursework.map((course, idx) => (
                        <span key={idx} className="course-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
