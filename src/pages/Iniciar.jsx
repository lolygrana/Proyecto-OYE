import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../estilos/Formularios.css"


const Iniciar = () => {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [correoError, setCorreoError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    // Validar correo electrónico con una expRegular
    if (!correo.match(/^\S+@\S+\.\S+$/)) {
        setCorreoError("El correo electrónico debe tener formato de correo conteniendo un @ y un dominio.");
    } else {
        setCorreoError("");
    }

    // Validar contraseña
    if (password.length < 8) {
        setPasswordError("La contraseña debe tener más de 8 caracteres.");
    } else {
        setPasswordError("");
    }
}

    return (
        <div className='formularioIniciar'>
            <h1 className='tituloForm'>Inicio de Sesión</h1>
            <hr />
            <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    {correoError && <Form.Text className="text-danger">{correoError}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
                </Form.Group>

            <Button variant="primary" type="submit">
                Continuar
            </Button>
        </Form>
    </div>
    );
};

export default Iniciar;