import React from "react";

const QuickEnrollment = () => {
  const enrollmentOptions = [
    {
      title: "Primary Classes (5th - 7th)",
      description: "Strong foundation building for young learners",
    },
    {
      title: "Middle School (8th - 10th)",
      description: "Comprehensive preparation for board exams",
    },
    {
      title: "Weekend Classes",
      description: "Flexible weekend batches for working students",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Quick Enrollment Links
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {enrollmentOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {option.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default QuickEnrollment;
