import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({userData , LogOut}) {
  return (
    <nav className="p-2 d-flex flex-md-row flex-column justify-content-between">
      <div className="left-nav d-flex align-items-center flex-md-row flex-column">
        <h1 className="m-0 pe-3">Noxe</h1>
        {userData ? (
          <>
            {" "}
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
          </>
        ) : (
          ""
        )}
      </div>
      <div className="right-nav d-flex flex-md-row flex-column align-items-center">
        <div className="social-media">
          
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><i className="fab mx-1 fa-facebook"> </i></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab mx-1 fa-instagram"></i></a> 
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> <i className="fab mx-1 fa-twitter"></i></a>
       
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" > <i className="fab mx-1 fa-youtube"></i></a> 
        </div>

        <ul className="list-unstyled d-flex m-0 align-items-center">
          {userData ? (
            <>
              <li className="px-2 cursurPointer" onClick={LogOut}>
                <span>LogOut</span>
              </li>
              <li className="px-2">
                <Link to="profile">User_Profile</Link>
              </li>
            </>
          ) : (
            <>
              <li className="px-2 cursurPointer">
                <Link to="login">Login</Link>
              </li>
              <li className="px-2">
                <Link to="/">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
