import React from "react";
import Post from "../Posts/Posts";
import Comments from "../Posts/Comments";

import { posts } from "../../utils/posts";

export const createComment = (text, parentPostId, level) => {
  return {
    id: `${parentPostId}-${level}`,
    likes: 0,
    dislikes: 0,
    value: text,
    children: [],
  };
};

const Test = () => {
  const [postList, setPostList] = React.useState(posts);
  const [inputText, setInputText] = React.useState("");

  const handleInputChange = (evt) => {
    setInputText(evt.target.value);
  };

  const findChild = (comments, commentId) => {
    if (!comments || !commentId) return;
    return comments.find((comment) => {
      if (comment.id === commentId) return comment;
      console.log(comment);
      if (comment.children) return findChild(comment.children, commentId);
      return;
    });
  };

  const addCommentToPost = (text, postId, commentId = null) => {
    const newPostList = [...postList];
    const post = newPostList.find((post) => post.id === postId);
    let comment = null;
    if (commentId) {
      const selectedComment = findChild(post.comments, commentId);
      console.log(selectedComment);
      let child = selectedComment.children || [];
      comment = createComment(text, commentId, selectedComment.children.length);
      child.push(comment);
      console.log(selectedComment);
    } else {
      let postComments = post.comments || [];
      comment = createComment(text, postId, postComments.length);
      postComments.push(comment);
      post.comments = postComments;
    }
    setPostList(newPostList);
    setInputText("");
  };

  const handleCommentSubmit = (evt, postId) => {
    evt.preventDefault();
    addCommentToPost(inputText, postId);
  };

  return (
    <>
      {postList.map((post) => {
        return (
          <div key={post.id}>
            <Post id={post.id} />
            <form onSubmit={(evt) => handleCommentSubmit(evt, post.id)}>
              <input
                style={{ width: "70px", height: "30px" }}
                type="text"
                value={inputText}
                onChange={handleInputChange}
              />
            </form>
            <Comments
              comments={post.comments}
              handleCommentSubmit={addCommentToPost}
              postId={post.id}
            />
          </div>
        );
      })}
    </>
  );
};

export default Test;
