import { useState, useEffect } from 'react';
import "../estilos/Canciones.css"
import SongList from '../components/SongList';
import songsData from "../datos.json";

const Canciones = () => {
    const [busqueda, setBusqueda] = useState('');
    const [cancionesFiltradas, setCancionesFiltradas] = useState([]);

    useEffect(() => {
        const resultadosBusqueda = songsData.canciones.filter(cancion =>
        cancion.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
        setCancionesFiltradas(resultadosBusqueda);
    }, [busqueda]);

    const handleChange = event => {
        setBusqueda(event.target.value);
    };

    return (
    <div className="cards">
        <div className='containerBarra'>
        <h1 className='tituloCanciones'>Canciones</h1>
        <div className='containerInput'>
            <input
                type="text"
                className='form-control inputBuscar'
                value={busqueda}
                placeholder='Buscar..'
                onChange={handleChange}
            />
        </div>
        </div>
        <section className='sectionCanciones'>
        <SongList canciones={cancionesFiltradas} />
        </section>
    </div>
  )
};

export default Canciones;






// import React from 'react';
// import "../estilos/Canciones.css"
// import SongList from '../components/SongList';
// import canciones from "../datos.json";

// const Canciones = ()=>{
    

//         return(
//             <div className="cards">
//                 <div className='containerInput'>
//                     <input type="text"
//                         className='form-control inputBuscar' 
//                         //value={busqueda}
//                         placeholder='Buscar..'
//                         //onChange={handleChange}
//                     />
//                 </div>
//                 <SongList canciones={canciones} />
//             </div>
//         )
//     };

//     export default Canciones;


    // const [busqueda, setBusqueda] = useState('');
    // const handleChange = (e) => {
    //     setBusqueda(e.target.value);
    // };

    // const cancionesFiltradas = canciones.filter((cancion) =>
    //     cancion.nombre.toLowerCase().includes(busqueda.toLowerCase())
    // );
    // console.log(canciones)
















// const [usuarios, setUsuarios]= useState([]);//para los datos de forma dinamica
// const [tablaUsuarios, setTablaUsuarios]= useState([]); //Datos de forma estatica
// const [busqueda, setBusqueda]= useState(""); //Para controlar lo que se va digitando en la busqueda


// const peticionGet = async() => {
//     await axios('/src/assets/datos.json')
//    // .then(response => response.json())
//     //   .then(data => console.log(data))
//     .then(response=>{
//         setUsuarios(response.data);
//         setTablaUsuarios(response.data);
//         //console.log(response.data)
//     })
//       .catch(error => console.error(error));
//   }

//   useEffect(()=>{
//     peticionGet();
//   },[])