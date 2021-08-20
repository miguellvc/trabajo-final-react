import React from "react";
import "../shared/shared.css"
// import { Link } from 'react-router-dom';
// import lagunabrava from "https://w0.peakpx.com/wallpaper/6/645/HD-wallpaper-flag-of-la-rioja-grunge-art-rhombus-grunge-texture-argentine-province-la-rioja-flag-argentina-national-symbols-la-rioja-provinces-of-argentina-creative-art.jpg";
export const SideBar = () => {
  return (
    <>
      <div className="sidebar"> 
        <div className="sidebar-logo">
          <img src="https://w0.peakpx.com/wallpaper/6/645/HD-wallpaper-flag-of-la-rioja-grunge-art-rhombus-grunge-texture-argentine-province-la-rioja-flag-argentina-national-symbols-la-rioja-provinces-of-argentina-creative-art.jpg" alt="" />
          <h1>Viví La Rioja</h1>
        </div>

        <ul>
                <li>
                    <a href="#">
                        Cerro el Toro
                    </a>
                </li>
                <li>
                    <a href="">
                        Talampaya
                    </a>
                </li>
                <li>
                    <a href="">
                        Parque Dinos
                    </a>
                </li>
            </ul>
      </div>
    </>
  );
};
