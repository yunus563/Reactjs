import React, {useState} from 'react'
// UI
import MyButton from "./library/Button/myButton";
import Myinput from "./library/Input/myInput";


const PostForm = ({create}) => {

  const [post, setPost] = useState({title:'', body:''});

  const submit = (e) => {
    e.preventDefault()
    if(!post.title.trim('')){
      alert("Please check your Title")
    }
    else if(!post.body.trim('')){
      alert("Please check your Description")
    }
    else {
      const newPost = {
        ...post, id: Date.now()
      }
      create(newPost)
      setPost({title:'', body:''})
    }
  }

  return (
    <form onSubmit={submit}>
        <Myinput
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Title"
        />
        <Myinput
          value={post.body}
          onChange={(e) => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="Description"
        />
        <MyButton>Create post</MyButton>
      </form>
  )
}

export default PostForm
