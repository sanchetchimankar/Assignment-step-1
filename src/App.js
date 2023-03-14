import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./component/Home";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";

const App = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Login"> Dashboard </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Login"> Login </Link>
          </li>
         
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
