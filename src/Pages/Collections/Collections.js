import React, { useEffect, useState } from "react";
import Menubar from "../Shared/Header/Menubar/Menubar";
import Collection from "./Collection/Collection";
import "./Collections.css";
const Collections = () => {
  const [collections, setCollections] = useState([]);
  // getting all collections
  useEffect(() => {
    fetch("https://radiant-lake-94884.herokuapp.com/allCollections")
      .then((res) => res.json())
      .then((data) => setCollections(data));
  }, []);
  console.log();
  return (
    <>
      <Menubar></Menubar>

      <div className="row text-center text-white collections-top">
        <p className="mt-4 pt-4 mb-0 pb-0 top-sub-title">COLLECTIONS</p>
       
      </div>

      <div className="row  pb-5 collections ">
        <div className="row collection-container pb-5">
          <div className="row g-4 collection ">
            {collections.map((collection) => (
              <Collection
                collection={collection}
                key={collection._id}
              ></Collection>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
