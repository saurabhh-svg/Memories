import React from "react";
import Post from "./Post/Post.js";
import useStyles from "./styles";
const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.something}>Postsss</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
