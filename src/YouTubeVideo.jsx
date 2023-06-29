import React from 'react';
import YouTube from 'react-youtube';


const YouTubeVideo = () => {
    // YouTube video options
    const opts = {
      height: '700',
      width: '1200',
    };
  
    // YouTube video ID
    const videoId = 'Gx3OtHnG6pY';
  
    return (
      <div className="video-container flex-grow">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    );
  };
  
  export default YouTubeVideo;
  