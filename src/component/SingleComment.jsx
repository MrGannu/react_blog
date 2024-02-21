import React from "react";

const SingleComment = ({ comment }) => {
  return (
    <div className="SingleComment">
      <div className="user">
        <img src={`/${comment?.image}`} alt="" />
        <div className="info">
          <div className="username">
            <h4>{comment?.username}</h4>
            <span>{comment?.commentedAt}</span>
          </div>
          <p>{comment?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
