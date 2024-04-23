import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        onLogin({ email, password });
        // Clear the login form fields after submission
        setEmail('');
        setPassword('');
    };

    return ( <
        div className = "login-form" >
        <
        h2 > Signin to your account < /h2> <
        form onSubmit = { handleLogin } >
        <
        label >
        Email:
        <
        input type = "email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        required /
        >
        <
        /label> <
        label >
        Password:
        <
        input type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        required /
        >
        <
        /label> <
        button type = "submit" > Login < /button> < /
        form > <
        /div>
    );
};

export default LoginForm;