import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaTwitter, FaInstagram, FaTwitch, FaGoogle, FaGithub, FaDiscord } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';


const RightSideNav = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { signInProvider } = useContext(AuthContext);
    const providerGoogle = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInProvider(providerGoogle)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className='shadow p-3'>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Continue With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Continue With GitHub</Button>
            </ButtonGroup>
            <div className='my-3'>
                <h5>Find Us On: </h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2 shadow-sm'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 shadow-sm'><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2 shadow-sm'><FaTwitter></FaTwitter>  Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 shadow-sm'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2 shadow-sm'><FaDiscord></FaDiscord> Discord</ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;