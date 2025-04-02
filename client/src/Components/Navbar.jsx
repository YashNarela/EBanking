import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../assets/logo.png"
import "../css/Navbar.css"
import { IoIosArrowDown } from "react-icons/io";

import Navheader from './Navheader';


import { Link, useNavigate } from "react-router"
import { useState } from 'react';
const TopNavbar = () => {

    const navigate = useNavigate()

    let expand = false;

    const [hoverEffect, setHoverEffect] = useState(false)


    const handleHover = async () => {


        setHoverEffect((prev) => !prev)
    }


    const Logout = async () => {

        localStorage.clear()

        navigate('login')

    }

    return (
        <>


            <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 ">
                <Container fluid>
                    <Navbar.Brand href="#"> <img src={logo} alt="" />  </Navbar.Brand>

                    <Nav className="me-auto  " id='navItemsLinks' >
                        <Nav.Link id='home' onMouseEnter={handleHover} onMouseLeave={handleHover} style={{ color: "#00417c", fontWeight: "800", lineHeight: "1.17", fontSize: "1.125rem" }} as={Link} to="home">Home <IoIosArrowDown />
                            <Navheader hoverEffect={hoverEffect} />
                        </Nav.Link>
                        <Nav.Link id='bussiness' style={{ color: "#00417c", fontWeight: "800", lineHeight: "1.17", fontSize: "1.125rem" }} as={Link} to="home" >Business  <IoIosArrowDown /> </Nav.Link>
                        <Nav.Link id='invest' style={{ color: "#00417c", fontWeight: "800", lineHeight: "1.17", fontSize: "1.125rem" }} as={Link} to="home" >Investing <IoIosArrowDown /> </Nav.Link>
                        <Nav.Link id='liberty' style={{ color: "#00417c", fontWeight: "800", lineHeight: "1.17", fontSize: "1.125rem" }} as={Link} to="home" >About Liberty Bank  <IoIosArrowDown /> </Nav.Link>
                        <Nav.Link id='navHeaderLoginBtn' style={{ color: "#00417c", fontWeight: "800", lineHeight: "1.17", fontSize: "1.125rem" }} as={Link} to="login" >  <button className='navHeaderLoginBtn'  >Login</button>  </Nav.Link>
                    </Nav>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} to="/accounttype">Register</Nav.Link>

                                <Nav.Link as={Link} to="login" >Login</Nav.Link>
                                <Nav.Link as={Link} to="logout" onClick={Logout}  >Logout</Nav.Link>
                                <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                                {/* <NavDropdown
                                    title="Users"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <NavDropdown.Item href="#action3">Register</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/login"
                                    >
                                        Login
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>








        </>
    )
}

export default TopNavbar
