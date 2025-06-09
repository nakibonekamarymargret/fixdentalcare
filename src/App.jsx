// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
        
        </Routes>
      </main>
    </div>
  );
}
