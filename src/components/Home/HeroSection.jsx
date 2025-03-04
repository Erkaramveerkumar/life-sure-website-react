import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import showImg from '../../Assets/Images/carousel.png'

const HeroSection = () => {
  return (
    <Carousel>
      <Carousel.Item className='bg-color'>
        <div className="row px-5">
          <div className="col-md-6 ">
            <img
              src={showImg}
              alt="carousel-img"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 text-white mt-3 text-center text-md-end">
            <p className="text-uppercase fs-5 mt-5">
              <b>Welcome to lifesure</b>
            </p>
            <p className="h1 text-capitalize mt-3 font-size">
              <b>
                life insurance <br /> makes you happy
              </b>
            </p>
            <p className="mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy...
            </p>
            <span className="d-flex text-nowrap justify-content-center justify-content-md-end pb-3">

              <button
                type="button"
                className="btn mt-3 me-md-4 btn-light text-color rounded-pill px-4 py-2 "
              >
                <i className="fa-solid fa-circle-play" />
                Watch Video
              </button>

              <button
                type="button"
                className="btn mt-3 btn-dark text-center ms-2 text-md-end rounded-pill px-4 py-2 text-white"
              >
                Learn More
              </button>
            </span>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='bg-color px-5'>
        <div className="row">
          <div className="col-md-6 text-white mt-3 text-center text-md-start">
            <p className="text-uppercase fs-5 mt-5">
              <b>Welcome to lifesure</b>
            </p>
            <p className="h1 text-capitalize mt-3 font-size">
              <b>
                life insurance <br /> makes you happy
              </b>
            </p>
            <p className="mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy...
            </p>
            <span className="d-flex text-nowrap justify-content-center justify-content-md-start pb-3">
              <button
                type="button"
                className="btn mt-3 btn-light text-color rounded-pill px-4 py-2 "
              >
                <i className="fa-solid fa-circle-play" />
                Watch Video
              </button>
              <button
                type="button"
                className="btn mt-3 ms-md-4 ms-2 btn-dark rounded-pill px-4 py-2 text-white"
              >
                Learn More
              </button>
            </span>
          </div>
          <div className="col-md-6 text-end">
            <img
              src= {showImg}
              alt="carousel"
              className="img-fluid"
            />
          </div>
        </div>

      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection