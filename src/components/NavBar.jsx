import React, { useState } from 'react'
import LifeSure from '../Assets/Images/LifeSure.png'
import Symbol from '../Assets/Images/Symbol.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faEarthAmericas, faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    const location = useLocation();
    return (
        <>
            {/*  Social Media Section  */}

            <section className="bg-color-abt d-none d-xl-block oder-xl-1 body-font-family">
                <div className="container p-2">
                    <div className="row">
                        <div className="col-md-6 text-start">
                            <Link to="#" className="text-color-light text-decoration-none">
                                <FontAwesomeIcon icon={faLocationDot} className='text-color me-2' />
                                Find a location
                            </Link>
                            <div className="vr text-color ms-2" />
                            <Link to="#" className="text-color-light text-decoration-none ms-2">
                                <FontAwesomeIcon icon={faEnvelope} className='text-color me-2' />
                                example@gmail.com
                            </Link>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link to="#" className="text-decoration-none">
                                <FontAwesomeIcon icon={faFacebook} className='text-color me-3' />
                            </Link>
                            <Link to="#" className="text-decoration-none">
                                <FontAwesomeIcon icon={faTwitter} className='text-color me-3' />
                            </Link>
                            <Link to="#" className="text-decoration-none">
                                <FontAwesomeIcon icon={faInstagram} className='text-color me-3' />
                            </Link>
                            <Link to="#" className="text-decoration-none">
                                <FontAwesomeIcon icon={faLinkedin} className='text-color me-3' />
                            </Link>
                            <div className="vr text-color me-2" />
                            <Link to="#" className="text-decoration-none">
                                <FontAwesomeIcon icon={faEarthAmericas} className='text-color me-3' />
                            </Link>
                            <span>
                                <select className="border-0 bg-color-abt">
                                    <option>English</option>
                                    <option>Hindi</option>
                                </select>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navbar section */}

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand to="/">
                        <Link className="navbar-brand " to="/">
                            <img src={Symbol} alt="Symbol" className='me-2' />
                            <img src={LifeSure} alt="LifeSure" className=' nav-logo-img' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Brand className='search-circle circle-none d-flex justify-content-center align-items-center d-lg-none ms-auto '>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="bg-color-abt text-color rounded w-100 ">
                            <Nav.Link className=''>
                                <Link className={`nav-link ${location?.pathname === '/' ? 'text-color' : ''}`} to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link className={`nav-link ${location?.pathname === '/about-us' ? 'text-color' : ''}`} to='/about-us' >About</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link className={`nav-link ${location?.pathname === '/services' ? 'text-color' : ''}`} to='/services'>Services</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link className={`nav-link ${location?.pathname === '/blog' ? 'text-color' : ''}`} to='/blog'>Blog</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link className={`nav-link ${location?.pathname === '/contact' ? 'text-color' : ''}`} to='/contact'>Contact</Link>
                            </Nav.Link>
                            <span className="d-flex ms-lg-auto ms-2 ">
                                <Nav.Link className='mt-2 mb-0 d-none d-lg-block'>
                                    <Link className="nav-link search-circle text-center" to="#">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white' />
                                    </Link>
                                </Nav.Link>
                                <Nav.Link className='d-none d-lg-block'>
                                    <Link className="nav-link" to="#">
                                        <button type="button" className="btn bg-color text-white rounded-pill ms-3 ms-lg-0 text-nowrap">Get a
                                            Quote
                                        </button>
                                    </Link>
                                </Nav.Link>
                            </span>
                        </Nav>
                    </Navbar.Collapse>
                    <ul className="list-unstyled rounded-circle bg-color-abt ms-1 mb-0 d-none d-xl-block">
                        <li>
                            <Link to="#">
                                <FontAwesomeIcon icon={faPhone} className='p-3' />
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled mt-3  d-none ms-2 d-xl-block">
                        <li className="text-secondary text-nowrap">
                            Call to Our Experts
                        </li>
                        <li className="text-nowrap">
                            Free: + 0123 456 7890
                        </li>
                    </ul>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar