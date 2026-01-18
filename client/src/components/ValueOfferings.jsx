import React from 'react';

const ValueOfferings = () => {
  const offerings = [
    {
      title: "AIM e-Learning",
      description: "Online learning platform with interactive video lessons and study materials"
    },
    {
      title: "AIM e-Assessment",
      description: "Regular online tests and assessments to track progress"
    }
  ];

  const features = [
    {
      title: "Professionally Run Organization",
      description: "We are a hub for entrepreneurs and not just a bunch of employees because everyone owns their role & responsibilities to deliver the best performance."
    },
    {
      title: "Highly Qualified Faculties",
      description: "Experienced and dedicated teachers with expertise in their subjects, committed to student success and academic excellence."
    },
    {
      title: "Proven Track Record",
      description: "Our students consistently achieve excellent results in board exams and competitive examinations, with many securing top ranks in their respective fields."
    },
    {
      title: "Quality Study Material",
      description: "Comprehensive study materials and practice papers designed by experienced educators to enhance learning outcomes."
    },
    {
      title: "Library Facility",
      description: "Well-stocked library with extensive collection of reference books, textbooks, and digital resources for all subjects."
    },
    {
      title: "Computer Lab",
      description: "Modern computer lab with internet access for research, online learning, and digital assessments."
    },
    {
      title: "Doubt Clearing Sessions",
      description: "Regular doubt clearing sessions where students can get personalized help with difficult concepts from subject experts."
    },
    {
      title: "Parent Teacher Meetings",
      description: "Regular PTMs and monthly progress reports to keep parents informed about their child's academic progress and areas for improvement."
    }
  ];

  return (
    <section className="value-offerings">
      <div className="container">
        <h2>Value Offerings</h2>
        
        <div className="offerings-grid" style={{ marginBottom: '60px' }}>
          {offerings.map((offering, index) => (
            <div key={index} className="offering-card">
              <h3>{offering.title}</h3>
              <p>{offering.description}</p>
            </div>
          ))}
        </div>

        <div className="offerings-grid">
          {features.map((feature, index) => (
            <div key={index} className="offering-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueOfferings;
