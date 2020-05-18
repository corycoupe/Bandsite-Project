import React from "react";

function VideoList({ videoListArray, mainId }) {
  return (
    <div className="video-list">
      <h2 className="video-list__title">NEXT VIDEO</h2>
      {videoListArray
        .filter((video) => video.id !== mainId)
        .map((video) => (
          <div className="video-list__block">
            <div className="video-list__image">
              <img
                className="video-list__image--src"
                src={video.image}
                alt=""
              />
            </div>
            <div className="video-list__text-area">
              <h3 className="video-list__text-area--head">{video.title}</h3>
              <p className="video-list__text-area--foot">{video.channel}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default VideoList;
