import Navbar from "./Navbar"
import Navba from "./comp/Navbar"
import Pricing from "./pages/clints"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/contact"
import Footer from "../src/components/Footer";
import { Routes, Route } from "react-router-dom"
import Clints from "./pages/clints"

function App() {
  return (
    <>
    <Navba/>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clints" element={<Clints />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
     
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
