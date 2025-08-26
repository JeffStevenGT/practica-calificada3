import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Works from "./pages/Works";
import SignUp from "./pages/SignUp";
import NavBar from "./componentes/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/News" element={<h1>News</h1>} />
        <Route path="/Contact" element={<h1>Contact</h1>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
