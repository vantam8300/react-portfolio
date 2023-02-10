import React from 'react'
import bg from "../assets/images/banner-bg.png"
import resumeFile from "../assets/files/ChauVanTam_CV.pdf"

function Resume() {

    return (
        <>
            <div style={{backgroundImage: `url(${bg})`}} className="wrapper h-full bg-no-repeat bg-center bg-cover px-16 lg:p-4 text-white">
                <div className="flex justify-center items-center gap-4 my-12">
                    <a href={resumeFile} download className={`font-bold text-[30px] border-2 border-black rounded-[6px] p-[4px] bg-[linear-gradient(90deg,#b004b0,#38097a)]`} >
                        Download My Resume
                    </a>
                </div>
                
                <div className="p-[20px] flex flex-row justify-between items-center">
                    <div>
                        <h2 className={`font-bold text-[30px] `} >Front-End</h2>
                    </div>
                    <div>
                        <h2 className={`font-bold text-[30px] `} >Back-End</h2>
                    </div>
                    
                </div>

            </div>
        </>
    );
}

export default Resume;