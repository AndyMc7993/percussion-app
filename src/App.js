import React from 'react';
import './App.css';
import NavBar from './components/Nav-bar';
import Instrument from './components/Instrument';
import Footer from './components/Footer';
import Percussion from './components/Percussion';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Percussion />
      <Footer />
    </div>
  );
}

export default App;
