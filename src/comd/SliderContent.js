import React from "react";
import first from "./sliderImage";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map ((slide, index ,index1) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}>
          <div>
          <img  className="slide-image" src={slide.urls}  alt=""  />
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
          
          </div>
         

          
        </div>
     ))},
     
     </section>
     
  );
}

export default SliderContent;
