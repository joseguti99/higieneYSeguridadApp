import React from 'react'
import Contacto from '../../Contacto'
import NavBar from '../../NavBar'

const Capacitaciones = () => {
    return (
        <>
        <NavBar/>
            <div className='container-fluid bg-white'>
                <div className='row justify-content-center'>

                    <div className='col-12 col-lg-10'>
                        <h1 className='capacitacionTitle'>Capacitación y Formación</h1>
                    </div>

                    <div className='col-10 col-lg-10'>
                        <p className='description-capacitaciones'>Está orientada a prever los cambios que se producen en el personal, debido a que sus actividades laborales, se vuelven rutinarias y su desempeño puede variar con los años, sus destrezas pueden deteriorarse y la tecnología hacer obsoletos sus conocimientos.</p>
                        <p className='description-capacitaciones'>La Capacitación en seguridad y salud en el trabajo, es una actividad sistemática, planificada y permanente, cuyo propósito es promover mecanismos de prevención, es un proceso participativo que involucra a toda la comunidad trabajadora.</p>
                        <p className='description-capacitaciones'>Está dirigida hacia empresas, negocios. Se cuenta con material informatico, exposición oral, para cualquier tipo de público y especialidades.</p>
                    </div>

                    <div className='col-12 col-lg-10'>
                        <ul>
                            <li className='li-capacitaciones'>Protección contra incendios.</li>
                            <li className='li-capacitaciones'>Uso y mantenimiento de EPP.</li>
                            <li className='li-capacitaciones'>Trabajo en alturas.</li>
                            <li className='li-capacitaciones'>Riesgos generales.</li>
                            <li className='li-capacitaciones'>Otros.</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='container-fluid bg-space'></div>
            <Contacto/>
        </>
    )
}

export default Capacitaciones