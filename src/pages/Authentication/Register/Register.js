import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [successMessage, setSuccessMessage] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [checkBoxState, setCheckBoxState] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setSuccessMessage('');
        setPasswordError('');

        const form = event.target;
        const userName = form.userName.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password === confirmPassword) {
            createUser(email, password)
                .then((result) => {
                    form.reset();
                    setSuccessMessage("Registration Complete!");
                    setPasswordError('');
                    updateUserProfile({
                        displayName: userName,
                        photoURL: photo
                    })
                })
                .catch((error) => {
                    const errorMessage = (error.message).split(':')[1];
                    setPasswordError(errorMessage);
                })
        }
        else {
            setPasswordError("Password didn't match!! Try Again")
        }
    }


    const handleCheckBox = (event) => {
        setCheckBoxState(event.target.checked);
    }


    return (
        <div className='w-75 mx-auto mt-5 shadow-lg p-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="displayName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name='userName' placeholder="Your Username" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="photo">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Your Photo URL" required />
                </Form.Group>

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

                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirmPassword' placeholder="Enter your password again" required />
                </Form.Group>

                <p className='text-success'><small>{successMessage}</small></p>
                <p className='text-danger'><small>{passwordError}</small></p>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleCheckBox}
                        type="checkbox"
                        label={<>Accept <Link className='text-decoration-none' to='/terms'>Terms & Conditions</Link> </>} />
                </Form.Group>

                <Button variant="outline-dark" type="submit" disabled={!checkBoxState}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;