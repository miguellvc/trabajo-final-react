import React, { Component } from 'react';
import lagunabrava  from "../../img/lagunabrava.jpg"
export class TouristSite extends Component {

    componentDidMount(){
        sitio(); 
    }

    render(){
        return(
           <section className="home" id="home">
                <div className="content">
                    <h3>its time to celebrate! the best <span> event organizers </span></h3>
                </div>

                <div className="swiper-container home-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"> <img src={ lagunabrava } alt=""/></div>
                    </div>
                </div>
           </section>
        )
    }

} 

const sitio = () => {
    console.log("Se ejecuta la función sitio")

}



