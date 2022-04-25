import React from "react";
import {
  BsHouseFill,
  BsFillPeopleFill,
  BsFillPersonBadgeFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ListOfServices from "../../ListOfServices.json";

const NavBar = () => {
  const [services, setServices] = useState([]);
  const [scroll, setScroll] = useState(true);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollBottom = () => {
    window.scrollTo(0, 5000);
  };

  useEffect(() => {
    const data = [...ListOfServices];
    setServices(data);
  }, []);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-danger bg-danger fixed-top">
        <div class="container-fluid justify-content-end">
          <NavLink
            to="/"
            className="navbar-brand"
            onClick={scrollTop}
          >
            <img src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/higiene-seguridad-app/SVG%20HIGIENE%20Y%20SEGURIDAD@2x%20(2).png?raw=true" />
          </NavLink>

          <button
            className="navbar-toggler ms-auto font-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <FiMenu />
            </span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 mb-2 justify-content-end">
              <NavLink
                to="/higieneYSeguridadApp"
                onClick={scrollTop}
                className={({ isActive }) =>
                  isActive ? "activeNav" : "navbarLink"
                }
              >
                <li className="nav-item">
                  <BsHouseFill className="mb-2" /> Inicio
                </li>
              </NavLink>

              <li className="nav-item dropdown">
                <div className="dropdown">
                  <a
                    className="dropLink"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded={false}
                  >
                    <BsFillPeopleFill className="mb-2" /> Servicios
                  </a>
                  <ul
                    class="dropdown-menu bg-danger border border-danger"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {services.length ? (
                      services.map((data) => (
                        <li>
                          <NavLink
                            to={`/servicios/${data.route}`}
                            onClick={scrollTop}
                            className="dd-item"
                            key={data.id}
                          >
                            <a>{data.title}</a>
                          </NavLink>
                        </li>
                      ))
                    ) : (
                      <div className="container-fluid">
                        <div className="row text-center">
                          <Spinner animation="border" />
                        </div>
                      </div>
                    )}
                  </ul>
                </div>
              </li>
              <a
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="navbarLink dropdown"
                onClick={scrollBottom}
              >
                <li>
                  <BsFillPersonBadgeFill className="mb-2" /> Contacto
                </li>
              </a>
              <a
                className="navbarLink"
                href="https://api.whatsapp.com/send/?phone=5493513985637&text&app_absent=0"
                target="_blank"
              >
                <IoLogoWhatsapp className="icon-whatsApp" />
                Llamar Ahora
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
