import React from "react";
import HeroImage from "./../assets/images/hero-image.svg";
import Button from "./button";
import { navigateToApp } from "./../includes/scripts/customScript";
import db from "../backend/db";

const AppHero = (): JSX.Element => {

  const handleNavigateToApp = ():void =>
  {   
      db.create("CLIPSAVE_HOME_PAGE_SEEN", "true");
      navigateToApp();
  }
  return (
    <React.Fragment>
      <section className="hero-section">
        <div className="py-5 d-sm-none d-md-block"></div>

        <div className="row align-items-center g-lg-5 g-md-3 py-2 justify-content-around">
          <div
            className="col-md-6 col-sm-8 col  col-lg-5 d-flex align-items-center m-auto my-md-3 my-md-5 my-3"
            id="img-container"
          >
            <img
              src={HeroImage}
              width="400"
              height="400"
              className="img-fluid m-auto"
              alt={"logo"}
            />
          </div>

          <div className="col-lg-7 text-center text-lg-start my-md-4 my-2">
            <h1 className="display-6 header-title fw-bold lh-1 mb-3 text-capitalize text-start text-md-center text-lg-start px-2 px-md-0">
              Download{" "}
              <span className="brand-text-primary-color">
                Youtube videos
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="d-none d-md-block width-toggle-dash"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="#6E41E2"
                    d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                  ></path>
                </svg>
              </span>{" "}
              <span className="d-md-inline d-inline py-2">for free </span>
            </h1>

            <p className="col-lg-10 fs-5 p-2 text-start text-lg-start my-3 py-md-4 py-sm-1">
              You are in charge, download of your favorite videos, anytime and
              anywhere. No ads, no fuss
            </p>

            <Button
              text="get started"
              className="brand-button-outline width-toggle my-md-3 my-2 shadow-sm p-2"
              onClick={handleNavigateToApp}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AppHero;
