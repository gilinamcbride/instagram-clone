import instagramLogo from '../assets/instagram.png';
import React from 'react';

const Nav = () => {
  return (
    <nav>
      <button className='logo'>
        <img src={instagramLogo} alt='logo'></img>
      </button>
      <input type='text' className='search' placeholder='Search' />
      <span className='nav-links'>
        <button>
          <i className='fas fa-home' />
        </button>
        <button>
          <i className='fas fa-comment-alt' />
        </button>
        <button>
          <i className='fas fa-compass' />
        </button>
        <button>
          <i className='fas fa-heart' />
        </button>
      </span>
    </nav>
  );
};

export default Nav;
