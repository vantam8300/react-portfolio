import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';

function Footer() {
    return (
        <>
            <div className="footer bg-black">
                <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
                    <h1 className='text-3xl'>Van Tam</h1>
                    <div className='flex gap-4 cursor-pointer '>
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
                </div>
            </div>
        </>
    )
}

export default Footer