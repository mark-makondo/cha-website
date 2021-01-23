import React, { useEffect, useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Works from './components/Works';

// animations
import Animations from './animation/animation'

const App:React.FC<Props> = () =>{

  const [spanId , setSpanId] = useState<any>('');

  useEffect(()=>{
    
    Animations()
    
  },[])



  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Works
        spanId = {spanId}
        setSpanId = {setSpanId}
      />
      <Footer/>
    </div>
  );
}

interface Props{

}
export default App;
