import React from 'react';
import { BsHouseFill, BsFillPeopleFill, BsFillPersonBadgeFill, BsFillTelephoneFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import ListOfServices from '../../ListOfServices.json'

const NavBar = () => {
  const [services, setServices] = useState([])
  const [scroll, setScroll] = useState(true)

    const scrollTop = () => {
      window.scrollTo(0, 0);
    }

    const scrollBottom = () => {
      window.scrollTo(0, 5000);
    }

    useEffect(() => {
        const data = [...ListOfServices]
        setServices(data)
    }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-danger fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand font-home">Soluciones Higiene y Seguridad</a>
          <button className="navbar-toggler font-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><FiMenu /></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
              <NavLink to="/higieneYSeguridadApp" 
              className={({ isActive }) => isActive ? 'activeNav' : 'navbarLink'}
              onClick={scrollTop}>
                <li>
                  <BsHouseFill className='mb-2' /> Inicio
                </li>
              </NavLink>
              <li className='nav-item dropdown'>
                  <div className="dropdown">
                    <a className="dropLink"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <BsFillPeopleFill className='mb-2' /> Servicios
                    </a>
                    <ul class="dropdown-menu bg-danger border border-danger"
                      aria-labelledby="dropdownMenuButton1">
                      {services.length
                        ? services.map((data) =>
                        <li><NavLink  to={`/servicios/${data.route}`}
                                      onClick={scrollTop}
                                      className="dd-item"
                                      key={data.id}><a>{data.title}</a>
                            </NavLink>
                        </li>
                        )
                        :<div className='container-fluid'>
                            <div className='row text-center'>
                                <Spinner animation="border"/>
                            </div>
                        </div>
                    }
                    </ul>
                  </div>
                </li>
              <a id="dropdownMenuButton" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false"
              className='navbarLink dropdown'
              onClick={scrollBottom}>
                <li>
                  <BsFillPersonBadgeFill className='mb-2' /> Contacto
                </li>
              </a>
              <a className="navbarLink" href='https://api.whatsapp.com/send/?phone=5493513985637&text&app_absent=0' target="_blank">
                <IoLogoWhatsapp className='icon-whatsApp' />Llamar Ahora
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;