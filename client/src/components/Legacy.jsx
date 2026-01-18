import React from 'react';

const Legacy = () => {
  const toppers = [
    {
      name: "PRIYA SHARMA",
      achievement: "95% in 10th Board Exams 2024"
    },
    {
      name: "ANITA SINGH",
      achievement: "98% in 8th Standard 2024"
    }
  ];

  return (
    <section className="legacy">
      <div className="container">
        <h2>LEGACY OF EXCELLENCE</h2>
        
        <div className="legacy-stats">
          <div className="stat-item">
            <div className="stat-number">2,500+</div>
            <div className="stat-label">STUDENTS SUCCESSFUL</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">BOARD EXAM SUCCESS RATE</div>
          </div>
        </div>

        <h3 style={{ marginBottom: '40px', fontSize: '1.8rem' }}>INSPIRING THE ASPIRANTS</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
          {toppers.map((topper, index) => (
            <div key={index} style={{ 
              background: 'rgba(255,255,255,0.1)', 
              padding: '30px', 
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{topper.name}</h4>
              <p style={{ fontSize: '1rem', opacity: '0.9' }}>{topper.achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legacy;
