import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import clientImg1 from '../../Assets/Images/testimonial-2.jpg.png'
import clientImg2 from '../../Assets/Images/testimonial-3.jpg.png'

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container py-5">
        <Slider {...settings} className="container">
          <div className="item shadow rounded bg-color-abt d-flex flex-column flex-md-row align-items-center">
            <img
              src={clientImg1}
              alt="testimonial-2"
              className="img-fluid testimonial-img mb-3 mb-md-0"
            />
            <div className="px-4 pt-3 text-center text-md-start">
              <p className="h4 mb-0">Client Name</p>
              <p className="text-color-light">Profession</p>
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <p className="text-color-light mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error
                molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus
                quisquam,
              </p>
            </div>
          </div>
          <div className="item shadow rounded bg-color-abt d-flex flex-column flex-md-row align-items-center ">
            <img
              src={clientImg2}
              alt="testimonial-2"
              className="img-fluid testimonial-img mb-3 mb-md-0"
            />
            <div className="px-4 pt-3 text-center text-md-start">
              <p className="h4 mb-0">Client Name</p>
              <p className="text-color-light">Profession</p>
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <p className="text-color-light mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error
                molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus
                quisquam,
              </p>
            </div>
          </div>
          <div className="item shadow rounded bg-color-abt d-flex flex-column flex-md-row align-items-center ">
            <img
              src={clientImg1}
              alt="testimonial-2"
              className="img-fluid testimonial-img mb-3 mb-md-0"
            />
            <div className="px-4 pt-3 text-center text-md-start">
              <p className="h4 mb-0">Client Name</p>
              <p className="text-color-light">Profession</p>
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <p className="text-color-light mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error
                molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus
                quisquam,
              </p>
            </div>
          </div>
          <div className="item shadow rounded bg-color-abt d-flex flex-column flex-md-row align-items-center ">
            <img
              src={clientImg2}
              alt="testimonial-2"
              className="img-fluid testimonial-img mb-3 mb-md-0"
            />
            <div className="px-4 pt-3 text-center text-md-start">
              <p className="h4 mb-0">Client Name</p>
              <p className="text-color-light">Profession</p>
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <p className="text-color-light mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error
                molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus
                quisquam,
              </p>
            </div>
          </div>
          <div className="item shadow rounded bg-color-abt d-flex flex-column flex-md-row align-items-center ">
            <img
              src={clientImg1}
              alt="testimonial-2"
              className="img-fluid testimonial-img mb-3 mb-md-0"
            />
            <div className="px-4 pt-3 text-center text-md-start">
              <p className="h4 mb-0">Client Name</p>
              <p className="text-color-light">Profession</p>
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <p className="text-color-light mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error
                molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus
                quisquam,
              </p>
            </div>
          </div>
          <div className="item shadow rounded bg-color-abt d-flex flex-column flex-md-row align-items-center ">
            <img
              src={clientImg2}
              alt="testimonial-2"
              className="img-fluid testimonial-img mb-3 mb-md-0"
            />
            <div className="px-4 pt-3 text-center text-md-start">
              <p className="h4 mb-0">Client Name</p>
              <p className="text-color-light">Profession</p>
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <FontAwesomeIcon icon={faStar} className="text-color" />
              <p className="text-color-light mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error
                molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus
                quisquam,
              </p>
            </div>
          </div>
        </Slider>
      
    </div>
  );
}

export default Client