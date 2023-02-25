import React from "react";
import "./abc.css";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";



const Grid = () => {
  return (
    <div className="super-container">
      <div class="gallery-container">
   <div class="gallery-row">
     <div class="image-rectangle img1"></div>
     <div class="image-rectangle tall img2"></div>
     <div class="image-rectangle img3 col3"></div>
   </div>
   <div class="gallery-row">
     <div class="image-rectangle img4 sides"></div>
     <div class="image-rectangle tall img5"></div>
     <div class="image-rectangle img6 sides col6"></div>
   </div>
</div>
      <div className="text">
        <p>Welome to <strong>Clobog</strong> </p>
        <p>The Ultimate Destination for Affordable Fashion!</p>
        <button className="explore">Explore now</button>
      </div>
    </div>
  );
};

export default Grid;
