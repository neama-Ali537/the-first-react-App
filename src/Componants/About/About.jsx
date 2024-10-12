import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function About() {
  return (
    <>
      <h1 className="font py-2">Frequently Asked Questions</h1>
      <div className="accordion container py-2 " id="accordionExample">
        <div className="accordion-item bg-dark text-light">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              What Is Noxe?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Noxe is a streaming service that offers.</strong> a wide
              variety of award-winning TV shows, movies, anime, documentaries,
              and more on thousands of internet-connected devices. You can watch
              as much as you want, whenever you want – all for one low monthly
              price. There's always something new to discover{" "}
              <code>new TV shows and movies</code>, are added every week!
            </div>
          </div>
        </div>

        <div className="accordion-item  bg-dark text-light">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Where Can I Watch?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Watch anywhere, anytime.</strong> Sign in with your
              Netflix account to watch instantly on the web at netflix.com from
              your personal computer or on any internet-connected device that
              offers the Netflix app, including{" "}
              <code>smart TVs, smartphones, tablets</code>, streaming media
              players and game consoles.
            </div>
          </div>
        </div>

        <div className="accordion-item  bg-dark text-light">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How Do I Cancel?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Noxe is flexible.</strong>There are no pesky contracts and
              no commitments. You can easily cancel your account online in{" "}
              <code>its Important To Know</code>, There are no cancellation fees – start
              or stop your account anytime.
            </div>
          </div>
        </div>

    
      
      </div>
    </>
  );
}
