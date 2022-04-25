import React from "react";
import Client from "../../../clients.json";
const Carrousel = () => {
  const itemOne = Client.slice(0, 4);
  const itemTwo = Client.slice(4, 8);
  const itemThree = Client.slice(8, 12);
  const itemFour = Client.slice(12, 16);
  const itemFive = Client.slice(16, 20);

  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide bg-white py-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current={true}
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="row py-2 text-center mb-5">
              {itemOne.map((data, index) => (
                <div key={index} className="col-3 col-lg-3 my-2">
                  <img src={data.url} className="img-client" alt="..." />
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="row py-2 text-center mb-5">
              {itemTwo.map((data, index) => (
                <div key={index} className="col-3 col-lg-3 my-2">
                  <img src={data.url} className="img-client" alt="..." />
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="row py-2 text-center mb-5">
              {itemThree.map((data, index) => (
                <div key={index} className="col-3 col-lg-3 my-2">
                  <img src={data.url} className="img-client" alt="..." />
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="row py-2 text-center mb-5">
              {itemFour.map((data, index) => (
                <div key={index} className="col-3 col-lg-3 my-2">
                  <img src={data.url} className="img-client" alt="..." />
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="row py-2 text-center mb-5">
              {itemFive.map((data, index) => (
                <div key={index} className="col-3 col-lg-3 my-2">
                  <img src={data.url} className="img-client" alt="..." />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon mr-carrousel-5" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon ml-carrousel-5" aria-hidden={true}></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
