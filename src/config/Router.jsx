import "../estilos/App.css"
import Canciones from "../pages/Canciones";
import Iniciar from "../pages/Iniciar";
import Registro from "../pages/Registro";
import App from "../pages/App";
//import Contacto from "../pages/Contacto";
import LayoutRoot from "../layout/LayoutRoot";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutRoot />,
        children: [
            {
                index: true,
                element: <App/>
            },
            {
                path: "Canciones",
                element: <Canciones />
            },
            {
                path: "Iniciar",
                element: <Iniciar />,
            },
            {
                path: "Registro",
                element: <Registro />,
            },
        ],
    },
]);

export default router;




