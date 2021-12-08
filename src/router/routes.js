import About from "../pages/About";
import PostId from "../pages/PostId";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Login from "../pages/Login";

export const privateRouter = [
  {
    path: "/",
    element: <Home/>,
    exact: true,
  },
  {
    path: "/about",
    element: <About/>,
    exact: true,
  },
  {
    path: "/posts",
    element: <Posts/>,
    exact: true,
  },
  {
    path: "/posts/:id",
    element: <PostId/>,
    exact: true,
  },
];

export const publicRouter = [
  {
    path: "/login",
    element: <Login/>,
    exact: true,
  },
]
