import React, { useState } from "react";
import microtransaction from '../assets/images/microtransaction.PNG'

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
    const [durum, setDurum] = useState(1);

    const projects = [
        {
            id: 1,
            title: "Micro-trans-action",
            description: "Design & Development",
            img: microtransaction,
        },

    ];

    return (
        <>
            <div className="projects text-white bg-black h-full py-10">
                <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
                    <button
                        className={`font-bold text-[30px] border-2 border-black rounded-[6px] p-[4px] bg-[linear-gradient(90deg,#b004b0,#38097a)]`}
                    >
                        Projects
                    </button>
                </div>
                <p className="text-center  max-w-[1000px] lg:px-6 mx-auto text-white">
                    lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
                    cupiditate! Molestiae placeat architecto nihil obcaecati illum minima
                    incidunt dolores? Officia consectetur optio non totam cum eos soluta
                    ipsa et quod.
                </p>

                <div className="grid grid-cols-3 p-10 gap-8 lg:grid-cols-2 tl:grid-cols-1 ">
                    {durum === 1
                        ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
                        : null}
                </div>
                {durum === 2 ? (
                    <div
                        id="text2"
                        className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        atque porro quasi dolorum facere tempore maxime nemo quia nulla
                        blanditiis doloribus, dolore, voluptas aspernatur harum facilis
                        cumque magni soluta sapiente.
                    </div>
                ) : null}
                {durum === 3 ? (
                    <div
                        id="text1"
                        className="tab-pane  text-center text-white py-5   lg:p-5"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nisi.
                    </div>
                ) : null}
            </div>
        </>
    );
}

export default Projects;