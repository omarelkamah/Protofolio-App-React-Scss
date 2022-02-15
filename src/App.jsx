import React, { useState } from 'react';

import './app.scss';

import Contact from "./components/contact/Contact";
import Home from './components/home/Home';
import Menue from './components/menue/Menue';
import Navbar from "./components/NavBar/Navbar";
import Protofolio from './components/protofolio/Protofolio';
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";



function App() {
  const [openMenue, handeleMenue] = useState(false);
  
  return (
    <div className="App">
      <Navbar openMenue={openMenue} handeleMenue={handeleMenue} />
      <Menue openMenue={openMenue} handeleMenue={handeleMenue} />
      <div className="sectionsContainer">
        <Home />
        <Protofolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
