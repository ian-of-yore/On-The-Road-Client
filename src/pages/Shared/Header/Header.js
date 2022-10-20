import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserNinja } from 'react-icons/fa';
import { Image } from 'react-bootstrap';



const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-3'>
            <Container>
                <Navbar.Brand><Button variant="dark"><Link className='text-decoration-none text-white' to='/'>The Valyrian Post</Link></Button></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link >
                            {
                                user?.uid ?
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            {user.displayName ? user.displayName : user.email}
                                        </div>
                                        <div className='mx-3'>
                                            {
                                                user.photoURL4 ? <Image roundedCircle src={user.photoURL} style={{ height: '30px' }}></Image> : <FaUserNinja></FaUserNinja>
                                            }
                                        </div>
                                        <div>
                                            <Link onClick={handleLogOut}><Button variant='dark'>Log Out</Button></Link>
                                        </div>
                                    </div>
                                    :
                                    <>
                                        <Link className='me-3' to='/login'><Button variant='dark'>Log In</Button></Link>
                                        <Link to='/register'><Button variant='dark'>Register</Button></Link>
                                    </>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;