// src/components/LoginForm.js
import React, { useState } from 'react';
import { authService } from '../services/authService';
import '../assets/styles/styles.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
// import {index} from '../../../backend/index'

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  // Estado para la contraseña
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navegate = useNavigate()

    const add = () => {
        alert("resgistr0")//1
        Axios.post('http://localhost:3001/create', {
            email:email,
            password:password
            // clave:valor
        }).then (()=>{
            alert('usted se a registrado');
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        authService.login(email, password)
            .then(response => {
                alert(response.success)
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
        
    alert("asdf");    
    };

    const sessionFrom = () => {
        navegate(`/SessionLog`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
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
            <button onClick={add} type="submit" disabled={loading}>
                {loading ? 'Cargando...' : 'Ingresar'}
            </button>
            
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <br/>
            <div>
                <label className='color' onClick={sessionFrom}>registrase</label>
            </div>
            
        </form>
    );
    
};

export default LoginForm;
