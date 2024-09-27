import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoTemplate = ({ content, onContentChange, onSave }) => {
  const [videoUrl, setVideoUrl] = useState(content.videoUrl || '');
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    setVideoUrl(e.target.value);
    setIsSaved(false); // Reset save status when editing the URL
  };

  const handleSave = () => {
    onContentChange({ videoUrl });
    setIsSaved(true); // Set the saved status
    if (onSave) {
      onSave(videoUrl); // Trigger onSave if passed as prop
    }
  };

  return (
    <div className="video-template">
      <h3>Video Template</h3>
      <input
        type="text"
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={handleChange}
        className="video-url-input"
      />
      <button onClick={handleSave} className="save-button">
        Save Video
      </button>
      {isSaved && <p className="save-message">Video URL saved successfully!</p>}

      {/* ReactPlayer instead of iframe */}
      {videoUrl && (
        <div >
          <ReactPlayer className="video-player"
            url={videoUrl}
            controls={true}
            width="100%"
            height="360px"
            
          />
        </div>
      )}
    </div>
  );
};

export default VideoTemplate;
