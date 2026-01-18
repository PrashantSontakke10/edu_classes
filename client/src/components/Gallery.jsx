import React, { useState } from "react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");

  const photos = [
    { id: 1, src: "../../public/images/ceremony-1.jpg", alt: "AIM Institute Ceremony", title: "Ceremony Event" },
    { id: 2, src: "../../public/images/ceremony-2.jpg", alt: "Welcome Ceremony", title: "Welcome Event" },
    { id: 3, src: "../../public/images/ceremony-1.jpg", alt: "AIM Institute Ceremony", title: "Ceremony Event" },
    { id: 4, src: "../../public/images/ceremony-2.jpg", alt: "Welcome Ceremony", title: "Welcome Event" },
    { id: 5, src: "../../public/images/ceremony-1.jpg", alt: "AIM Institute Ceremony", title: "Ceremony Event" },
    { id: 6, src: "../../public/images/ceremony-2.jpg", alt: "Welcome Ceremony", title: "Welcome Event" },
  ];

  const videos = [
    {
      id: 1,
      title: "AIM Institute Overview",
      description: "Learn about our institute and programs",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Student Success Stories",
      description: "Hear from our successful students",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Classroom Experience",
      description: "See our teaching methodology",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "Events and Activities",
      description: "Our annual events and celebrations",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <section id="gallery" className="bg-slate-50 py-20">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Gallery
        </h2>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("photos")}
            className={`px-8 py-3 rounded-full font-semibold border-2 transition ${
              activeTab === "photos"
                ? "bg-blue-900 text-white border-blue-900"
                : "bg-white text-blue-900 border-blue-900 hover:bg-blue-100"
            }`}
          >
            Photos
          </button>

          <button
            onClick={() => setActiveTab("videos")}
            className={`px-8 py-3 rounded-full font-semibold border-2 transition ${
              activeTab === "videos"
                ? "bg-blue-900 text-white border-blue-900"
                : "bg-white text-blue-900 border-blue-900 hover:bg-blue-100"
            }`}
          >
            Videos
          </button>
        </div>

        {/* Photos */}
        {activeTab === "photos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:-translate-y-2"
              >
                <div className="relative w-full pt-[75%]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full transition group-hover:translate-y-0">
                  <h4 className="text-white text-lg font-semibold">
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
              >
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                ></iframe>

                <div className="p-5">
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-600">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;
