//import React from "react";
import foto2 from "../imagenes/musica-chica.png"
import foto from "../imagenes/portada.png"
import "../estilos/Carrusel.css";
const Carrusel = () => {

    return(
        <>
        
        <section id="conCarrusel">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <img src={foto} className="img d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={foto2} className="img d-block w-100" alt="..."/>
                    </div>
            </div>
            </div> 
        </section>
        </>
    )
};
export default Carrusel;