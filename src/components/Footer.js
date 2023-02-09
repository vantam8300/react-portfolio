import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';

function Footer() {
    return (
        <>
            <div className="footer ">
                <div className="px-12 text-white  font-bold py-6 tl:px-4 tl:py-4 ">
                    <div className='flex justify-center gap-4 cursor-pointer'>
                        <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10 " >
                            <i className="border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"><FontAwesomeIcon icon={faLinkedin} /></i>
                            <i className=" border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"><FontAwesomeIcon icon={faGithub} /></i>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer