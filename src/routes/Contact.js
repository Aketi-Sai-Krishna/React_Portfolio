import React from 'react';
import Footer from '../Components/Footer.js';
import Navbar from "../Components/Navbar.js";
import Heroimg2 from '../Components/Heroimg2.js';
import Contactcom from '../Components/contact.js';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT" text="Lets Have a Chat"/>
      <Contactcom/>
      <Footer/>
    </div>
  )
}

export default Contact;
