import React from 'react';

const QuickEnrollment = () => {
  const enrollmentOptions = [
    {
      title: "Primary Classes (5th - 7th)",
      description: "Strong foundation building for young learners"
    },
    {
      title: "Middle School (8th - 10th)",
      description: "Comprehensive preparation for board exams"
    },
    {
      title: "Weekend Classes",
      description: "Flexible weekend batches for working students"
    }
  ];

  return (
    <section className="quick-enrollment">
      <div className="container">
        <h2>Quick Enrollment Links</h2>
        <div className="enrollment-links">
          {enrollmentOptions.map((option, index) => (
            <div key={index} className="enrollment-card">
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickEnrollment;
