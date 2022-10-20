import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const LogIn = () => {

    const { logInEmaiPassword } = useContext(AuthContext);
    const [successMessage, setSuccessMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInEmaiPassword(email, password)
            .then((result) => {
                console.log(result.user)
                form.reset()
                setSuccessMessage("Successfully Logged In")
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className='w-75 mx-auto mt-5 shadow-lg p-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className='text-success'><small>{successMessage}</small></p>
                <Button variant="outline-dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default LogIn;