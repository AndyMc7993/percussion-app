import React from 'react';
import './App.css';
import NavBar from './components/Nav-bar';
import Footer from './components/Footer';
import Percussion from './components/Percussion';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Percussion className="percussion-section"/>
      <Footer />
    </div>
  );
}

export default App;
