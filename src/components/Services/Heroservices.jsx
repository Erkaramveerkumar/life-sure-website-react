import React from 'react'
import { Link } from 'react-router-dom'
const Heroservices = () => {
    return (
        <>
            <section className="bg-img-about">
                <div className="container">
                    <p className="h1 text-white text-center">
                        <b>Our Services</b>
                    </p>
                    <ul className="d-flex list-unstyled justify-content-center">
                        <li>
                            <Link to="/" className="text-white text-decoration-none">
                                Home
                            </Link>{" "}
                            <span>/</span>
                        </li>
                        <li>
                            <Link
                                to="/Services"
                                className="text-color text-decoration-none active ms-2"
                            >
                                Service
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    )
}

export default Heroservices