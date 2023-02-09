import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import React, { useState } from 'react';
import "../styles.css"

export default function Navigation({ currentPage, handlePageChange }) {
    const [durum, setDurum] = useState(true)

    return (
        <>

            <div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:bg-black lg:px-6  w-full">
                <h1 className='text-4xl  font-bold '>Van Tam</h1>

                <nav className={` flex justify-center items-center gap-x-10 ${durum && "lg:hidden"} lg:fixed lg:top-0 -z-20  lg:flex-col lg:bg-black lg:w-full lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}  >
                    <ul className=' flex gap-10 text-3xl mr-4 lg:flex-col lg:gap-6 '>
                        <li className='list-item'><button onClick={() => handlePageChange('Home')}>Home</button></li>
                        <li className='list-item'><button onClick={() => handlePageChange('Projects')}>Projects</button></li>
                        <li className='list-item'><button onClick={() => handlePageChange('Resume')}>Resume</button></li>
                    </ul>
                    <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
                        <a href='https://www.linkedin.com/in/van-tam-chau-80062323b/' rel="noreferrer" target='_blank'>
                            <i className="border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </i>
                        </a>
                        <a href='https://github.com/vantam8300' target='_blank' rel="noreferrer">
                            <i className=" border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black">
                                <FontAwesomeIcon icon={faGithub} />
                            </i>
                        </a>
                    </div>
                    <div className="btn">
                        <button className='border-[1px] border-white border-solid py-2 px-4 hover:bg-white hover:text-black font-bold'>Let's Connect</button>
                    </div>
                </nav>
                <i onClick={e => setDurum(!durum)} className="hidden lg:block text-2xl cursor-pointer" ><FontAwesomeIcon icon={faBars} /></i>
            </div>

        </>
    );
}