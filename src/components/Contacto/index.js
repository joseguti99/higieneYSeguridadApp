import React from 'react'
import { HiMail } from "react-icons/hi";
import {BiTimeFive} from "react-icons/bi"
import {BsFillTelephoneFill} from "react-icons/bs"
import { IoLocationSharp } from "react-icons/io5";
import ListOfServices from ".././../ListOfServices.json"

const Contacto = () => {
    return (
        <>
            <div className='container-fluid bg-white shadow'>
                <div className='row py-5 justify-content-center'>
                    <h1 className='text-center font-clients my-1'>Contacto</h1>
                    <div className='col-12 col-lg-3 mx-5 my-4'>
                        <div className='border-bottom border-secondary'>
                        <a className="link-footer" href='tel:+5493516076315'><p className='h5 mx-4 mt-1'><BsFillTelephoneFill className='h2  text-danger' /> TELEFONO</p></a>
                            <p className='h5 mx-5'>351-398-5637</p>
                        </div>
                        <div className='border-bottom border-secondary'>
                            <a className='link-footer' href="mailto:vivianalozahys@gmail.com"><p className='h5 mx-4 mt-1'><HiMail className='h2 text-danger ' /> EMAIL</p></a>
                            <p className='h5 mx-5'>vivianalozahys@gmail.com</p>
                        </div>
                        <div className='border-bottom border-secondary'>
                            <p className='h5 mx-4 mt-2'><IoLocationSharp className='h2 text-danger ' />UBICACIÓN</p>
                            <p className='h5 mx-5'>Córdoba Capital, Argentina</p>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 mx-5 my-3 mb-2'>
                        <h1 className='fontName'>Viviana Loza</h1>
                        <h2 className='lic-hys'>LIC. EN HIGIENE Y SEGURIDAD</h2>
                        <p className='font-description'>
                            Servicio de higiene y seguridad, asesoramiento, informes técnicos, planos de evacuación, capacitaciones.
                        </p>
                    </div>
                    <div className='col-12 col-lg-3 text-center justify-content-center mx-5 my-1'>
                        <img src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/higiene-seguridad-app/Horario.png?raw=true"
                            className='img-horario'/>
                        <h4 className='lic-hys my-3'>HORARIOS DE ATENCION</h4>
                        <p className='text-center fs-4 display-4'>Lunes a Viernes</p>
                        <p className='text-center h3 text-success'>8:00 - 19:00</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacto