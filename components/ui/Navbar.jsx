import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="z-50 container absolute top-0 bg-[#050922] py-8 flex items-center justify-between text-[#F1F1F1]">
            <h1 className="uppercase font-semibold text-xl">
                My Portfolio <span>.</span>
            </h1>
            {/* Hamburger Menu for Mobile */}
            <button
                className="md:hidden block text-[#F1F1F1] focus:outline-none"
                onClick={toggleMenu}
            >
                {isMenuOpen ? "X" : "☰"}
                
            </button>
            {/* Navigation Links */}
            <ul
                className={`md:flex items-center gap-10 bg-[#050922] text-sm uppercase ${
                    isMenuOpen ? "block" : "hidden"
                } md:block absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[#050922] md:bg-transparent`}
            >
                <li className="cursor-pointer py-4 md:py-0 px-8 md:px-0">
                    Home
                </li>
                <li className="cursor-pointer py-4 md:py-0 px-8 md:px-0">
                    <a href="#projects">Projects</a>
                </li>
                <li className="cursor-pointer py-4 md:py-0 px-8 md:px-0">
                    <a href="#experiences">Experiences</a>
                </li>
                <li className="cursor-pointer py-4 md:py-0 px-8 md:px-0">
                    <a href="#services">Services</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
