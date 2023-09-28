import React from "react";
import { createComment } from "../PostContainer";

const Comments = ({ comments = [], postId, handleCommentSubmit }) => {
  const [inputVal, setInputVal] = React.useState("");

  if (!comments.length) return;

  const handleInputChange = (evt) => {
    setInputVal(evt.target.value);
  };

  const handleSubmit = (evt, commentId) => {
    evt.preventDefault();
    handleCommentSubmit(inputVal, postId, commentId);
  };

  return (
    <>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>{comment.value}</p>
            <form onSubmit={(evt) => handleSubmit(evt, comment.id)}>
              <input
                style={{ width: "40px", height: "20px" }}
                onChange={handleInputChange}
              />
            </form>
            <Comments
              comments={comment.children}
              postId={postId}
              handleCommentSubmit={handleCommentSubmit}
            />
          </div>
        );
      })}
    </>
  );
};

export default Comments;
