import { Link, useMatch, useResolvedPath } from "react-router-dom"
import About from "./pages/About" 
import Img from "../src/images/PIC.jpg";
import { useState } from "react"

export default function Navbar() {
  const [Menu,SetMenu]=useState("menu");
  return (
    <div className="n">
   
      
    <nav className="nav">
          <ul>
          <label> <CustomLink  to="/" onClick={()=>SetMenu("Home")} className={Menu==="home"?"actiive":""} >Home</CustomLink> </label>
            <label><CustomLink to="/about" onClick={()=>SetMenu("about")} className={Menu==="home"?"actiive":""}>About Us</CustomLink></label>
            <label><CustomLink  to="/clints" onClick={()=>SetMenu("clint")} className={Menu==="home"?"actiive":""}  >Clints</CustomLink></label>
        
            <label><CustomLink to="/contact"  onClick={()=>SetMenu("contact")} className={Menu==="home"?"actiive":""}>Contact Us</CustomLink></label>
      </ul>
   
      </nav>
    
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
