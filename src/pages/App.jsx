import "../estilos/App.css"
import Carrusel from "../components/Carrusel";
import Top3 from "../components/top3.jsx";


const App = () => {
  return(
  <>
    <div className="body" id="Inicio">
    <main>
      <section className="container">
      <div className="card cardPrincipal">
      <div className="card-body">
        <div className="contenedor1">
        <h5 className="card-title">Canciones gratis para la comunidad!</h5>
        <p className="card-text">En este sitio podras escuchar audios de manera libre.</p>
        <a href="#" className="btn-carrusel btn btn-primary">Ver Canciones</a>
        </div>
        <div className="contenedor2">  
          <Carrusel/>
        </div> 
      </div>
      </div>
      </section>
      <div className="container2">
          <Top3/>
      </div>
    </main>
    </div>
</>
  )
};



export default App;
