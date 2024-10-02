import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Register.css';
import { Nav } from 'react-bootstrap';

function RegistrationPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(event) {
        const { name, value } = event.target;
        setUsername(value);
    }

    function handleChange2(event) {
        const { name, value } = event.target;
        setPassword(value);
    }

    async function register(val) {
        val.preventDefault();
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok){
            alert("Registration sucessfull");
        }else{
            alert("registration failed")
        }
    }

    return (
        <form className='register' onSubmit={register}>
            <div className='title'>
                Register
            </div>
            <Form.Control className='uname' value={username} type="text" placeholder="Username" onChange={handleChange} />
            <Form.Control className='pwd' value={password} type="password" placeholder="Password" onChange={handleChange2} />
            <button>Submit</button>
            <div className="already-registered">
                Already registered? <u className="login-link"><Nav.Link href="/login">Login</Nav.Link></u>
            </div>
        </form>
    );
}

export default RegistrationPage;