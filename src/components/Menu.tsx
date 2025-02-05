import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

interface MenuProps {
  className?: string;
  menuItems: { title: string, href: string, activeHash?: string }[];
  isMobile?: boolean;  // Determines if it's for mobile or desktop view
}

const Menu: React.FC<MenuProps> = ({ className = '', menuItems, isMobile = false }) => {
  const location = useLocation();
  const ulClss= clsx(
    className,
    !isMobile && `w-100`,
    isMobile && `mx-auto text-center align-items-center`,
    'nav nav-pills nav-flush flex-column flex-nowrap' // flex-column flex-row
  );
  return (
    <ul className={ulClss}>
      {menuItems.map((item, index) => {
        const navItemCls = clsx(
            isMobile && `py-2`,
            !isMobile && `my-0 px-2`,
            'nav-item'
        );
        const navLinkCls = (isActive:boolean)=>{
          const actv = isActive && (!item.activeHash || item.activeHash === location.hash.slice(1)) ;
          return clsx(
              !isMobile && `py-0`,
              actv && `active`,
              'nav-link px-2'
          );
        }
        return (
          <li key={index} className={navItemCls}>
              <NavLink
                  to={item.href}
                  className={({ isActive }) => navLinkCls(isActive)}>
                  {item.title}
              </NavLink>
          </li>
        )
      })}
    </ul>
  );
};

export default Menu;