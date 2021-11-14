import React from "react";
import Banner from "./Banner/Banner";
import Menubar from "./Menubar/Menubar";
import "./Header.css";

const Header = () => {
  return (
    <div>

      <header>
        <Menubar></Menubar>
        <div className="banner">
          <Banner />
        </div>
      </header>
    </div>
  );
};

export default Header;
