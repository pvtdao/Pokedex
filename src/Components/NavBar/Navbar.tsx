import React, { useState, useEffect } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { menu } from '../../data/menu';

function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const location = useLocation();

  function handleToggleMenu() {
    setToggle(!toggle);
  }
  useEffect(() => {
    setToggle(false);
  }, [location.pathname]);

  return (
    <nav className='flex items-center justify-between container mt-1 mx-auto lg:p-0 md:p-0 px-2'>
      <Link to='/'>
        <img
          alt='Logo'
          className='md:w-full lg:w-full w-[80%]'
          src={require('../../assets/image/logo.png')}
        />
      </Link>
      <ul className=''>
        <div className={`hidden lg:flex w-full justify-center items-center`}>
          {menu.map(({ name, url }, index) => {
            return (
              <li
                className='mt-4 lg:px-3 text-[1.2rem] md:text-[1rem]'
                key={index}
              >
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? '#7293d6' : '',
                    };
                  }}
                  to={`/${url}`}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </div>

        {toggle ? (
          <MdClose
            size={'30px'}
            className='cursor-pointer mt-4 relative z-30 lg:hidden'
            onClick={handleToggleMenu}
          />
        ) : (
          <HiOutlineMenu
            size={'30px'}
            className='cursor-pointer mt-4 relative z-30 lg:hidden'
            onClick={handleToggleMenu}
          />
        )}

        <div
          className={`fixed  ${
            toggle ? 'w-full' : 'w-0'
          } lg:hidden bg-white p-4 h-full -right-10 top-0 duration-300 overflow-x-hidden z-20`}
        >
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } flex-col h-full justify-center items-center`}
          >
            {menu.map(({ name, url }, index) => {
              return (
                <li className='menu-li' key={index}>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? '#7293d6' : '',
                      };
                    }}
                    to={`/${url}`}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
