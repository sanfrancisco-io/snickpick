import React from 'react';

import logo from '../../assets/svg/logo.svg';
import burger from '../../assets/svg/menu.svg';

import './style.scss';

const Navbar = () => {
  const navigationLinks = [
    'Product',
    'Use Case',
    'Learn',
    'Comparison',
    'Pricing',
    'Contact Sales',
  ];
  const selectLanguages = ['EN', 'RU'];

  return (
    <div className='navbar_wrapper'>
      <div className='navbar_logo'>
        <a href='/'>
          <img
            className='navbar_logo__child'
            src={logo}
            width={32}
            height={32}
            alt='logo'
          />
          <span>SnickPick</span>
        </a>
      </div>
      <div className='navbar_navigation'>
        <ul className='navbar_navigation__parent'>
          {navigationLinks.map((item) => (
            <a
              className='navbar_navigation__child'
              key={item}
              href={`#${item}`}
            >
              <li>{item}</li>
            </a>
          ))}
        </ul>
      </div>
      <div className='navbar_auth'>
        <div>
          <button className='navbar_auth__button'>Sign up</button>
        </div>
        <div>
          <select className='navbar_auth__select_lang'>
            {selectLanguages.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='navbar_navigation_burger'>
        <img src={burger} alt='burger-menu' />
      </div>
    </div>
  );
};

export default Navbar;
