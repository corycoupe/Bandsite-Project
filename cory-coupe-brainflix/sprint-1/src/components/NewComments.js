import React from "react";

function NewComments({ comments }) {
  return (
    <div className="new-comments">
      <ul className="new-comments__list">
        {comments.map((comments) => (
          <li className="new-comments__card">
            <div className="new-comments__card-image"></div>
            <div className="new-comments__card-content">
              <div className="new-comments__card-title">
                <h2 className="new-comments__card-title--name">
                  {comments.name}
                </h2>
                <h3 className="new-comments__card-title--date">
                  {comments.date}
                </h3>
              </div>
              <p className="new-comments__card-comment">{comments.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewComments;
