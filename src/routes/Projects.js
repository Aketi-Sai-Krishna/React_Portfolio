import React from 'react';
import Footer from '../Components/Footer.js';
import Navbar from "../Components/Navbar.js";
import Heroimg2 from '../Components/Heroimg2.js';
import Work from '../Components/work.js';

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="Projects" text="some of my recent works  "/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Projects;
