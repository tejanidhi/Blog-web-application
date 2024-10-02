import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import './Login.css';
import {  Nav} from 'react-bootstrap';
import {Navigate} from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');

    function handleChange(event) {
        const { name, value } = event.target;
        setUsername(value);
    }

    function handleChange2(event) {
        const { name, value } = event.target;
        setPassword(value);
    }

    async function login(val) {
        val.preventDefault();
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
        console.log(response.ok)
        if (response.ok){
            setRedirect(true);
        }else{
            alert("wrong creds");
        }
    }

    if(redirect){
        return <Navigate to={'/'} />
    }
  return (
        <form className='login' onSubmit={login}>
            <div className='title'>
                Login
            </div>
            <Form.Control className='uname' value={username} type="text" placeholder="Username" onChange={handleChange} />
            <Form.Control className='pwd' value={password} type="password" placeholder="Password" onChange={handleChange2} />
            <button>Login</button>
            <div className="already-registered">
                Not registered? <u className="login-link"><Nav.Link href="/register" read>Register</Nav.Link></u>
            </div>
        </form>
  );
}

export default LoginPage;

