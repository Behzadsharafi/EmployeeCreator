import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <small>{post.category}</small>
    </div>
  );
};

export default Post;
