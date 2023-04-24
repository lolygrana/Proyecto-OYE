import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../estilos/Footer.css"


const LayoutRoot = () => {
    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>; 
};
export default LayoutRoot;