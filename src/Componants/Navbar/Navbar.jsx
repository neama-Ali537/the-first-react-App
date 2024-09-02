import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-2 d-flex flex-md-row flex-column justify-content-between">
      <div className="left-nav d-flex align-items-center flex-md-row flex-column">
        <h1 className="m-0 pe-3">Noxe</h1>

        <ul className="list-unstyled d-flex flex-md-row flex-column m-0 align-items-center">
          <li className="px-2">
            <Link to="home">Home</Link>
          </li>
          <li className="px-2">
            <Link to="movies">Movies</Link>
          </li>
          <li className="px-2">
            <Link to="tv">TV</Link>
          </li>
          <li className="px-2">
            <Link to="people">People</Link>
          </li>
          <li className="px-2">
            <Link to="about">About</Link>
          </li>
        </ul>
      </div>
      <div className="right-nav d-flex flex-md-row flex-column align-items-center">
        <did className="social-media">
           <i className="fab mx-1 fa-facebook"></i>
           <i className="fab mx-1 fa-instagram"></i>
           <i className="fab mx-1 fa-twitter"></i>
           <i className="fab mx-1 fa-spotify"></i>
           <i className="fab mx-1 fa-youtube"></i>
        
        </did>
      

        <ul className="list-unstyled d-flex m-0 align-items-center">
          <li className="px-2">
            <Link to="login">Login</Link>
          </li>
          <li className="px-2">
            <Link to="/">Register</Link>
          </li>
          <li className="px-2">
            <span>LogOut</span>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}
