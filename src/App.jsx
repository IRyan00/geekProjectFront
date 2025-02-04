import './App.css';
import NavBar from './components/partials/NavBar';
import Home from './pages/home/Home';
import About from './pages/About';
import Articles from './pages/Articles'
import Footer from './components/partials/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from './pages/test';

import ArticleID from './pages/ArticleID'


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Test/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/articleid' element={<ArticleID />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>

        <Footer />
      </Router >
    </>
  )
}

export default App;
