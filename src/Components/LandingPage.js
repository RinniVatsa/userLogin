import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';


const LandingPage = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    const handleAlreadyRegisteredClick = () => {
        setShowLoginForm(true);
    };

    const handleCreateAccountClick = () => {
        setShowRegisterForm(true);
    };

    return ( <
            div className = "landing-page" >
            <
            h1 > Welcome to Our Application! < /h1> {!showLoginForm && !showRegisterForm && ( <
                div className = "button-container" >
                <
                button onClick = { handleAlreadyRegisteredClick } > Already Registered ? Login < /button> <
                button onClick = { handleCreateAccountClick } > Create Account < /button> < /
                div >
            )
        } { showRegisterForm && < RegisterForm / > } { showLoginForm && < LoginForm / > } <
        /div>
);
};

export default LandingPage;