import React from "react";


export default function Footer() {
  return (
    <footer className="footer bg-dark text-light py-3 ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              Noxe is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, and more.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light">About</a></li>
              <li><a href="/login" className="text-light">Login</a></li>
              <li><a href="/" className="text-light">Register</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">Facebook</a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">Twitter</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">Instagram</a></li>
              <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-light">Youtube</a></li>
             
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Noxe. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
