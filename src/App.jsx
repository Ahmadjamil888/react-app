import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import User from "./User";
import Login from "./login";
import Dashboard from "./dashboard";
import NotFound from "./NotFound";
import About from "./about";
import Services from "./services";
import Solutions from "./solutions";
import Contact from "./contact";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<User isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;