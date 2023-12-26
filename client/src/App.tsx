import React from "react";
import { Routes, Route } from "react-router-dom";

// imports all routes from the routes folder
import { Home, Dashboard } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
