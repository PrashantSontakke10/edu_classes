import React from "react";

const ValueOfferings = () => {
  const offerings = [
    {
      title: "AIM e-Learning",
      description:
        "Online learning platform with interactive video lessons and study materials",
    },
    {
      title: "AIM e-Assessment",
      description:
        "Regular online tests and assessments to track progress",
    },
  ];

  const features = [
    {
      title: "Professionally Run Organization",
      description:
        "We are a hub for entrepreneurs and not just a bunch of employees because everyone owns their role & responsibilities to deliver the best performance.",
    },
    {
      title: "Highly Qualified Faculties",
      description:
        "Experienced and dedicated teachers with expertise in their subjects, committed to student success and academic excellence.",
    },
    {
      title: "Proven Track Record",
      description:
        "Our students consistently achieve excellent results in board exams and competitive examinations, with many securing top ranks in their respective fields.",
    },
    {
      title: "Quality Study Material",
      description:
        "Comprehensive study materials and practice papers designed by experienced educators to enhance learning outcomes.",
    },
    {
      title: "Library Facility",
      description:
        "Well-stocked library with extensive collection of reference books, textbooks, and digital resources for all subjects.",
    },
    {
      title: "Computer Lab",
      description:
        "Modern computer lab with internet access for research, online learning, and digital assessments.",
    },
    {
      title: "Doubt Clearing Sessions",
      description:
        "Regular doubt clearing sessions where students can get personalized help with difficult concepts from subject experts.",
    },
    {
      title: "Parent Teacher Meetings",
      description:
        "Regular PTMs and monthly progress reports to keep parents informed about their child's academic progress and areas for improvement.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Value Offerings
        </h2>

        {/* Top Offerings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-10 text-center transition-transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {offering.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {offering.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-8 text-center transition-transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValueOfferings;
