// src/components/LoginForm.js
import React, { useState } from 'react';
// import { authService } from '../services/authService';
import { sesionservice } from '../services/sesionservice';
import '../assets/styles/styles.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


function LoginForm() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  // Estado para la contraseña
    const [password1, setPassword1] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navegate = useNavigate()

    const add = () => {

        const loginfro = () => {
            navegate(`/`)
        }

        if(password == password1 && nombre != "" && apellido != "" && email != "" && password != "" ){
            alert("resgistr0")
            Axios.post('http://localhost:3001/create', {
                nombre:nombre,
                apellido:apellido,
                email:email,
                password:password
                // clave:valor
            }).then (()=>{
                alert('usted se a registrado');
                loginfro()
            })
        }
        else{
            alert("las contraseñas deben ser iguales")
        }}

       /* const handleSubmit = (e) => {
            e.preventDefault();
            setLoading(true);
            setErrorMessage('');
    
    sesionservice.login(nombre, apellido, email, password)
            .then(response => {
                setLoading(false);
                if (response.success) {
                    navegate('/dash');
                } else {
                    setErrorMessage(response.message);
                }
            })
            .catch(error => {
                setLoading(false);
                setErrorMessage(error.message);
            });
        };

    
        */
    

    return (
        // onSubmit={handleSubmit}
        <form >
            <div>
                <label>Nombre:</label><br/>
                <input
                    type="name"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Apellido:</label><br/>
                <input
                    type="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label><br/>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Contraseña:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Confirmar Contraseña:</label>
                <input
                    type="password"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    required
                />
            </div>
            <button onClick={add} type="submit" disabled={loading}>
                {loading ? 'Cargando...' : 'Ingresar'}
            </button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
    );
}

export default LoginForm;