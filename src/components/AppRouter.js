import React, { useContext } from "react";

import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

import { privateRouter, publicRouter } from "../router/routes";
import { AuthContext } from "../context/index";
import Loader from "./library/Loader/Loader";
import Logout from '../pages/Login'
import Home from '../pages/Home'

const AppRouter = () => {
  const { isAuth, loader } = useContext(AuthContext);

  if (loader) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRouter.map((route, index) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={index}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRouter.map((route, index) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={index}
        />,
        <Route path="*" element={<Logout />} />
      ))}
    </Routes>
  );
};

export default AppRouter;