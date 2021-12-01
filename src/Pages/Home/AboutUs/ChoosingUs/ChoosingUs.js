import React from "react";
import "./ChoosingUs.css";
import img4 from "../../../../assets/gps_icon.png"
import img3 from "../../../../assets/ride_icon.png"
import img2 from "../../../../assets/booking_icon.png"
import img1 from "../../../../assets/star_icon.png"
const ChoosingUs = () => {
  return (


    <div class="content">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <h3 class="text-white mb-4 text-uppercase font-weight-bold">we do best</h3>
            <h1>Than you wish</h1>
          </div>
        </div>

        <div class="row pt-5">

          <div class="col-lg-6">
            <div class="content-info">
              <div class="content-img">
               
                <img src={img1} alt="" />
              </div>
              <div class="content-text">
                <h4>Home Delivery</h4>
                <p>We take care of order fulfillment, collection, transport, tracking and delivery of cars. We are the first in Bangladesh to have created a unique network with </p>
              </div>

            </div>
          </div>

          <div class="col-lg-6">
            <div class="content-info">
              <div class="content-img">
               
                <img src={img2} alt="" />
              </div>
              <div class="content-text">
                <h4>fast booking</h4>

                <p>We take care of order fulfillment, collection, transport, tracking and delivery of cars. We are the first in Bangladesh to have created a unique network with</p>
              </div>

            </div>
          </div>
        </div>
        <div class="row">

          <div class="col-lg-6">
            <div class="content-info">
              <div class="content-img">
            
                <img src={img3} alt="" />
              </div>
              <div class="content-text">
                <h4>bonuses for New Booking</h4>
                <p>We take care of order fulfillment, collection, transport, tracking and delivery of cars. We are the first in Bangladesh to have created a unique network with</p>
              </div>

            </div>
          </div>
         
          <div class="col-lg-6">
            <div class="content-info">
              <div class="content-img">
              
                <img  src={img4} alt="" />
              </div>
              <div class="content-text">
                <h4>gps searching</h4>

                <p>We take care of order fulfillment, collection, transport, tracking and delivery of cars. We are the first in Bangladesh to have created a unique network with</p>
              </div>

            </div>
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-lg-12 text-center">
            <button class="btn btn-yellow">read more</button>
          </div>
        </div>
      </div>

    </div>
// change

  );
};

export default ChoosingUs;
