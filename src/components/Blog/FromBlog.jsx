import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faCalendar, faMessage, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Blog1 from '../../Assets/Images/blog-1.png.png'
import Blog2 from '../../Assets/Images/blog-2.png.png'
import Blog3 from '../../Assets/Images/blog-3.png.png'

const FromBlog = () => {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <p className="text-color text-center">
                        <b>From Blog</b>
                    </p>
                    <p className="h1 text-center">
                        <b>News And Updates</b>
                    </p>
                    <p className="text-color-light text-center mt-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci
                        facilis cupiditate recusandae aperiam
                        <br />
                        temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint
                        dolorem autem obcaecati, ipsam <br />
                        mollitia hic.
                    </p>
                    <div className="row py-4">
                        <div className="col-xl-4 col-md-12">
                            <div className="fs-3 text-center">
                                <img
                                    src={Blog1}
                                    alt="blog-1"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="d-flex justify-content-end">
                                <p className="bg-color text-white rounded-start px-4 py-2 mb-0 text-center ">
                                    Business
                                </p>
                            </div>
                            <div className="card border-0 pb-0">
                                <div className="card-body bg-color-abt p-4 shadow rounded">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <FontAwesomeIcon icon={faUser} className='text-color me-1'/>
                                         
                                            <span className="text-color-light">Martin.C</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faCalendar} className='text-color  me-1'/>
                                 
                                            <span className="text-color-light">30 Dec 2025</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faMessage} className='text-color me-1'/>
                                            
                                            <span className="text-color-light">6 Comments</span>
                                        </div>
                                    </div>
                                    <p className="fs-4 mt-2">
                                        Which allows you to pay down insurance bills
                                    </p>
                                    <p className="text-color-light">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing <br />
                                        elit. Eius libero soluta impedit eligendi? Quibusdam, <br />
                                        laudantium.
                                    </p>
                                    <button type="button" className="border-0">
                                        <b>Read More</b>
                                    </button>
                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-12">
                            <div className="fs-3 text-center">
                                <img
                                    src={Blog2}
                                    alt="blog-2"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="d-flex justify-content-end">
                                <p className="bg-color text-white rounded-start px-4 py-2 mb-0 text-center ">
                                    Business
                                </p>
                            </div>
                            <div className="card border-0 pb-0">
                                <div className="card-body bg-color-abt p-4 shadow rounded">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <FontAwesomeIcon icon={faUser} className='text-color me-1'/>
                                            <span className="text-color-light">Martin.C</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faCalendar} className='text-color  me-1'/>
                                            <span className="text-color-light">30 Dec 2025</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faMessage} className='text-color me-1'/>
                                            <span className="text-color-light">6 Comments</span>
                                        </div>
                                    </div>
                                    <p className="fs-4 mt-2">Leverage agile frameworks to provide</p>
                                    <p className="text-color-light">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing <br />
                                        elit. Eius libero soluta impedit eligendi? Quibusdam, <br />
                                        laudantium.
                                    </p>
                                    <button type="button" className="border-0">
                                        <b>Read More</b>
                                    </button>
                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-12">
                            <div className="fs-3 text-center">
                                <img
                                    src={Blog3}
                                    alt="blog-3"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="d-flex justify-content-end">
                                <p className="bg-color text-white rounded-start px-4 py-2 mb-0 text-center ">
                                    Business
                                </p>
                            </div>
                            <div className="card border-0 pb-0">
                                <div className="card-body bg-color-abt p-4 shadow rounded">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <FontAwesomeIcon icon={faUser} className='text-color me-1'/>
                                            <span className="text-color-light">Martin.C</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faCalendar} className='text-color  me-1'/>
                                            <span className="text-color-light">30 Dec 2025</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faMessage} className='text-color me-1'/>
                                            <span className="text-color-light">6 Comments</span>
                                        </div>
                                    </div>
                                    <p className="fs-4 mt-2">Leverage agile frameworks to provide</p>
                                    <p className="text-color-light">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing <br />
                                        elit. Eius libero soluta impedit eligendi? Quibusdam, <br />
                                        laudantium.
                                    </p>
                                    <button type="button" className="border-0">
                                        <b>Read More</b>
                                    </button>
                                    <FontAwesomeIcon icon={faArrowRight} className='ms-2'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FromBlog