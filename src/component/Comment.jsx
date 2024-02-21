import React from "react";
import "../style/component.css";

const Comment = () => {
  return (
    <div className="comment_div">
      <h2>Comment :</h2>
      <div className="comment_container">
        <input type="text" placeholder="Add a comment ..." />
        <div>
          send <img className="send" src={`/send.png`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Comment;
