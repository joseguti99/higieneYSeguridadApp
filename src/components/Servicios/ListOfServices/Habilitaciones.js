import React from 'react'
import { AiOutlineLink } from "react-icons/ai";
import Contacto from '../../Contacto';
import NavBar from '../../NavBar';
const Habilitaciones = () => {
  return (
    <>
    <NavBar/>
      <div className='container-fluid'>
        <div className='row bg-white'>
          <div className='col-12 col-lg-12 h-habilitacion'>
            <h2 className='title-habilitacion'>Habilitaciones</h2>
            <p className='description-habilitacion text-center'>Solicitar una habilitación consta de tres pasos en los que se desarrollan: </p>
            <div className='row justify-content-center'>
              <div className='col-11 col-lg-10 rounded'>
                <h3 className='SubTitle-Hab'>Prefactibilidad</h3>
                <p className='description-habilitacion'>Es un trámite que se puede realizar vía web
                  o personalmente en la Municipalidad de Córdoba.
                  Para obtenerlo le solicitarán los siguientes datos:
                </p>
              </div>
              <div className='col-10 col-lg-10'>
                <ul className='list-unstyled mt-5'>
                  <li className='li-hab'><AiOutlineLink className='icon-hab' /> Rubros y actividades del establecimiento o inmueble.</li>
                  <li className='li-hab'><AiOutlineLink className='icon-hab' /> Datos de identificación catastral o domicilio de realización de la actividad.</li>
                  <li className='li-hab'><AiOutlineLink className='icon-hab' /> Superficie en metros cuadrados del establecimiento a habilitar.</li>
                  <li className='li-hab'><AiOutlineLink className='icon-hab' /> Información Personal: datos del o los titulares de la actividad económica a habilitar</li>
                </ul>
              </div>
              <div className='col-11 col-lg-10 rounded bg-card my-5'>
                <h4 className='SubTitle-Hab'>Solicitud de Habilitacion</h4>
                <p className='description-habilitacion'>El trámite puede ser realizado por el/la
                  titular o representante designado/a, ingresando
                  con su usuario de CiDi a la plataforma de Vecino
                  Digital (VeDi) de la página web de la Municipalidad
                  de Córdoba.</p>
              </div>
              <div className='col-11 col-lg-10 rounded bg-card my-5'>
                <h5 className='SubTitle-Hab'>Pago de Tasas</h5>
                <p className='description-habilitacion'>Una vez finalizada la gestión, el ente
                  municipal emite las tasas correspondientes,
                  el monto de la misma varía según la superficie
                  del local.</p>
                  <div className='text-center'>
                  <img src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/higiene-seguridad-app/VEDI.jpg?raw=true" 
                        className='img-fluid my-5 text-center w-75'></img>
                  </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className='container-fluid bg-space'></div>
        <Contacto/>
      </>
      )
}

export default Habilitaciones