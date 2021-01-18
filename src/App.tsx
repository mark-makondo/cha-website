import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Works from './components/Works';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
