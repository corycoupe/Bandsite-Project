import React from "react";
import play from "../assets/icons/SVG/Icon-play.svg";
import expand from "../assets/icons/SVG/Icon-fullscreen.svg";
import volume from "../assets/icons/SVG/Icon-volume.svg";
function Video(mainVideo) {
  return (
    <section className="video">
      <div className="video-player">
        <div className="video-player__controls">
          <div className="video-player__btn-play-group">
            <button className="video-player__btn">
              <img src={play} alt="" />
            </button>
          </div>
          <div className="video-player__progress-bar">
            <div className="video-player__progress-timeline">
              <div className="video-player__progress-scrubber"></div>
            </div>
            <div className="video-player__progress-text">0:00 / 0:42</div>
          </div>

          <div className="video-player__btn-group">
            <button className="video-player__btn">
              <img src={expand} alt="" />
            </button>
            <button className="video-player__btn">
              <img src={volume} alt="" />
            </button>
          </div>
        </div>
        <video
          poster={mainVideo.image}
          class="video-player__video"
          src="https://ia800701.us.archive.org/26/items/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4"
        ></video>
      </div>
    </section>
  );
}

export default Video;
