import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-container">
          <Header />
          <div className="content">
            <Home />s
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
