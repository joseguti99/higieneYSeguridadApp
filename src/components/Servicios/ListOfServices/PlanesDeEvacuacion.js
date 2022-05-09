import React from 'react'
import Contacto from '../../Contacto'
import NavBar from '../../NavBar'

const PlanesDeEvacuacion = () => {
  return (
    <>
    <NavBar/>
      <div className='container-fluid bg-white'>
        <div className='row justify-content-center'>
          <div className='col-10 col-lg-10'>
            <h1 className='evacuacionTitle'>Planes de Evacuación</h1>
          </div>
          <div className='col-10 col-lg-10 mb-5'>
            <p className='description-evacuacion'>
              Engloba todo un conjunto de acciones necesarias para
              estar preparados ante una emergencia. Reúne tanto la
              planificación como la organización humana para utilizar
              de forma eficiente los medios técnicos dispuestos para
              minimizar el peligro ante un acontecimiento de riesgo
            </p>
            <p className='description-evacuacion'>
              Items importantes para un correcto plano de evacuación:
            </p>
          </div>
          <div className='col-12 col-lg-10 mb-5'>
            <ul>
              <li className='li-evacuacion'>Protección contra incendios.</li>
              <li className='li-evacuacion'>Uso y mantenimiento de EPP.</li>
              <li className='li-evacuacion'>Trabajo en alturas.</li>
              <li className='li-evacuacion'>Riesgos generales.</li>
              <li className='li-evacuacion'>Otros.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container-fluid bg-space'></div>
      <Contacto />
    </>
  )
}

export default PlanesDeEvacuacion