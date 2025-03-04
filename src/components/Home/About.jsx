import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import AboutImg from '../../Assets/Images/about-1.png.png'
const About = () => {
    return (
            <>
                <section className="bg-color-abt py-lg-5 pt-0 body-font-family">
                    <div className="container">
                        <div className="row pt-0">
                            <div className="col-xl-6 col-md-12 mb-3">
                                <div className="card border-0">
                                    <div className="card-body shadow rounded p-5">
                                        <p className="text-color">
                                            <b>About Our Company</b>
                                        </p>
                                        <p className="h3">
                                            <b>
                                                High Range of <br />
                                                Exploring Protection
                                            </b>
                                        </p>
                                        <p className="text-color-light">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                                            debitis sint tempora. Corporis consequatur illo blanditiis
                                            voluptates aperiam quos aliquam totam aliquid rem explicabo,
                                        </p>
                                        <p className="text-color-light">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                                            praesentium recusandae eligendi modi hic
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faCheck} className='me-1'/>
                                            {/* <i className="fa-solid faCheck" /> */}
                                            We can save your money.
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faCheck} className='me-1'/>
                                            Production or trading of good
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faCheck} className='me-1'/>
                                            Our life insurance is flexible
                                        </p>
                                        <button
                                            type="button"
                                            className="btn mt-2 bg-color px-4 text-white rounded-pill"
                                        >
                                            More Information
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12 py-3 py-lg-0">
                                <div className="card border-0">
                                    <div className="card-body shadow rounded p-4">
                                        <div className="row justify-content-center">
                                            <div className="col-md-12 text-center gy-3">
                                                <img
                                                    src={AboutImg}
                                                    alt="about-1"
                                                    className="img-fluid bg-color-abt shadow rounded"
                                                />
                                            </div>
                                            <div className="col-md-5 bg-color-abt shadow rounded gy-3">
                                                <p className="h4 text-color">
                                                    <b>129+</b>
                                                </p>
                                                <p className="text-dark">
                                                    <b>Insurance Policies</b>
                                                </p>
                                            </div>
                                            <div className="col-md-5 bg-color-abt shadow rounded ms-md-3 gy-3">
                                                <p className="h4 text-color">
                                                    <b>556+</b>
                                                </p>
                                                <p className="text-dark">
                                                    <b>Skilled Agents</b>
                                                </p>
                                            </div>
                                            <div className="col-md-5 bg-color-abt shadow rounded gy-3">
                                                <p className="h4 text-color">
                                                    <b>99+</b>
                                                </p>
                                                <p className="text-dark">
                                                    <b>Awards WON</b>
                                                </p>
                                            </div>
                                            <div className="col-md-5 bg-color-abt shadow rounded ms-md-3 gy-3">
                                                <p className="h4 text-color">
                                                    <b>967+</b>
                                                </p>
                                                <p className="text-dark">
                                                    <b>Team Members</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
    )
}

export default About