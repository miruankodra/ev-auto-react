import React, { useState } from 'react';
import {aboutLinks} from "../constants/index.js";

const Dropdown = ( { type } ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-center cursor-pointer" onClick={toggleDropdown}>
                <span className="mr-2">{selectedOption ? selectedOption.label : 'About'}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${isOpen ? 'transform rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 12a1 1 0 01-.7-.29l-4-4a1 1 0 111.41-1.42L10 9.59l3.29-3.3a1 1 0 111.42 1.42l-4 4A1 1 0 0110 12z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            {isOpen && (
                <div
                    className={`min-h-[200px] min-w-[200px] flex flex-col justify-center items-center ${type === 'md' ? 'absolute top-15 bg-black-gradient' : ''} mx-4 rounded-xl dropdown z-[6]`}>

                    <ul className="list-none flex flex-col items-center justify-center flex-1 mt-5">
                        {aboutLinks.map((nav, index) => (
                            <>
                                <li key={nav.id}
                                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === 0 ? 'mb-0' : 'mb-5'}`}>
                                    <a href={nav.link === 'about' ? `#${nav.link}` : nav.link}
                                       onClick={() => handleOptionClick()}
                                       target={nav.link !== 'about' ? '_blank' : null}>
                                        {nav.title}
                                    </a>
                                </li>
                                {index === 0 ? <div
                                    className={`w-full h-0 border-t-2 border-dimWhite my-5`}></div> : null}
                            </>
                        ))}
                    </ul>
                </div>
            )}
        </div>

    );
};

export default Dropdown;
