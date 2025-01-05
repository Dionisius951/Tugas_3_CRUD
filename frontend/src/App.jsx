import React from "react";
import Home from "./pages/home";
import RegisterForm from "./pages/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/:id" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
