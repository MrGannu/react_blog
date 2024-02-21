import React from "react";
import Filter from "./Filter";
import { useParams } from "react-router-dom";
import { blogData } from "../data";
import Comment from "../component/Comment";
import SingleComment from "../component/SingleComment";

const Details = () => {
  const { id } = useParams();
  const data = blogData.find((blog) => blog.id === id);
  const comment = data.comments;

  if (!data) {
    return <div>No data found for this ID</div>;
  }

  return (
    <div className="details_div">
      <div className="container">
        <div className="details_left">
          <div className="blog_div">
            <h3>{data.title}</h3>
            <img src={`/${data.image}`} alt="blog-image" />
            <p>{data.desc}</p>
            <p>{data?.desc2}</p>
            <p>{data?.desc3}</p>
            <span className="span">
              {data.publishedAt} <b>Categorized as {data?.category}</b>
            </span>
          </div>
          <Comment />
          {comment?.map((comment) => (
            <SingleComment comment={comment} key={comment.id} />
          ))}
        </div>
        <div className="details_right">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Details;
