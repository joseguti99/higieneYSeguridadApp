import React from 'react'
import { AiOutlineLink } from "react-icons/ai";
import Contacto from "../../Contacto"

const InformesHigieneySeguridad = () => {
  return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col-12 h-informe '>
              <h2 className='title-Informe'>Informes de Higiene Y Seguridad</h2>
              <p className='description-informe'>El informe tecnico de Higiene y Seguridad es un 
                relevamiento del establecimiento que consiste en 
                determinar diferentes factores, teniendo en cuenta 
                características constructivas para determinar el 
                nivel de riesgo y los distintos sistemas de protección
                contra incendios donde se realiza la verificación de
                las condiciones de situación, construcción y extinción.</p>
              <p className='description-informe'>Dicho Manual Incluye: </p>
              <ul className='list-unstyled'>
                <li className='li-informe'><AiOutlineLink className='icon-clip'/> Manual de autoprotección.</li>
                <li className='li-informe'><AiOutlineLink className='icon-clip'/> Sistemas y medios de evacuación | Tiempos de salida o evacuación.</li>
                <li className='li-informe'><AiOutlineLink className='icon-clip'/> Estudios de carga de fuego | poder calorífico de los materiales</li>
                <li className='li-informe'><AiOutlineLink className='icon-clip'/> Determinación de cantidad de extintores por sector.</li>
                <li className='li-informe'><AiOutlineLink className='icon-clip'/> Anchos de salida (Cálculo de unidades de salida).</li>
                <li className='li-informe'><AiOutlineLink className='icon-clip'/> Nivel de riesgo potencial</li>
                <li className='li-informe'><AiOutlineLink className='icon-clip'/> Factor de ocupación (Cantidad de personas que pueden evacuar).</li>
                <li className='li-informe'><AiOutlineLink className='icon-clip'/> Tipo de estructuras (Paredes, sectores de incendio, tipo de construcción).</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='container-fluid bg-space'></div>
        <Contacto/>
      </>
  )
}

export default InformesHigieneySeguridad