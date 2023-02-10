import React, { useState } from 'react';
import Home from './Home';
import bg from "../assets/images/bg.jpg"
import Navigation from './Navigation';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact';
import Resume from './Resume';

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home handlePageChange={handlePageChange}/>;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
             <div style={{backgroundImage: `${currentPage === "Home" ? "url("+bg+")" : ""}`}} className={` ${currentPage === "Home" ? "bg-center bg-cover bg-no-repeat" : "bg-black"} h-screen w-full flex flex-col`}>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                { renderPage() }
                
             </div>
             <Footer />
        </>
    );
}