import React from 'react'
import Contacto from "../../Contacto"
import NavBar from '../../NavBar'

const MedicionDeRuidos = () => {
  return (
    <>
    <NavBar/>
      <div className='container bg-white h-mediciones'>
        <div className='row'>
          <div className='col-12'>
          <h1 className='medicionTitle'>Mediciones De Ruido</h1>
          </div>
          <div className='col-12'>
            <p className='description-medicion'>El ruido es uno de los contaminantes laborales más comunes. 
              Gran cantidad de trabajadores y vecinos se ven expuestos diariamente a 
              niveles sonoros potencialmente peligrosos para su audición, 
              además de sufrir otros efectos perjudiciales en su salud. En
              muchos casos es técnicamente viable controlar el exceso de ruido 
              aplicando técnicas de ingeniería acústica sobre las fuentes 
              que lo generan.</p>
            <p className='description-medicion'>Realizamos mediciones de ruido laboral de acuerdo a la Resolución 85/12.</p>
            <p className='description-medicion'>Mediciones de ruidos molestos en la ciudad de Córdoba bajo la Ordenanza 12208/13.</p>
          </div>
        </div>
      </div>
      <div className='container-fluid bg-space'></div>
        <Contacto/>
    </>
  )
}

export default MedicionDeRuidos