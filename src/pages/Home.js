import React from "react";
import Img from "../images/PIC.jpg";

import "../styles/Home.css";
import { Container } from "react-bootstrap";


function Menu(){
 
  return (
    <div className="menu">
    <img className="IMG" src={Img} />
      <h1 className="menuTitle">Megasoft</h1>
      <h1 className="pre">شركة ميجا سوفت
						</h1>	<p className="p">
              

برامج شركة ميجا سوفت هي أحد أفضل الحلول المالية العربية المتكاملة في مجال تكنولوجيا المعلومات والتي تستخدم أجهزة الحاسب الآلي سواء الفردية منها أو المتصلة معا من خلال مختلف انواع الشبكات
							</p>
     <div className="cards">
     <div className="card ">
    <img class="card-image"></img>
    <div class="category"> Illustration </div>
    <div class="heading"> A heading that must span over two lines
    <button className="watch_btn">watch</button>
        <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
    </div>
   </div>
    <div className="card ">
    <img class="card-image"></img>
    <div class="category"> Illustration </div>
    <div class="heading"> A heading that must span over two lines
    <button className="watch_btn">watch</button>
        <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
    </div>


    </div>
    <div class="card ">
    <img class="card-image"></img>
    <div class="category"> Illustration </div>
    <div class="heading"> A heading that must span over two lines
    <button className="watch_btn">watch</button>
        <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
    </div>
    </div>
    <div class="card ">
    <img class="card-image"></img>
    <div class="category"> Illustration </div>
    <div class="heading"> A heading that must span over two lines throw new Error("");
    
    <button className="watch_btn">watch</button>
        <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
    </div>
   
    


    </div>
       
    
   


</div>
</div>
  
  );
}

export default Menu;
