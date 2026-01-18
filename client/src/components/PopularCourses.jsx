import React from "react";

const PopularCourses = () => {
  const courses = [
    {
      title: "PRIMARY CLASSES",
      subtitle: "5th to 7th GRADE",
      description:
        "Building strong fundamentals in Mathematics, Science, English, and Social Studies. Our specially designed program focuses on concept clarity and academic excellence for young learners.",
      category: "FOUNDATION BUILDING PROGRAM",
    },
    {
      title: "MIDDLE SCHOOL",
      subtitle: "8th to 10th GRADE",
      description:
        "Comprehensive preparation for board exams with focus on all subjects. Our curriculum ensures students excel in their academic performance and develop critical thinking skills.",
      category: "BOARD EXAM PREPARATION",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Popular Courses
        </h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >

              {/* Header */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-500 text-white text-center p-8">
                <h3 className="text-2xl font-semibold mb-2">
                  {course.title}
                </h3>
                <p className="text-lg opacity-90">
                  {course.subtitle}
                </p>
              </div>

              {/* Body */}
              <div className="p-8">
                <p className="text-sm text-gray-500 mb-4 font-semibold">
                  {course.category}
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {course.description}
                </p>

                <button className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition">
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
