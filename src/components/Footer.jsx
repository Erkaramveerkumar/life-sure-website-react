import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight, faCopyright, faLocationDot, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faSlack ,faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import instagramFooter1 from '../Assets/Images/instagram-footer-1.jpg.png'
import instagramFooter2 from '../Assets/Images/instagram-footer-2.jpg.png'
import instagramFooter3 from '../Assets/Images/instagram-footer-3.jpg.png'
import instagramFooter4 from '../Assets/Images/instagram-footer-4.jpg.png'
import instagramFooter5 from '../Assets/Images/instagram-footer-5.jpg.png'
import instagramFooter6 from '../Assets/Images/instagram-footer-6.jpg.png'

const Footer = () => {
    return (
        <>
            <section className="py-4 bg-color-contact">
                <div className="container">
                    <div className="row p-4">
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <FontAwesomeIcon icon={faSlack} className='text-white fs-4' />
                                    <span className="text-white h4 ms-3">LifeSure</span>
                                    <p className="text-white py-2">
                                        Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum
                                        dolor sit amet, consectetur adipiscing...
                                    </p>
                                    <div className="d-flex py-2">
                                        <div className="text-color bg-circle text-center d-flex justify-content-center align-items-center">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        
                                        </div>
                                        <div className="text-color bg-circle text-center d-flex justify-content-center align-items-center ms-2">
                                        <FontAwesomeIcon icon={faTwitter} />
                                       
                                        </div>
                                        <div className="text-color bg-circle text-center d-flex justify-content-center align-items-center ms-2">
                                        <FontAwesomeIcon icon={faInstagram} />
                                          
                                        </div>
                                        <div className="text-color bg-circle text-center d-flex justify-content-center align-items-center ms-2">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <p className="h5 text-white">Useful Links</p>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link
                                                className="text-decoration-none text-color-light"
                                                href="index.html"
                                            >
                                                <FontAwesomeIcon icon={faChevronRight} className='me-1'/>
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-decoration-none text-color-light"
                                                href="index.html"
                                            >
                                                <FontAwesomeIcon icon={faChevronRight} className='me-1'/>
                                                Features
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-decoration-none text-color-light"
                                                href="index.html"
                                            >
                                                <FontAwesomeIcon icon={faChevronRight} className='me-1'/>
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-decoration-none text-color-light"
                                                href="index.html"
                                            >
                                                <FontAwesomeIcon icon={faChevronRight} className='me-1'/>
                                                FAQ's
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-decoration-none text-color-light"
                                                href="index.html"
                                            >
                                                <FontAwesomeIcon icon={faChevronRight} className='me-1'/>
                                                Blogs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-decoration-none text-color-light"
                                                href="index.html"
                                            >
                                                <FontAwesomeIcon icon={faChevronRight} className='me-1'/>
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <p className="h5 text-white">Instagram</p>
                                    <div className="row py-2">
                                        <div className="row">
                                            <div className="col-4">
                                                <img
                                                    src={instagramFooter1}
                                                    alt="instagram-footer-1"
                                                    className="img-fluid shadow rounded"
                                                />
                                            </div>
                                            <div className="col-4">
                                                <img
                                                    src={instagramFooter2}
                                                    alt="instagram-footer-2"
                                                    className="img-fluid shadow rounded"
                                                />
                                            </div>
                                            <div className="col-4">
                                                <img
                                                    src= {instagramFooter3}
                                                    alt="instagram-footer-3"
                                                    className="img-fluid shadow rounded"
                                                />
                                            </div>
                                        </div>
                                        <div className="row py-2">
                                            <div className="col-4">
                                                <img
                                                    src={instagramFooter4}
                                                    alt="instagram-footer-4"
                                                    className="img-fluid shadow rounded"
                                                />
                                            </div>
                                            <div className="col-4">
                                                <img
                                                    src={instagramFooter5}
                                                    alt="instagram-footer-5"
                                                    className="img-fluid shadow rounded"
                                                />
                                            </div>
                                            <div className="col-4">
                                                <img
                                                    src={instagramFooter6}
                                                    alt="instagram-footer-6"
                                                    className="img-fluid shadow rounded"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="text-color-light" />
                            <div className="row py-4">
                                <div className="col-lg-4">
                                    <div className="d-flex">
                                        <div className="square-icon">
                                        <FontAwesomeIcon icon={faLocationDot} className='fs-3'/>
                                           
                                        </div>
                                        <span className="ms-3">
                                            <p className="text-white h5">Address</p>
                                            <p className="text-color-light">123 Street New York.USA</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-4 ">
                                    <div className="d-flex">
                                        <div className="square-icon">
                                        <FontAwesomeIcon icon={faEnvelope} className='fs-3'/>
                                        
                                        </div>
                                        <span className="ms-3">
                                            <p className="text-white h5">Mail Us</p>
                                            <p className="text-color-light">info@example.com</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="d-flex">
                                        <div className="square-icon">
                                        <FontAwesomeIcon icon={faPhone} className='fs-3'/>
                                         
                                        </div>
                                        <span className="ms-3">
                                            <p className="text-white h5">Telephone</p>
                                            <p className="text-color-light">(+012) 3456 7890</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 py-2">
                            <p className="h5 text-white py-2 pt-0">Newsletter</p>
                            <p className="text-white">
                                Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <div className="text-color-light bg-light d-flex shadow rounded-pill">
                                <p className="mb-0 ms-2 p-1">
                                    <input
                                        type="email"
                                        className="form-control border-0"
                                        id="email"
                                        placeholder="Enter your email"
                                        name="email"
                                        size={40}
                                    />
                                </p>
                               
                                <span className="ms-auto p-1">
                                    <button
                                        type="button"
                                        className="btn bg-color text-white shadow rounded-pill px-3"
                                    >
                                        SignUp
                                    </button>
                                </span>
                            </div>
                            <div className="d-flex p-0 mt-3 m-0 text-nowrap">
                                <Link
                                    href="#"
                                    className="text-decoration-none bg-circle d-flex justify-content-center align-items-center"
                                >
                                <FontAwesomeIcon icon={faPhone} className='fs-4'/>
                                   
                                </Link>
                                <div className="ms-3">
                                    <p className="mb-0 text-color-light">Call to Our Experts</p>
                                    <p className="text-white d-block">Free: + 0123 456 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="py-2 text-color-light " />
                <div className="footer">
                    <div className="container d-sm-flex justify-content-center text-center">
                        <Link href="#" className="text-white mb-0">
                        <FontAwesomeIcon icon={faCopyright} className='text-white me-1'/>
                             Your Site Name.
                        </Link>
                        <p className="text-color-light mt-1 ms-md-2">All right reserved.</p>
                        <p className="text-color-light  mt-1 ms-md-1">
                            Designed By
                            <Link href="#" className="text-white ms-1">
                                HTML Codex
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer