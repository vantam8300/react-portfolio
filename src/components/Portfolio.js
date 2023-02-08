import React, { useState } from 'react';
import Home from './Home';
import bg from "../assets/images/bg.jpg"
import Navigation from './Navigation';

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Projects') {
            return;
        }
        if (currentPage === 'Contact') {
            return;
        }
        if (currentPage === 'Resume') {
            return;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
             <div style={{backgroundImage: `url(${bg})`}} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col   '>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                { renderPage() }

             </div>
            
        </>
    );
}