import React, { useEffect, useState } from "react";
import "./style/App.css";
import { BrowserRouter as Router, Route, Link, Routes, } from "react-router-dom";

import AppRouter from "./components/AppRouter";
import Navbar from "./components/library/Navbar/Navabar";
import { AuthContext } from "./context/index";


const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loader, setLoader] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("auth" && "name")) {
      setIsAuth(true);
    }
    setLoader(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        name,
        setName,
        loader,
      }}
    >
      <div iv className="App">
        <Router>
          <Navbar />
          <AppRouter />
        </Router>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
