import React from 'react'
import { AiOutlineLink } from "react-icons/ai";

const Habilitaciones = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row bg-white'>
          <div className='col-12 h-habilitacion'>
            <h2 className='title-habilitacion'>HABILITACIONES</h2>
            <p className='description-habilitacion text-center'>Solicitar una habilitacion consta de tres pasos en los que se desarrollan: </p>
            <div className='row justify-content-center'>
              <div className='col-9 rounded bg-card my-5'>
                <h3 className='SubTitle-Hab'>Prefactibilidad</h3>
                <p className='description-habilitacion'>Es un trámite que se puede realizar vía web
                  o personalmente en la Municipalidad de Córdoba.
                  Para obtenerlo le solicitarán los siguientes datos:
                </p>
                <ul className='list-unstyled'>
                  <li className='li-hab'><AiOutlineLink className='icon-hab' /> Rubros y actividades del establecimiento o inmueble.</li>
                  <li className='li-hab'><AiOutlineLink className='icon-hab' /> Datos de identificación catastral o domicilio de realización de la actividad.</li>
                  <li className='li-hab'><AiOutlineLink className='icon-hab' /> Superficie en metros cuadrados del establecimiento a habilitar.</li>
                  <li className='li-hab'><AiOutlineLink className='icon-hab' /> Información Personal: datos de los titulares de la actividad económica a habilitar</li>
                </ul>
              </div>
              <div className='col-9 rounded bg-card my-5'>
                <h4 className='SubTitle-Hab'>Solicitud De Habilitacion</h4>
                <p className='description-habilitacion'>El trámite puede ser realizado por el/la
                  titular o representante designado/a, ingresando
                  con su usuario de CiDi a la plataforma de Vecino
                  Digital (VeDi) de la página web de la Municipalidad
                  de Córdoba.</p>
              </div>
              <div className='col-9 rounded bg-card my-5'>
                <h5 className='SubTitle-Hab'>Pago De Tasas</h5>
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
      </>
      )
}

      export default Habilitaciones