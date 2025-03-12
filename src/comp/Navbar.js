import React, { useState } from "react";
import Logo from "../images/Logo Maga 1.png"

import "./Navbar.css"

function Navba() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
    
        <img src={Logo}></img>
       <h1>megasoft</h1>
      
    </div>
  );
}

export default Navba;
