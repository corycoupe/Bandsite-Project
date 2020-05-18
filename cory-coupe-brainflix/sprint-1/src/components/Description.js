import React from "react";
import view from "../assets/icons/SVG/Icon-views.svg";
import likes from "../assets/icons/SVG/Icon-likes.svg";

function Description({ mainVideo }) {
  return (
    <section className="description">
      <div className="description__header">
        <h2 className="description__header-title">{mainVideo.title}</h2>
        <div className="description__header-uploaded">
          <p className="description__header-uploaded--creator">
            {mainVideo.channel}
          </p>
          <p className="description__header-uploaded--date">
            {mainVideo.timestamp}
          </p>
        </div>
        <div className="description__header-container">
          <div className="description__header-views views-likes">
            <img
              src={view}
              className="description__header-views--image views-likes--image"
              alt=""
            ></img>
            <p className="description__header-views--count views-likes--paragraph">
              {mainVideo.views}
            </p>
          </div>
          <div className="description__header-likes views-likes">
            <img
              src={likes}
              className="description__header-likes--image views-likes--image"
              alt=""
            ></img>
            <p className="description__header-likes--count views-likes--paragraph">
              {mainVideo.likes}
            </p>
          </div>
        </div>
      </div>
      <p className="description__text"> {mainVideo.description} </p>
    </section>
  );
}

export default Description;
