import React from "react";

const Legacy = () => {
  const toppers = [
    {
      name: "PRIYA SHARMA",
      achievement: "95% in 10th Board Exams 2024",
    },
    {
      name: "ANITA SINGH",
      achievement: "98% in 8th Standard 2024",
    },
  ];

  return (
    <section className="bg-blue-900 text-white py-20 text-center">
      
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-10">
          LEGACY OF EXCELLENCE
        </h2>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center gap-16 mb-12 flex-wrap">
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-400">
              2,500+
            </div>
            <div className="text-lg mt-2">
              STUDENTS SUCCESSFUL
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-400">
              95%
            </div>
            <div className="text-lg mt-2">
              BOARD EXAM SUCCESS RATE
            </div>
          </div>
        </div>

        {/* Sub Heading */}
        <h3 className="text-2xl font-semibold mb-10">
          INSPIRING THE ASPIRANTS
        </h3>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {toppers.map((topper, index) => (
            <div
              key={index}
              className="bg-white/10 p-8 rounded-lg text-center"
            >
              <h4 className="text-xl font-semibold mb-2">
                {topper.name}
              </h4>
              <p className="text-base opacity-90">
                {topper.achievement}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Legacy;
