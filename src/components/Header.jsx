  import { useState } from "react";
  import { Container } from "react-bootstrap";
  import { Nav } from "react-bootstrap";
  import { Navbar } from "react-bootstrap";
  import "../estilos/App.css"
  import { Link } from "react-router-dom";
  import Modal from 'react-bootstrap/Modal';
  import Button from 'react-bootstrap/Button';


  const Header = () => {

    const [showModal, setShowModal] = useState(false); // Estado para controlar si se muestra el modal o no

  // para abrir el modal
  const handleShowModal = () => {
    setShowModal(true);
  }

  // para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
  }

      return (
          <>
<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="logoyletras ">
        <img className="logo" src="src/imagenes/logo.png"></img>
            <h1 className="letras">OYE</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menu">
            <Nav.Link as={Link} to="/" className="menu active">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Canciones" className="menu">Canciones</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link><button className="btn1 btn btn-primary active " onClick={handleShowModal}>Contacto</button></Nav.Link>
            <Nav.Link as={Link} to="/Iniciar"><button className="btn1 btn btn-primary">Iniciar Sesión</button></Nav.Link>
            <Nav.Link as={Link} to="/Registro"><button className="btn1 btn btn-primary">Registro</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

     {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="tituloContacto">Contacto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>info@oye.com</p>
          <a href="#">+1 123 123123</a>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


  export default Header;

