import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className='rmdb-header'>
      <div className='rmdb-header-content'>
        <Link to='/'>
          <img
            className='rmdn-logo'
            src='./images/reactMovie_logo.png'
            alt='React Movie Database Logo'
          />
        </Link>

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
