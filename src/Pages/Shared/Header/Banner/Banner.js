import React from "react";
import "./Banner.css";
import bannerImg from "../../../../assets/header_car.png"
const Banner = () => {
  return (
    <div>
      <div className="row banner-container mt-0 pt-0 g-0">
        <div className="col-12 col-md-6 col-lg-5 mt-lg-5 pt-lg-5">
          <div className="left-top text-white mt-lg-5">
           
            <h1>Ferrari SF90 Stradale</h1>
            <p className="mt-4">The SF90 Stradale is the first ever Ferrari to feature PHEV (Plug-in Hybrid Electric Vehicle) architecture which sees the internal combustion engine integrated <br/> Both editions of the game feature co-development <br/>by Westwood Studios.</p>
          </div>
          <div className="left-bottom ps-2 text-white mt-5">
              <p className="pt-1 mb-0"><span >Starting from</span></p>
              <p className="mt-0"><sup>$</sup>769.99</p>
              <button className="mt-3 mb-5  banner-btn">DISCOVER MORE <i className=" ms-3 fas fa-caret-right fs-5"></i></button>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-7  pt-0">
            <img className=" mt-0 pt-0 banner-img  img-fluid" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
