import React from "react";
import "../style/Home.css";

const Home = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h3>Home Page</h3>
        <h1>
          Welcome <span style={{ color: "#03a9f4" }}>{localStorage.name}</span>
        </h1>
      </div>
      <div className="home">
        <div>
          <ol><h3>Reactjs</h3>
            <li>UseContext</li>
            <li>React-router-dom v6</li>
            <li>API</li>
            <li>useFetch</li>
            <li>Components</li>
            <li>Hook</li>
            <li>Authorization</li>
            <li>LocaleStorage</li>
            <li>My-UI Framework</li>
            <li>Realization components</li>
            <li>react-transition-group</li>
            <li>Filtering</li>
            <li>Pagination</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
