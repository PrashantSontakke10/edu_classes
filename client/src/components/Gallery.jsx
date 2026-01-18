import React, { useState } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');

  // Sample photo data - replace with actual images
  const photos = [
    {
      id: 1,
      src: '/images/ceremony-1.jpg',
      alt: 'AIM Institute Ceremony',
      title: 'Ceremony Event'
    },
    {
      id: 2,
      src: '/images/ceremony-2.jpg',
      alt: 'Welcome Ceremony',
      title: 'Welcome Event'
    },
    {
      id: 3,
      src: '/images/ceremony-1.jpg',
      alt: 'AIM Institute Ceremony',
      title: 'Ceremony Event'
    },
    {
      id: 4,
      src: '/images/ceremony-2.jpg',
      alt: 'Welcome Ceremony',
      title: 'Welcome Event'
    },
    {
      id: 5,
      src: '/images/ceremony-1.jpg',
      alt: 'AIM Institute Ceremony',
      title: 'Ceremony Event'
    },
    {
      id: 6,
      src: '/images/ceremony-2.jpg',
      alt: 'Welcome Ceremony',
      title: 'Welcome Event'
    }
  ];

  // Sample video data - replace with actual video URLs
  const videos = [
    {
      id: 1,
      title: 'AIM Institute Overview',
      description: 'Learn about our institute and programs',
      thumbnail: '/images/ceremony-1.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with actual video URL
    },
    {
      id: 2,
      title: 'Student Success Stories',
      description: 'Hear from our successful students',
      thumbnail: '/images/ceremony-2.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with actual video URL
    },
    {
      id: 3,
      title: 'Classroom Experience',
      description: 'See our teaching methodology',
      thumbnail: '/images/ceremony-1.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with actual video URL
    },
    {
      id: 4,
      title: 'Events and Activities',
      description: 'Our annual events and celebrations',
      thumbnail: '/images/ceremony-2.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with actual video URL
    }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Gallery</h2>
        
        {/* Tab Navigation */}
        <div className="gallery-tabs">
          <button
            className={`gallery-tab ${activeTab === 'photos' ? 'active' : ''}`}
            onClick={() => setActiveTab('photos')}
          >
            Photos
          </button>
          <button
            className={`gallery-tab ${activeTab === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            Videos
          </button>
        </div>

        {/* Photos Section */}
        {activeTab === 'photos' && (
          <div className="gallery-photos">
            <div className="photos-grid">
              {photos.map((photo) => (
                <div key={photo.id} className="photo-item">
                  <div className="photo-wrapper">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="photo-image"
                    />
                    <div className="photo-overlay">
                      <h4>{photo.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos Section */}
        {activeTab === 'videos' && (
          <div className="gallery-videos">
            <div className="videos-grid">
              {videos.map((video) => (
                <div key={video.id} className="video-item">
                  <div className="video-wrapper">
                    <iframe
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="video-iframe"
                    ></iframe>
                    <div className="video-info">
                      <h4>{video.title}</h4>
                      <p>{video.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
