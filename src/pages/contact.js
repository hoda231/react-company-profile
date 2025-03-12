import "../styles/Contact.css"
import React from "react";
import Contact from "../helpers/categ"
import Img from "../images/PIC.jpg";
import { FaCalendar } from 'react-icons/fa'
import LocationOnIcon from '@mui/icons-material/LocationOn';

 function contact() {
  return ( 
  
  <div className="add">
      <img className="IMG" src={Img} />
      <div className="map">
        <div>
    <h1 >CAIRO, EGYPT</h1>
    <p>MEGASOFT FOR INFORMATION TECHNOLOGY EGYPT
       8,
    </p>
    <p> Abou El-Magd Amer Street, Ard El Golf.
  
    </p>
    <p>
      Nasr City | Cairo, Egypt
    </p>
    <h1>info@megasoft.com.egwww.megasoft.com.eg </h1>
</div>

<div>
  <h1   >My Google Maps Demo  </h1>
 


  </div>
  </div>
  
  <Contact/>
  
  </div>
      
  );
}
export default contact;