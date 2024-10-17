import React from 'react';

const CorporateVideo: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Corporate Video</h2>
      <div className="aspect-w-16 aspect-h-9">
        <video
          className="w-full h-full"
          controls
          poster="/path/to/video-poster.jpg"
        >
          <source src="/path/to/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="mt-4">
        This video showcases our company's values, mission, and the impact of our fleet management solutions on businesses worldwide.
      </p>
    </div>
  );
};

export default CorporateVideo;