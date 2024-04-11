import { useState } from 'react';
import './App.css'
import Main from "./components/Main.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Interest from "./components/Interest.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <div className="compartment">
        <img src="../public/profile-photo.jpeg" />
        <Main />
        <Contact />
        <About />
        <Interest />
        <Footer />
    </div>
  )
}

export default App
