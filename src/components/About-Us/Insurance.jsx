import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake,faDollarSign, faBullseye, faHeadphones,  faLocationDot, faEnvelope, faEarthAmericas, faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Insurance = () => {
    return (
            <>
                <section className="bg-color-abt py-5 pb-0 body-font-family">
                    <div className="container">
                        <p className="text-color fs-5 text-center">
                            <b>Our Features</b>
                        </p>
                        <p className="h1 text-center">
                            <b>Insurance Provide you a Better Future</b>
                        </p>
                        <p className="text-center text-color-light">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
                            adipisci facilis cupiditate recusandae aperiam
                            <br />
                            temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint
                            dolorem autem obcaecati, ipsam <br />
                            mollitia hic.
                        </p>
                        <div className="row py-4">
                            <div className="col-xl-3 col-md-6 mt-2">
                                <div className="card border-0">
                                    <FontAwesomeIcon icon={faHandshake} className='ms-3 w-25 text-color bg-color-abt  py-3 rounded fs-3 text-center' />
                                    
                                    <div className="card-body shadow rounded ">
                                        <p className="fs-6">
                                            <b>Trusted Company</b>
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                                            laborum odit pariatur...
                                        </p>
                                        <button
                                            type="button"
                                            className="btn mt-2 bg-color text-center text-md-end rounded-pill px-3 py-1 text-white"
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6  mt-2">
                                <div className="card border-0">
                                    <div className="card border-0">
                                        <FontAwesomeIcon icon={faDollarSign} className='ms-3 w-25 text-color bg-color-abt  py-3 rounded fs-3 text-center' />
                                        {/* <i className="fa-solid faDollarSign ms-3 w-25 fa-handshake text-color bg-color-abt p-4 rounded fs-3 text-center" /> */}
                                        <div className="card-body shadow rounded ">
                                            <p className="fs-6">
                                                <b>Anytime Money Back</b>
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                                                hic laborum odit pariatur...
                                            </p>
                                            <button
                                                type="button"
                                                className="btn mt-2 bg-color text-center text-md-end rounded-pill px-3 py-1 text-white"
                                            >
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6  mt-2">
                                <div className="card border-0">
                                    <div className="card border-0">
                                        <FontAwesomeIcon icon={faBullseye} className='ms-3 w-25 text-color bg-color-abt  py-3 rounded fs-3 text-center' />
                                        {/* <i className="fa-solid faBullseye ms-3 w-25 fa-handshake text-color bg-color-abt p-4 rounded fs-3 text-center" /> */}
                                        <div className="card-body shadow rounded ">
                                            <p className="fs-6">
                                                <b>Flexible Plans</b>
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                                                hic laborum odit pariatur...
                                            </p>
                                            <button
                                                type="button"
                                                className="btn mt-2 bg-color text-center text-md-end rounded-pill px-3 py-1 text-white"
                                            >
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mt-2 pb-0">
                                <div className="card border-0">
                                    <FontAwesomeIcon icon={faHeadphones} className='ms-3 w-25 text-color bg-color-abt  py-3 rounded fs-3 text-center' />
                                    {/* <i className="fa-solid faHeadphones ms-3 w-25 fa-handshake text-color bg-color-abt p-4 rounded fs-3 text-center" /> */}
                                    <div className="card-body shadow rounded ">
                                        <p className="fs-6">
                                            <b>24/7 Fast Support</b>
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                                            laborum odit pariatur...
                                        </p>
                                        <button
                                            type="button"
                                            className="btn mt-2 bg-color text-center text-md-end rounded-pill px-3 py-1 text-white"
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
    )
}

export default Insurance