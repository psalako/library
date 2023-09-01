import './Header.css';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';

import React from 'react'

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
          <Navbar />
          <div className='header-content flex flex-c text-center text-orange'>
            <h2 className='header-title text-capitalize'>Welcome to the library!
            </h2><br />
            <p className='header-text fs-18 fw-5'>"Maktaba" means library in Swahili. We encourage you to search to your heart's content. Our books are free to borrow as long as you bring them back. 😊</p>
            <SearchForm />
          </div>
        </header>
    </div>
  )
}

export default Header;