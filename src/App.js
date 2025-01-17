// import logo from './logo.svg';
import './App.css';
import NavBar from './components/partials/NavBar';
import Home from './pages/home/Home';
import About from './pages/About';
import Articles from './pages/Articles'
import Contact from './pages/Contact';
import Footer from './components/partials/Footer';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </Router >
    </>
  )
}

export default App;
