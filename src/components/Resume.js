import React from 'react'
import bg from "../assets/images/banner-bg.png"
import resumeFile from "../assets/files/ChauVanTam_CV.pdf"

function Resume() {

    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }} className="wrapper h-full bg-no-repeat bg-center bg-cover px-16 lg:p-4 text-white">
                <div className="flex justify-center items-center gap-4 my-12">
                    <a href={resumeFile} download className={`font-bold text-[30px] border-2 border-black rounded-[6px] p-[4px] bg-[linear-gradient(90deg,#b004b0,#38097a)]`} >
                        Download My Resume
                    </a>
                </div>

                <div className="p-[20px] flex flex-row justify-between">
                    <div >
                        <h2 className="font-bold text-[35px] pb-[30px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >Front-End</h2>
                        <ul className="list-disc list-inside text-[20px] leading-loose">
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                JQuery
                            </li>
                            <li>
                                React.js
                            </li>
                            <li>
                                Framework (Bootstrap, Tailwind)
                            </li>
                            <li>
                                UI/UX Design
                            </li>
                            <li>
                                Responsive Web Design
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-[35px] pb-[30px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >Backs-End</h2>
                        <ul className="list-disc list-inside text-[20px] leading-loose">
                            <li>
                                Node.js
                            </li>
                            <li>
                                Express.js
                            </li>
                            <li>
                                MySQL, Sequelize
                            </li>
                            <li>
                                NoSQL (MongoDB, Mongoose)
                            </li>
                            <li>
                                API's (third-party, RESTful, server-side, GraphQL)
                            </li>
                            <li>
                                Java
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Resume;