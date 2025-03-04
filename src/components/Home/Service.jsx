import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers, faHospital, faCar, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import Blog1 from '../../Assets/Images/blog-1.png.png'
import Blog2 from '../../Assets/Images/blog-2.png.png'
import Blog3 from '../../Assets/Images/blog-3.png.png'
import Blog4 from '../../Assets/Images/blog-4.png.png'

const Service = () => {
    return (
        <>
            <section className="py-5 body-font-family">
                <div className=" container">
                    <p className="h4 text-color text-center">Our Services</p>
                    <p className="h1 text-center">
                        <b>We Provide Best Services</b>
                    </p>
                    <p className="text-center text-color-light">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci
                        facilis cupiditate recusandae aperiam
                        <br />
                        temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint
                        dolorem autem obcaecati, ipsam <br />
                        mollitia hic.
                    </p>
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="card border-0 ">
                                <div className="card-body p-4">
                                    <div className=" img-relative d-flex">
                                        <img
                                            src={Blog1}
                                            alt="blog-1-img"
                                            className="img-fluid "
                                        />
                                        <FontAwesomeIcon icon={faUsers} className='text-color fs-5 p-3 shadow rounded bg-color-abt icon-absolute align-self-end' />
                                        {/* <i className="fa-solid faUsers text-color fs-5 p-3 shadow rounded bg-color-abt icon-absolute align-self-end" /> */}
                                    </div>
                                    <div className="bg-color-abt shadow rounded p-2">
                                        <p>
                                            <b>Life Insurance</b>
                                        </p>
                                        <p className="text-color-light mt-4">
                                            Lorem ipsum dolor sit amet <br />
                                            consectetur adipisicing elit. <br />
                                            Perspiciatis, eum!
                                        </p>
                                        <button
                                            type="button"
                                            className="btn mt-2 bg-color text-white rounded-pill"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card border-0 ">
                                <div className="card-body p-4">
                                    <div className=" img-relative d-flex">
                                        <img
                                            src={Blog2}
                                            alt="blog-2-img"
                                            className="img-fluid "
                                        />
                                        <FontAwesomeIcon icon={faHospital} className='text-color fs-5 p-3 shadow rounded bg-color-abt icon-absolute align-self-end' />
                                        {/* <i className="fa-solid faHospital text-color fs-5 p-3 shadow rounded bg-color-abt icon-absolute align-self-end" /> */}
                                    </div>
                                    <div className="bg-color-abt shadow rounded p-2">
                                        <p>
                                            <b>Health Insurance</b>
                                        </p>
                                        <p className="text-color-light mt-4">
                                            Lorem ipsum dolor sit amet <br />
                                            consectetur adipisicing elit. <br />
                                            Perspiciatis, eum!
                                        </p>
                                        <button
                                            type="button"
                                            className="btn mt-2 bg-color text-white rounded-pill"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card border-0 ">
                                <div className="card-body p-4">
                                    <div className=" img-relative d-flex">
                                        <img
                                            src={Blog3}
                                            alt="blog-3-img"
                                            className="img-fluid "
                                        />
                                        <FontAwesomeIcon icon={faCar} className='text-color fs-5 p-3 shadow rounded bg-color-abt icon-absolute align-self-end' />
                                        {/* <i className="fa-solid faCar text-color fs-5 p-3 shadow rounded bg-color-abt icon-absolute align-self-end" /> */}
                                    </div>
                                    <div className="bg-color-abt shadow rounded p-2">
                                        <p>
                                            <b>Car Insurance</b>
                                        </p>
                                        <p className="text-color-light mt-4">
                                            Lorem ipsum dolor sit amet <br />
                                            consectetur adipisicing elit. <br />
                                            Perspiciatis, eum!
                                        </p>
                                        <button
                                            type="button"
                                            className="btn mt-2 bg-color text-white rounded-pill"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card border-0 ">
                                <div className="card-body p-4">
                                    <div className=" img-relative d-flex">
                                        <img
                                            src={Blog4}
                                            alt="blog-4-img"
                                            className="img-fluid "
                                        />
                                        <FontAwesomeIcon icon={faHouseChimney} className='text-color fs-5 p-3 shadow rounded bg-color-abt icon-absolute align-self-end' />
                                        {/* <i className="fa-solid faHouseChimney text-color fs-5 p-3 shadow rounded bg-color-abt icon-absolute align-self-end" /> */}
                                    </div>
                                    <div className="bg-color-abt shadow rounded p-2">
                                        <p>
                                            <b>Home Insurance</b>
                                        </p>
                                        <p className="text-color-light mt-4">
                                            Lorem ipsum dolor sit amet <br />
                                            consectetur adipisicing elit. <br />
                                            Perspiciatis, eum!
                                        </p>
                                        <button
                                            type="button"
                                            className="btn mt-2 bg-color text-white rounded-pill"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center py-2">
                        <button
                            type="button"
                            className="btn bg-color text-white rounded-pill px-5 py-2 "
                        >
                            More Services
                        </button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Service