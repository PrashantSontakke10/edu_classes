import React from 'react';

const PopularCourses = () => {
  const courses = [
    {
      title: "PRIMARY CLASSES",
      subtitle: "5th to 7th GRADE",
      description: "Building strong fundamentals in Mathematics, Science, English, and Social Studies. Our specially designed program focuses on concept clarity and academic excellence for young learners.",
      category: "FOUNDATION BUILDING PROGRAM"
    },
    {
      title: "MIDDLE SCHOOL",
      subtitle: "8th to 10th GRADE",
      description: "Comprehensive preparation for board exams with focus on all subjects. Our curriculum ensures students excel in their academic performance and develop critical thinking skills.",
      category: "BOARD EXAM PREPARATION"
    }
  ];

  return (
    <section className="courses">
      <div className="container">
        <h2>Popular Courses</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-header">
                <h3>{course.title}</h3>
                <p style={{ fontSize: '1.1rem', opacity: '0.9' }}>{course.subtitle}</p>
              </div>
              <div className="course-body">
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>
                  {course.category}
                </p>
                <p>{course.description}</p>
                <button className="view-details-btn" style={{ marginTop: '20px' }}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
