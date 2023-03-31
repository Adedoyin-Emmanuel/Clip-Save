import React from "react";
import LostImage from "./../assets/images/lost.svg";
import { navigateToApp } from "../includes/scripts/customScript";
import Button from "../components/button";
const NotFound = (): JSX.Element => {
  return (
    <React.Fragment>
      <section className="container-fluid my-3 ">
        <section className="d-flex align-items-center justify-content-center">
          <h1 className="fs-1 fw-bold text-dark text-capitalize my-2 p-2">
            Not found!
          </h1>
        </section>

        <section className="not-found-container d-flex align-items-center justify-content-center my-md-0 my-3">
          <img
            src={LostImage}
            className="img-fluid m-auto lost-image p-4"
            width="400"
            height="400"
          />
        </section>

        <section className="m-auto button-container d-flex align-items-center justify-content-center my-sm-3">
          <Button
            className="brand-button my-3 width-toggle-6 text-capitalize fw-bold text-light brand-white-color"
            text="Go Home"
            onClick={navigateToApp}
          />
        </section>
      </section>
    </React.Fragment>
  );
};

export default NotFound;
