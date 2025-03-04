import React from 'react'
import Team1 from '../../Assets/Images/team-1.jpg.png'
import Team2 from '../../Assets/Images/team-2.jpg.png'
import Team3 from '../../Assets/Images/team-3.jpg.png'
import Team4 from '../../Assets/Images/team-4.jpg.png'


const Ourexpert = () => {
    return (
        <>
            <section className="py-4">
                <div className="container">
                    <p className="text-color text-center fs-5">
                        <b>Our Team</b>
                    </p>
                    <p className="h1 text-center">
                        <b>
                            Meet Our Expert Team <br />
                            Members
                        </b>
                    </p>
                    <p className="text-center text-color-light">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci
                        facilis cupiditate recusandae aperiam
                        <br />
                        temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint
                        dolorem autem obcaecati, ipsam <br />
                        mollitia hic.
                    </p>
                    <div className="row py-4">
                        <div className="col-xl-3 col-md-6 pb-2">
                            <div className="card">
                                <img
                                    className="card-img-top"
                                    src={Team1}
                                    alt="team-1"
                                />
                                <div className="card-footer bg-color">
                                    <p className="fs-4 text-white mb-0">David James</p>
                                    <p className="text-white">Profession</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 pb-2">
                            <div className="card">
                                <img
                                    className="card-img-top"
                                    src= {Team2}
                                    alt="team-2"
                                />
                                <div className="card-footer bg-color">
                                    <p className="fs-4 text-white mb-0">David James</p>
                                    <p className="text-white">Profession</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 pb-2">
                            <div className="card">
                                <img
                                    className="card-img-top"
                                    src={Team3}
                                    alt="team-3"
                                />
                                <div className="card-footer bg-color">
                                    <p className="fs-4 text-white mb-0">David James</p>
                                    <p className="text-white">Profession</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card">
                                <img
                                    className="card-img-top"
                                    src={Team4}
                                    alt="team-4"
                                />
                                <div className="card-footer bg-color">
                                    <p className="fs-4 text-white mb-0">David James</p>
                                    <p className="text-white">Profession</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Ourexpert