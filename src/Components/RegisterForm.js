import React, { useState } from 'react';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        companyName: '',
        isAgency: false
    });
    const [submittedData, setSubmittedData] = useState(null);


    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleCreateAccount = (e) => {
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(formData));
        alert('Account created successfully!');
        console.log('Form submitted:', formData);
        // Reset form fields after submission
        setFormData({
            fullName: '',
            phoneNumber: '',
            email: '',
            password: '',
            companyName: '',
            isAgency: false
        });
    };


    return ( <
        div className = "form-container" >
        <
        h2 > Create Account < /h2> <
        form onSubmit = { handleCreateAccount } >
        <
        input type = "text"
        name = "fullName"
        placeholder = "Full Name"
        value = { formData.fullName }
        onChange = { handleInputChange }
        required /
        >
        <
        input type = "tel"
        name = "phoneNumber"
        placeholder = "Phone Number"
        value = { formData.phoneNumber }
        onChange = { handleInputChange }
        required /
        >
        <
        input type = "email"
        name = "email"
        placeholder = "Email"
        value = { formData.email }
        onChange = { handleInputChange }
        required /
        >
        <
        input type = "password"
        name = "password"
        placeholder = "Password"
        value = { formData.password }
        onChange = { handleInputChange }
        required /
        >
        <
        input type = "text"
        name = "companyName"
        placeholder = "Company Name"
        value = { formData.companyName }
        onChange = { handleInputChange }
        />  <div> <
        label >
        Are you an agency ?
        <
        select name = "isAgency"
        value = { formData.isAgency }
        onChange = { handleInputChange } >
        <
        option value = { true } > Yes < /option> <
        option value = { false } > No < /option> < /
        select > <
        /label> < /
        div > <
        button type = "submit" > Create Account < /button> < /
        form >

        <
        /div>
    );
};

export default RegisterForm;