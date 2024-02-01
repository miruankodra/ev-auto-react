import React from 'react';
import { useState } from "react";
import {close, evauto, logo, menu} from '../assets';
import {aboutLinks, navLinks} from '../constants'


const AboutDropdown = () => {


};

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [dropdown, toggleDropdown] = useState(false)


    return (
        <nav className="w-full flex py-6 justify-between items-center navbar z-[5]">
            {/* <img src={logo} alt="" /> */}
            <img src={evauto} alt="My logo" className="w-[150px] h-[50px]"/>

            <ul className="list-none sm:flex hidden justify-end flex-1">
                {navLinks.map((nav, index) => (
                        <li key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                            onMouseEnter={() => {toggleDropdown(true)}}
                            >
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                            {nav.id === 'about' && dropdown ?
                                <div
                                    className={`flex flex-col justify-center items-center p-6 bg-black-gradient absolute top-15 right-20 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[6]`}>
                                    <img
                                        src={close}
                                        alt="close"
                                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                                        onClick={() => toggleDropdown(false)}/>
                                    <ul className="list-none flex flex-col items-center justify-end flex-1 mt-5">
                                        {aboutLinks.map((nav, index) => (
                                            <li key={nav.id}
                                                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                                                <a href={nav.link === 'about' ? `#${nav.link}` : nav.link} onClick={() => toggleDropdown(false)} target={nav.link !== 'about' ? '_blank' : null}>
                                                    {nav.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                : null}
                        </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle((prev) => !prev)}/>

                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[6]`}>

                    <ul className="list-none flex flex-col items-center justify-end flex-1">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'}`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                     </ul>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;