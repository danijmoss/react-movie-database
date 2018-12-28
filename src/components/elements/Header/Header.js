import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className='rmdb-header'>
      <div className='rmdb-header-content'>
        <img
          className='rmdn-logo'
          src='./images/reactMovie_logo.png'
          alt='React Movie Database Logo'
        />
        <img
          className='rmdb-tmdb-logo'
          src='./images/tmdb_logo.png'
          alt='The Movie Database Logo'
        />
      </div>
    </div>
  );
};

export default Header;
