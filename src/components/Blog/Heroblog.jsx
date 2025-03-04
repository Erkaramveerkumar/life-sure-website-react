import React from 'react'
import { Link } from 'react-router-dom'

const Heroblog = () => {
    return (
        <>
            <section className="bg-img-about">
                <div className="container">
                    <p className="h1 text-white text-center">
                        <b>Our Blog</b>
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
                                to="/Blog"
                                className="text-color text-decoration-none active ms-2"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    )
}

export default Heroblog