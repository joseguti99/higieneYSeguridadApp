import React, { useRef } from 'react'
import DBservices from '../../Services.json'
import DBClients from '../../clients.json'
import { BiHeadphone } from "react-icons/bi";
import { FcPhone } from "react-icons/fc";
import NavBar from '../NavBar';
import Contacto from "../Contacto"

const Home = () => {
  return (
    <>
      <NavBar />
      <div className='container-fluid bg-hys'></div>
      <header>
        <div className='container-fluid bg-white shadow'>
          <div className='row h-header justify-content-center'>
            <div className='col-4'>
              <h1 className='fontName'>Viviana Loza</h1>
              <h1 className='lic-hys'>LIC HIGIENE Y SEGURIDAD</h1>
              <p className='font-description'>
                Servicio de higiene y seguridad, asesoramiento, informes tecnicos, planos de evacuacion, capacitaciones.
              </p>
            </div>
            <div className='col-7 text-center my-5'>
              <img className='col-2 wh-img m-2' src='https://raw.githubusercontent.com/joseguti99/DB-IMG-PUBLIC/1df0b277eaef6cbcfca7e5c0c9a1f26622bce18b/higiene-seguridad-app/Rectangle%201.svg' />
              <img className='col-2 wh-img m-2' src='https://raw.githubusercontent.com/joseguti99/DB-IMG-PUBLIC/1df0b277eaef6cbcfca7e5c0c9a1f26622bce18b/higiene-seguridad-app/casco%201.svg' />
              <img className='col-2 wh-img m-2' src='https://raw.githubusercontent.com/joseguti99/DB-IMG-PUBLIC/1df0b277eaef6cbcfca7e5c0c9a1f26622bce18b/higiene-seguridad-app/electricidad%201.svg' />
              <img className='col-2 wh-img m-2' src='https://raw.githubusercontent.com/joseguti99/DB-IMG-PUBLIC/1df0b277eaef6cbcfca7e5c0c9a1f26622bce18b/higiene-seguridad-app/extintor%201.svg' />
              <img className='col-2 wh-img m-2' src='https://raw.githubusercontent.com/joseguti99/DB-IMG-PUBLIC/1df0b277eaef6cbcfca7e5c0c9a1f26622bce18b/higiene-seguridad-app/ingreso%201.svg' />
            </div>
          </div>
        </div>
      </header>
      <div className='container-fluid bg-space'></div>
      <div>
      </div>
      <div className='container-fluid bg-white shadow'>
        <div className='row justify-content-center'>
          {DBservices.length
            ?
            DBservices.map((data, index) =>
              <div className='col-5 m-5 text-center border-card' key={data.id}>
                <img src={data.logo} className='w-25 my-3' />
                <h6 className='card-title my-3'>{data.Title}</h6>
                <p>{data.description}</p>
              </div>)
            : console.log("Failed Map")
          }
        </div>
      </div>
      <div className='container-fluid bg-space'></div>
      <div className='container-fluid ms-auto shadow'>
        <div className='row justify-content-center py-5'>
          <h5 className='font-clients my-4 text-center justify-content-center'>Nuestros Clientes</h5>
          {DBClients.length ? DBClients.map((data, index) =>
            <div className='col-1 my-2 mx-2 d-flex text-center bg-white border shadow'>
              <img src={data.url} className="img-client" />
            </div>
          ) : "Loading"}
        </div>
      </div>
      <div className='container-fluid bg-space'></div>
      <Contacto/>
    </>
  )
}

export default Home