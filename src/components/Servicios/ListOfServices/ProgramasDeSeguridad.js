import React from 'react'
import Contacto from "../../Contacto"

const ProgramasDeSeguridad = () => {
  return (
    <>
      <div className='container-fluid bg-white h-title'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <h1 className='programaSeguridadTitle'>Programas De Seguridad</h1>
          </div>
          <div className='col-10 text-center'>
            <p className='description-Seguridad'>Es un documento que pretende instrumentar las acciones necesarias y suficientes 
              para que la prevención, la higiene y la seguridad sean actividades integradas a 
              las tareas que cada trabajador de la empresa desarrolle en la obra, concretando 
              la asignación de las mismas y de los principios que las sustentan a cada puesto 
              de trabajo y en cada línea de mando.
            </p>
            <p className='description-Seguridad'>El objetivo que se haga cumplir e implementar medidas correctivas y preventivas 
              de trabajo, que disminuyan los riesgos de las tareas que se ejecutan de forma tal 
              que las mismas se realicen sin causar daños a las personas y a los bienes de la 
              Empresa.
            </p>
            <p className='description-Seguridad'>
              Confeccionado con las normas que establece la Resolución 51/97 y 35/98 de la 
              Superintendencia de Riesgos de Trabajo. 
            </p>
          </div>
        </div>
      </div>
      <div className='container-fluid bg-space'></div>
      <Contacto/>
    </>
  )
}

export default ProgramasDeSeguridad