import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import Body from './components/Body';

/**
 * This is the main application file.
 * This file is used to render the main application.
 * We will have three major portions. 
 * 1- Header
 *  1.1- Logo
 *  1.2- Navigation
 *  1.3- Search
 * 2- Main Content
 *  2.1- Sidebar
 *  2.2- RestaurantsContainer
 *      2.2.1- RestaurantCard
 * 3- Footer
 *  3.1- CopyRight
 *  3.2- Links (Like social media links)
 *  3.3- Contact Us
 */


/// ********* Body Objects ********* ///
// Search Component
const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
        </div>
    )
}









// AppLayout Component
const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

// Footer
const Footer = () => {
    return (
        <div></div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);