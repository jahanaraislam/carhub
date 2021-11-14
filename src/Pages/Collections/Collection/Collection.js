import React from "react";
import "./Collection.css";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const Collection = (props) => {
  const {
    _id,
    name,
    img,
    price,
    rating,
    des,
   
  } = props.collection;
  
  return (
    <div className="col-lg-4 col-md-6 col-12 ">
      <div className="collection">
        <div className=" card  ">
          <img className="card-img-top" src={img} alt="" />

          <div className=" card-body">
            <p className="fw-bold  mt-3 ">{name}</p>
            <hr className="text-white" />
            <p className="des">
              <span>
                {des.split(" ").slice(0, 8).toString().replace(/,/g, " ")}
              </span>
            </p>
            <p className="price">{price}</p>
            <p className="rating-text fw-bold text-white fs-5">{rating}</p>
            <Rating
              className="rating"
              initialRating={rating}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
            ></Rating>
          
          </div >
          <Link className="btn" to={`/collection/${_id}`}>
            <button className="purchase-btn ">Purchase Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collection;
