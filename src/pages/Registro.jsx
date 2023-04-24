import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../estilos/Formularios.css"


const Registro = () => {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [terminos, setTerminos] = useState(false);
    const [confirmacion, setConfirmacion] = useState("");
    const [edad, setEdad] = useState("");
    const [generoMusical, setGeneroMusical] = useState("");

    const [correoError, setCorreoError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [terminosError, setTerminosError] = useState("");
    const [confirmacionError, setConfirmacionError] = useState("");
    const [edadError, setEdadError] = useState("");
    const [generoMusicalError, setGeneroMusicalError] = useState("");


    const handleSubmit = (e) => {
    e.preventDefault();

    // Validar correo electrónico con una expRegular
    if (!correo.match(/^\S+@\S+\.\S+$/)) {
        setCorreoError("El correo electrónico debe tener formato de correo conteniendo un @ y un dominio.");
    } else {
        setCorreoError("");
    }

    // Validar contraseña
    if (!password || password.length < 8)  {
        setPasswordError("La contraseña debe tener más de 8 caracteres.");
    } else {
        setPasswordError("");
    }
    //validar confirmación de contraseña
    if (confirmacion !== password ) {
        setConfirmacionError("La contraseña y confirmación deben coincidir.");
    } else {
        setConfirmacionError("");
    }

    //validar la Edad
    if (!edad) {
        setEdadError("Se debe especificar un rango de edad.");
    } else {
        setEdadError("");
    }

    // Validar género musical
    if (!generoMusical) {
        setGeneroMusicalError("Se debe especificar un género musical favorito.");
    } else {
        setGeneroMusicalError("");
    }

    // Validar términos de uso
    if (!terminos) {
        setTerminosError("Debe aceptar los términos términos de uso para continuar.");
    } else {
        setTerminosError("");
        alert("Formulario enviado correctamente!");
        setCorreo("");
        setPassword("");
        setConfirmacion("");
        setEdad("");
        setGeneroMusical("");
        setTerminos(false);
    }

}

    return (
        <div className='body2'>
        <div className='formularioIniciar'>
            <h1 className='tituloForm'>Registro</h1>
            <hr />
            <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electrónico*</Form.Label>
                    <Form.Control type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    {correoError && <Form.Text className="text-danger">{correoError}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña*</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmar">
                    <Form.Label>Confirmar contraseña*</Form.Label>
                    <Form.Control type="password" placeholder="Confirmar contraseña" value={confirmacion} onChange={(e) => setConfirmacion(e.target.value)} />
                    {confirmacionError && <Form.Text className="text-danger">{confirmacionError}</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Genero Musical Favorito*</Form.Label>
                    <Form.Select value={generoMusical} onChange={(e) => setGeneroMusical(e.target.value)}>
                        <option>Seleccione...</option>
                        <option>Pop</option>
                        <option>Rock</option>
                        <option>Reggaeton</option>
                    </Form.Select>
                    {generoMusicalError && <div className="text-danger">{generoMusicalError}</div>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label><b>Edad*</b></Form.Label>
                    <Form.Check type="radio" name="edad" label="Menor a 20" value="Menor a 20" checked={edad === "Menor a 20"} onChange={(e) => setEdad(e.target.value)} />
                    <Form.Check type="radio" name="edad" label="20 a 40" value="20 a 40" checked={edad === "20 a 40"} onChange={(e) => setEdad(e.target.value)} />
                    <Form.Check type="radio" name="edad" label="Mayor a 50" value="Mayor a 50" checked={edad === "Mayor a 50"} onChange={(e) => setEdad(e.target.value)} />
                    {edadError && <Form.Text className="text-danger">{edadError}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Acepto los términos de uso*" checked={terminos} onChange={(e) => setTerminos(e.target.checked)} />
                    {terminosError && <Form.Text className="text-danger">{terminosError}</Form.Text>}
                </Form.Group>
                <p className='asterisco'>* Campos obligatorios</p>

            <Button variant="primary" type="submit" className='boton'>
                Continuar
            </Button>
        </Form>
        </div>
        </div>
    );
};

export default Registro;