
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import React from "react";
import "./App.css"; // keep if you have custom styles
import EnexusLanding from "./components/EnexusLanding";

function App() {
  return (
    <>
      <EnexusLanding />
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
