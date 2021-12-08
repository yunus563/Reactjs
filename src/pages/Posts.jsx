import "../style/App.css";
import React, { useState, useEffect } from "react";
// Components
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostService from '../API/PostService'
// My UI
import {usePosts} from '../hook/usePosts'
import MyModal from '../components/library/Modal/myModal'
import MyButton from '../components/library/Button/myButton'
import Loader from '../components/library/Loader/Loader'
import {useFetching} from '../hook/useFetching'
import Pagination from '../components/library/Pagination/Pagination'
// util
import {getPagesCount} from '../utils/PageSettings'


function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)


  const [fetching, isLoading, error] = useFetching( async (limit, page) =>{
    const response = await PostService.getAll(limit,page,)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  })

  useEffect(() => {
    fetching(limit, page)
  }, [])


  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, { ...newPost }]);
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter((id) => id.id !== post.id));
  };

  function fetchPage(page) {
    setPage(page)
    fetching(limit, page)
  }

  return (
    <div>
      <MyButton onClick={() => setModal(true)}>Create post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0 50px " }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {error && <h1>Error with server</h1>}
      {isLoading ? <Loader/> : <PostList removePost={removePost} post={sortedAndSearchedPosts}  title="Posts" />}
      <Pagination page={page} totalPages={totalPages} fetchPage={fetchPage}/>
    </div>
  );
}

export default Posts;
