import React from 'react'
import { Link } from 'react-router-dom'

const HeroAbout = () => {
    return (
        <>
            <section className="bg-color-abt">
                <section className="bg-img-about">
                    <div className="container">
                        <p className="h1 text-white text-center">
                            <b>About Us</b>
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
                                    to="/About-Us"
                                    className="text-color text-decoration-none active ms-2"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </>
    )
}

export default HeroAbout