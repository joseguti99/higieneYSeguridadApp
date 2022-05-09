import React from 'react'
import { HiDocumentText } from "react-icons/hi";
import Contacto from '../../Contacto';
import NavBar from '../../NavBar';
const PrevencionesART = () => {
  return (
    <>
    <NavBar/>
      <div className='container bg-white'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <h1 className='prevencionesTitle'>Documentación de ART</h1>
          </div>
          <div className='col-10 col-lg-12'>
              <p className='description-prevenciones'>Gestionamos la documentación de prevención de ART, brindamos los siguientes servicios: </p>
              <ul className='list-unstyled'>
                <li className='li-prevenciones my-5'><HiDocumentText className='text-danger mb-2 h2'/> Formularios RGRL (Relevamiento General de Riesgos Laborales)</li>
                <li className='li-prevenciones my-5'><HiDocumentText className='text-danger mb-2 h2'/> Protocolos COVID-19 por actividad</li>
                <li className='li-prevenciones my-5'><HiDocumentText className='text-danger mb-2 h2'/> Formularios RAR (Relevamiento de Agentes de Riesgos)</li>
                <li className='li-prevenciones my-5'><HiDocumentText className='text-danger mb-2 h2'/> Nómina del personal expuesto</li>
                <li className='li-prevenciones my-5'><HiDocumentText className='text-danger mb-2 h2'/> Formularios de constancia de Elementos de Protección Personal</li>
              </ul>
          </div>
        </div>
      </div>
      <div className='container-fluid bg-space'></div>
      <Contacto/>
    </>
  )
}

export default PrevencionesART