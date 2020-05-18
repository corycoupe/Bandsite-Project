import React from "react";
function Comments() {
  return (
    <div className="comments">
      <div className="comments__header">
        <h2 className="comments__header-comment-count">3 Comments</h2>
      </div>
      <div className="comments__post-comments">
        <div className="comments__mohan">
          <img
            src="./images/Mohan-muruge.jpg"
            className="comments__mohan-image mohan-image"
            alt="Mohan"
          />
        </div>
        <div className="comments__input">
          <div className="comments__input-group">
            <h2 className="comments__input-title">JOIN THE CONVERSATION</h2>
            <textarea
              className="comments__input-field text-field"
              type="string"
              placeholder="That was easily the most spectacular BMX moment ever."
            ></textarea>
          </div>
          <button className="comments__input-submit">COMMENT</button>
        </div>
      </div>
    </div>
  );
}
export default Comments;
