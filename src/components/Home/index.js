import React, { useRef } from 'react'
import DBservices from '../../Services.json'
import DBClients from '../../clients.json'
import { BiHeadphone } from "react-icons/bi";
import { FcPhone } from "react-icons/fc";
import NavBar from '../NavBar';
import Contacto from "../Contacto"
import Carrousel from './Carrousel';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className='container-flex'>
        <div className='container-img'>
          <img className="img-flex" alt="fondo de pantalla hombre con casco de trabajo" src='https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/higiene-seguridad-app/hys-solutions-png.jpg?raw=true'/>
        </div>
      </div>
      <header>
        <div className='container-fluid bg-white shadow'>
          <div className='row h-header justify-content-center'>
            <div className='col-12 col-md-12 col-md-7 col-lg-6 col-xl-6'>
              <h1 className='fontName'>Viviana Loza</h1>
              <h2 className='lic-hys'>LIC. EN HIGIENE Y SEGURIDAD</h2>
              <p className='font-description'>
                Servicio de higiene y seguridad, asesoramiento, informes técnicos, planos de evacuación, capacitaciones.
              </p>
            </div>
            <div className='col-12 col-md-7 col-lg-6 col-xl-6 col-xxl-6 text-center my-5'>
              <img alt="cartel peligro riesgo electrico" className='col-2 col-md-1 col-lg-1 col-xl-1 m-md-0 m-lg-1 wh-img' src='https://raw.githubusercontent.com/joseguti99/DB-IMG-PUBLIC/1df0b277eaef6cbcfca7e5c0c9a1f26622bce18b/higiene-seguridad-app/electricidad%201.svg' />
              <img alt="cartel uso obligatorio de casco" className='col-2 col-md-1 col-lg-1 col-xl-1 m-md-0 m-lg-1 wh-img' src='https://raw.githubusercontent.com/joseguti99/DB-IMG-PUBLIC/1df0b277eaef6cbcfca7e5c0c9a1f26622bce18b/higiene-seguridad-app/casco%201.svg' />
              <img alt="cartel extintor de fuego" className='col-2 col-md-1 col-lg-1 col-xl-1 m-md-0 m-lg-1 wh-img' src='https://raw.githubusercontent.com/joseguti99/DB-IMG-PUBLIC/1df0b277eaef6cbcfca7e5c0c9a1f26622bce18b/higiene-seguridad-app/extintor%201.svg' />
              <img alt="cartel salida de emergencia" className='col-2 col-md-1 col-lg-1 col-xl-1 m-md-0 m-lg-1 wh-img' src='https://raw.githubusercontent.com/joseguti99/DB-IMG-PUBLIC/1df0b277eaef6cbcfca7e5c0c9a1f26622bce18b/higiene-seguridad-app/Rectangle%201.svg' />
              <img alt="cartel prohibido el ingreso" className='col-2 col-md-1 col-lg-1 col-xl-1 m-md-0 m-lg-1 wh-img' src='https://raw.githubusercontent.com/joseguti99/DB-IMG-PUBLIC/1df0b277eaef6cbcfca7e5c0c9a1f26622bce18b/higiene-seguridad-app/ingreso%201.svg' />
            </div>
          </div>
        </div>
      </header>
      <div className='container-fluid bg-space'></div>
      <div>
      </div>
      <div className='container-fluid bg-white shadow'>
        <article className='row justify-content-center'>
          {DBservices.length
            ?
            DBservices.map((data, index) =>
              <div className='col-12 col-lg-5 m-5 text-center border-card' key={data.id}>
                <img src={data.logo} className='w-25 my-3' alt={data.alt}/>
                <h6 className='card-title my-3'>{data.Title}</h6>
                <p className='fs-4'>{data.description}</p>
              </div>)
            : console.log("Failed Map")
          }
        </article>
      </div>
      <div className='container-fluid bg-space'></div>
      <div className='container-fluid ms-auto shadow'>
        <div className='row justify-content-center'>
          <h5 className='font-clients my-4 text-center justify-content-center'>Algunos de Nuestros Clientes</h5>
        </div>
      </div>
      <Carrousel/>
      <div className='container-fluid bg-space'></div>
      <Contacto/>
    </>
  )
}

export default Home