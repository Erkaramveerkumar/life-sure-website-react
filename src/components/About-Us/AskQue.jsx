import React from 'react'
import AskQueImg from '../../Assets/Images/carousel.png'
import Accordion from 'react-bootstrap/Accordion';

const AskQue = () => {
    return (
        <>
            <section className="py-md-4 ">
                <div className="container bg-color-abt">
                    <div className="row">
                        <div className="col-xl-6 col-md-12 order-2 p-5 mt-2">
                            <p className="text-color fs-5 text-center text-md-start">
                                Some Important FAQ's
                            </p>
                            <p className="h2 text-center text-md-start">
                                <b>
                                    Common Frequently <br />
                                    Asked Questions
                                </b>
                            </p>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0" className='shadow'>
                                    <Accordion.Header>Q: What happens during Freshers' Week?</Accordion.Header>
                                    <Accordion.Body>
                                    A: Leverage agile frameworks to provide a robust synopsis for
                                                high level overviews. Iterative approaches to corporate
                                                strategy foster collaborative thinking to further the overall
                                                value proposition. Organically grow the holistic world view of
                                                disruptive innovation via workplace diversity and empowerment.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='shadow'>
                                    <Accordion.Header>Q: What is the transfer application process?</Accordion.Header>
                                    <Accordion.Body>
                                    B: Leverage agile frameworks to provide a robust synopsis for
                                                high level overviews. Iterative approaches to corporate
                                                strategy foster collaborative thinking to further the overall
                                                value proposition. Organically grow the holistic world view of
                                                disruptive innovation via workplace diversity and empowerment.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="col-xl-6 col-md-12 order-1 text-center  p-5">
                            <img
                                src={AskQueImg}
                                alt="que-img"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AskQue