import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot, faEnvelope, faPhone,} from '@fortawesome/free-solid-svg-icons'
import {faFirefoxBrowser} from '@fortawesome/free-brands-svg-icons';

const IconSection = () => {
    return (
        <>
            <section className='bg-color-abt py-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <FontAwesomeIcon icon= {faLocationDot} className='text-color fs-4' />
                            <p className="fs-5 mb-0 pt-3">Address</p>
                            <p className="text-color-light">123 Street New York.USA</p>
                        </div>
                        <div className="col-md-3">
                        <FontAwesomeIcon icon= {faEnvelope} className='text-color fs-4' />
                            <p className="fs-5 mb-0 pt-3">Mail Us</p>
                            <p className="text-color-light">info@example.com</p>
                        </div>
                        <div className="col-md-3">
                        <FontAwesomeIcon icon= {faPhone} className='text-color fs-4' />
                            <p className="fs-5 mb-0 pt-3">Telephone</p>
                            <p className="text-color-light">(+012) 3456 7890</p>
                        </div>
                        <div className="col-md-3">
                        <FontAwesomeIcon icon= {faFirefoxBrowser} className='text-color fs-4' />
                            <p className="fs-5 mb-0 pt-3">Yoursite@ex.com</p>
                            <p className="text-color-light">(+012) 3456 7890</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default IconSection