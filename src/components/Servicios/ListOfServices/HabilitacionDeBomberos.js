import React from 'react'
import Contacto from '../../Contacto'
import NavBar from "../../NavBar"

const HabilitacionDeBomberos = () => {
  return (
    <>
    <NavBar/>
      <div className='container bg-white h-bomberos'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='habilitacionTitle'>Habilitaciones De Bomberos </h1>
          </div>
          <div className='col-12'>
            <p className='description-habilitacionBomberos'>Gestionamos la obtención y/o renovación de habilitaciones 
              en la Dirección de Bomberos de Córdoba. Lo asesoramos para 
              que cumpla las normativas vigentes, logrando su habilitación 
              correspondiente ante el organismo de control.</p>
          </div>
        </div>
      </div>
      <div className='container-fluid bg-space'></div>
        <Contacto/>
    </>
  )
}

export default HabilitacionDeBomberos