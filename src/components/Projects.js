import React from "react";
import microtransaction from '../assets/images/microtransaction.PNG'
import chatGPT from '../assets/images/chatGPT2.PNG'
import realTimeChat from '../assets/images/realTimeChat.PNG'
import projectTracker from '../assets/images/projectTracker.PNG'
import jate from '../assets/images/jate.PNG'
import bookSearchEngine from '../assets/images/bookSearchEngine.PNG'
import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {

    const projects = [
        {
            id: 1,
            title: "Micro-trans-action",
            description: "HTML/CSS/JavScript/Jquery/Tailwind",
            githubPage: "https://github.com/vantam8300/Micro-Trans-action",
            deployPage: "https://vantam8300.github.io/Micro-Trans-action/",
            img: microtransaction,
        },
        {
            id: 2,
            title: "ChatGPT2",
            description: "OpenAI API/Express/React",
            githubPage: "https://github.com/vantam8300/chatGPT2",
            deployPage: "https://van-chatgpt2.herokuapp.com/",
            img: chatGPT,
        },
        {
            id: 3,
            title: "real-time-chat",
            description: "Socket.io/Express/Javascript",
            githubPage: "https://github.com/vantam8300/real-time-chat",
            deployPage: "https://van-real-time-chat.herokuapp.com/",
            img: realTimeChat,
        },
        {
            id: 4,
            title: "Project Tracker",
            description: "MERN/GraphQL",
            githubPage: "https://github.com/D0KD0/Project_tracker",
            deployPage: "https://project--tracker.herokuapp.com/",
            img: projectTracker,
        },
        {
            id: 5,
            title: "Text-Editor",
            description: "Express/Webpack/Babel/IndexedDB",
            githubPage: "https://github.com/vantam8300/text-editor",
            deployPage: "https://van-jate.herokuapp.com/",
            img: jate,
        },
        {
            id: 6,
            title: "Book Search Engine",
            description: "MERN/Rest API/Apollo",
            githubPage: "https://github.com/vantam8300/book-search-engine",
            deployPage: "https://van-book-search-engine.herokuapp.com/",
            img: bookSearchEngine,
        },
        
    ];

    return (
        <>
            <div className="projects bg-black px-16 lg:p-4 text-white">
                <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
                    <button
                        className={`font-bold text-[30px] border-2 border-black rounded-[6px] p-[4px] bg-[linear-gradient(90deg,#b004b0,#38097a)]`}
                    >
                        Projects
                    </button>
                </div>

                <div className="grid grid-cols-3 p-10 gap-8 lg:grid-cols-2 tl:grid-cols-1 ">
                    {projects.map((item, i) => <ProjectCard key={i} item={item} />)
                        }
                </div>
            </div>
        </>
    );
}

export default Projects;