import './Header.css';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';

import React from 'react'

const Header = () => {
  return (
    <div classname='holder'>
        <header classname='header'>
          <Navbar />
          <div className='header-content flex flex-c text-center text-white'>
            <h2 className='header-title text-capitalize'>find your book of choice.
            </h2><br />
            <p className='header-text fs-18 fw-3'>Random description here. Random description here. Random description here. Random description here. Random description here. Random description here. Random description here. Random description here. Random description here. Random description here. Random description here. Random description here. Random description here. Random description here. Random description here.</p>
            <SearchForm />
          </div>
        </header>
    </div>
  )
}

export default Header;