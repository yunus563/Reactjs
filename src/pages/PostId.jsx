import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hook/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/library/Loader/Loader";
import MyButton from "../components/library/Button/myButton";
import {Link} from 'react-router-dom'
const PostId = () => {
  const IdParams = useParams();
  const [posts, setPosts] = useState({});
  const [comment, setComment] = useState([]);

  const [fetchingId, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPosts(response.data);
  });
  const [fetchingComment, isComLoading, errorCom] = useFetching(async (id) => {
    const response = await PostService.getComments(id);
    setComment(response.data);
  });

  useEffect(() => {
    fetchingId(IdParams.id);
    fetchingComment(IdParams.id);
  }, []);

  return (
    <div style={{margin:'15px 0'}}>
      <MyButton> <Link to="/posts">Back</Link></MyButton>
      <h1>About This Page with ID = {IdParams.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{marginBottom:'15px'}}>
          <h3>
            Title: <p>{posts.title}</p>
          </h3>
        </div>
      )}
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comment.map((com, index) => (
            <div key={index}>
              <h3>{com.email}</h3>
              <p>{com.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostId;
