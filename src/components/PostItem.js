import React from "react";
import MyButton from "./library/Button/myButton";
import { Link } from "react-router-dom";


const postItem = (props) => {

  return (
    <div className="post">
      <div style={{fontFamily:'system-ui'}} className="post_content">
        <strong style={{fontFamily:'system-ui'}}>
         {props.post.id}.{props.post.title}
        </strong>
        <div style={{fontFamily:'system-ui'}}>{props.post.body}</div>
      </div>
      <div className="post_btn" style={{display:'flex'}}>
        <MyButton><Link to={`/posts/${props.post.id}`}>about</Link></MyButton>
        <MyButton onClick={() => props.removePost(props.post)}>delete</MyButton>
      </div>
    </div>
  );
};

export default postItem;
