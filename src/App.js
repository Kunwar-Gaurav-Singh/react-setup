import React from "react";

import Test from "./components/PostContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Social App</h1>
      <Test />
    </div>
  );
}

export default App;

/* 
  post 
  likes - Recommended
  comments - nested () - data - Text - Must
  css - nice to have

  reply -> nestedReply1 -> nestedReply2
  reply2 -> .......
  comments : {
    value: test,
    replies: [
      {},
      {},
      {},
    ]
  }
*/

/*
  {
    post : {
      id: 4,
      likes: 0,
      dislikes: 0,
      comments: comments
    }
  }

  comments : {
    id: 1,
    likes: 1,
    dislikes: 0,
    comments: comments
  }
*/