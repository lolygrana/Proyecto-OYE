import "../estilos/App.css";
import { useState, useEffect } from "react";

const Top3 = () => {
  const [topThreeSongs, setTopThreeSongs] = useState([]);

  useEffect(() => {
    fetch('../src/datos.json')
      .then(response => response.json())
      .then(data => {
        const filteredData = data.canciones.filter(song => song.reproducciones > 0);
        const sortedData = filteredData.sort((a, b) => b.reproducciones - a.reproducciones);
        const topThreeSongs = sortedData.slice(0, 3);
        setTopThreeSongs(topThreeSongs);
      })
      .catch(error => console.error(error));
  }, []);



  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="paraOcultar"></th>
            <th scope="col" className="top">
              Top 3
            </th>
            <th scope="col" className="paraOcultar"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="tabla">
            <td className="paraOcultar">Nombre</td>
            <td>Canción</td>
            <td className="paraOcultar"></td>
          </tr>
          {topThreeSongs.map((song, index) => (
            <tr className="tabla" key={index}>
              <td className="paraOcultar">{song.nombre}</td>
              <td>
                <audio
                  src={`/canciones/${song.ruta}`}
                  type="audio/mpeg" 
                  controls
                  onError={() => console.log("No se puede cargar el archivo de audio.")}
                ></audio>
              </td>
              <td className="paraOcultar"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Top3;


// import cancion1 from "../assets/canciones/cinco.mp3";
// import cancion2 from "../assets/canciones/cuatro.mp3";
// import cancion3 from "../assets/canciones/dos.mp3";

// fetch('datos.json')
//   .then(response => response.json())
//   .then(data => {
//     // Lógica de filtrado y ordenamiento
//     const filteredData = data.filter(song => song.reproducciones > 0); // Filtrar canciones con reproducciones mayores a 0
//     const sortedData = filteredData.sort((a, b) => b.reproducciones - a.reproducciones); // Ordenar canciones de forma descendente
//     const topThreeSongs = sortedData.slice(0, 3); // Obtener las tres primeras canciones de la lista ordenada
//   })
//   .catch(error => console.error(error));


// const Top3 = (topThreeSongs) => {
//     return(
//         <>
//         <table class="table">
//   <thead>
//     <tr>
//       <th scope="col"></th>
//       <th scope="col" className="top">Top 3</th>
//       <th scope="col"></th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr className="tabla">
//       <td>Nombre</td>
//       <td>Canción</td>
//       <td></td>
//     </tr>
//     <tr className="tabla">
//       <td>Nuevamente</td>
//       <td><audio src={cancion1} typeof="mpeg" controls onError={() => console.log("No se puede cargar el archivo de audio.")}></audio></td>
//       <td></td>
//     </tr>
//     <tr className="tabla">
//     <td>Suave</td>
//       <td><audio src={cancion2} typeof="mpeg" controls onError={() => console.log("No se puede cargar el archivo de audio.")}></audio></td>
//       <td></td>
//     </tr>
//     <tr className="tabla">
//       <td>Alas</td>
//       <td><audio src={cancion3} typeof="mpeg" controls onError={() => console.log("No se puede cargar el archivo de audio.")}></audio></td>
//       <td></td>
//     </tr>
//   </tbody>
// </table>
//         </>
//     );
// };