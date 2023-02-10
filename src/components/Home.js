import React from 'react'
import logo from "../assets/images/astronout.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "../styles.css"



export default function Home({handlePageChange}) {
    return (
        <>
                <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
                    <div className="content lg:text-center">
                        <div className="btn py-3">
                            <button className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl'>Welcome to my Portfolio</button>
                        </div>
                        <h1 className='text-white text-5xl font-bold'>Hi! I'm Van Tam</h1>
                        <p className='text-white py-4 max-w-lg '>Lorem ipsum dolor sit amet consectetur  adipisicing elit. In qui impedit  sunt, est molestiae ullam. Saepe voluptatum ducimus adipisci pariatur. adipisicing elit.  In qui impedit ipsum dolor sit amet consectetur</p>
                        <button className='  text-white text-2xl' onClick={() => handlePageChange('Contact')}>Let's Connect <FontAwesomeIcon icon={faArrowRight} /> </button>
                    </div>
                    <div className="image banner-astronout lg:hidden absolute w-[400px] right-28">
                        <img className='w-96' src={logo} alt="" />
                    </div>
                </div>
        </>
    )
}
