import React from 'react'
import Contacto from '../../Contacto'
import NavBar from '../../NavBar'
const ProgramaErgonomia = () => {
  return (
    <>
    <NavBar/>
      <div className='container-fluid bg-white'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-12'>
            <h1 className='ergonomiaTitle'>Programa de Ergonomia Integrado</h1>
          </div>
          <div className='col-11 col-lg-10'>
            <p className='description-ergonomia'>Según lo establecido en la Resolución MTESS Nº 295/03 Anexo I,
              se establece para los factores de riesgo ergonómico la implementación
              de las correspondientes “Estrategias de control” de acuerdo al nivel
              de riesgo identificado en los puestos de trabajo.</p>
              <p className='description-ergonomia'>
                Definido el riesgo
                ergonómico por sus causales (agentes de riesgo) y por sus consecuencias
                sobre la salud (trastornos músculo-esqueléticos), la Resolución 295/03
                en su anexo I, plantea una estrategia de control del riesgo, que denomina
                “Programa de Ergonomía Integrado” (P.E.I.).
              </p>
          </div>
          <div className='col-12 col-lg-10'>
            <ul>
              <li className='li-ergonomia'>Reconocimiento del problema.</li>
              <li className='li-ergonomia'>Evaluación de los trabajos con sospecha de posibles factores de riesgo.</li>
              <li className='li-ergonomia'>Identificación y evaluación de los factores causantes.</li>
              <li className='li-ergonomia'>Involucrar a los trabajadores bien informados como participantes activos.</li>
              <li className='li-ergonomia'>Cuidar adecuadamente de la salud para los trabajadores que tengan trastornos musculo-esqueléticos.</li>
              <li className='li-ergonomia'>Reducir las pérdidas económicas que supone el absentismo laboral, provocado por enfermedades laborales.</li>
              <li className='li-ergonomia'>Mejorar la calidad de vida de los trabajadores.</li>
              <li className='li-ergonomia'>Ser más eficientes y productivas.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container-fluid bg-space'></div>
      <Contacto/>
    </>
  )
}

export default ProgramaErgonomia