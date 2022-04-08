import React from 'react'
import { HiMail, HiOutlinePhone } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";

const Contacto = () => {
    return (
        <>
            <div className='container-fluid bg-white shadow'>
                <div className='row py-4'>
                    <div className='col-4 text-center'>
                        <h4 className='fs-4 text-center my-3'>CONTACTO</h4>
                        <p className='h5 my-5'><HiOutlinePhone className='h2 text-danger mx-1' />+54 9 351 398 5637</p>
                        <p className='h5'><HiMail className='h2 text-danger' /> vivianalozahys@gmail.com</p>
                        <p className='h5 my-5'><IoLocationSharp className='h2 text-danger' />  Ciudad de Córdoba Capital, Argentina</p>
                    </div>
                    <div className='col-4 text-center'>
                        <h4 className='fs-4 text-center my-3'>UBICACION</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13614.883648643206!2d-64.2037577!3d-31.4493494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a3cb3f12d643%3A0x769529d7f2889520!2sHigiene%20y%20Seguridad!5e0!3m2!1ses-419!2sar!4v1647899337333!5m2!1ses-419!2sar"
                            width="500"
                            height="300"
                            allowfullscreen=""
                            loading="lazy"
                            className='border rounded shadow'></iframe>
                    </div>
                    <div className='col-4 text-center justify-content-center'>
                        <h4 className='fs-4 my-3'>HORARIOS DE ATENCION</h4>
                        <p className='text-center fs-5 display-6 pt-5'>Lunes a Viernes</p>
                        <p className='text-center fs-5 display-6 text-success'>9:00 - 20:30</p>
                        <p className='text-center fs-5 display-6 pt-5'>Sabados</p>
                        <p className='text-center fs-5 display-6 text-success'>9:00 - 13:30</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacto