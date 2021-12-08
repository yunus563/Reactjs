import React from "react";
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from 'react-transition-group'


const PostList = ({ post, title, removePost }) => {
  if(!post.length){
    return <div style={{ textAlign: "center" }}> <h1>No posts</h1></div>
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", color:'#0D47A1' }}>{title}</h1>
      <TransitionGroup>
                {post.map((post) =>
                    <CSSTransition key={post.id} timeout={500} classNames="post">
                        <PostItem removePost={removePost} post={post}/>
                    </CSSTransition>
                )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
