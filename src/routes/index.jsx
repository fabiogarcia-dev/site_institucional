// src/routes/index.jsx
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/contact";
import { Services } from "../pages/Services";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Services" element={<Services />} />
    </Routes>
  );
}