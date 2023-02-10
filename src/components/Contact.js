import React from "react";
import contactImg from "../assets/images/contact-img.svg";

function Contact() {
    return (
        <>
            <div className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full">
                <div className="wrapper flex justify-center  py-16 gap-52 lg:py-12">
                    <div className="imgbox lg:hidden">
                        <img className="w-[550px] h-full" src={contactImg} alt="" />
                    </div>
                    <div className="content-box">
                        <h1 className="text-white font-bold text-4xl py-5">Get In Touch</h1>
                            <div className="py-5 text-white font-bold text-xl">
                                <span>Name: Van Tam Chau</span>
                                
                            </div>
                            <div className="py-5 text-white font-bold text-xl  ">
                                <span>Email: vantam8300@gmail.com</span>
                            </div>
                            <div className="py-5 text-white font-bold text-xl  ">
                                <span>Phone: (669) 350-4683</span>
                            </div>
                    </div>


                </div>

            </div>
        </>
    );
}

export default Contact;
