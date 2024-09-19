import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Sidebar from "./components/Sidebar"; 

function App() {
  return (
    <div className="flex  min-h-screen bg-black text-white p-4 ml-1/4 grow-0 ">
      <Sidebar />

      {/* Main content section */}
      <Router>
        <div className="mt-7 flex-1 overflow-y-auto  bg-neutral-800 mr-7 shadow-lg rounded-lg  h-full p-6 absolute inset-y-0 right-0 w-4/6">
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
