"use client";
import Link from "next/link";

import { PiCompassRose } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Moon, Sun } from "lucide-react";
import { HiOutlineX } from "react-icons/hi";

import { Button } from "@/components/ui/button";

import { useTheme } from "next-themes";
import { useState, useContext } from "react";
import { ThemeContext } from "./theme-provider";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { setTheme } = useTheme()
    // const { modeContext, setModeContext } = useContext(ThemeContext);
    const { modeContext, setModeContext } = useContext(ThemeContext)

    return (
        // <div className="border-[1px] fixed w-full flex-col items-center px-[5%] text-red-600">
        <div className="absolute w-full flex justify-between md:bg-transparent md:flex-row md:justify-between md:items-center md:px-[5%] md:py-4">
            <div id="nav-logo" className="text-white flex justify-center md:mb-0 ml-[10%] md:ml-0">
                <Link href="/" className="flex gap-2 items-center ">
                    {/* <img src="/assets/Vector.png" alt="" className="w-[29px] h-[24px]" /> */}
                    {/* <h1 className="">&lt;MK /&gt;</h1> */}
                    <PiCompassRose size={32} />
                    <h1>KAHFI</h1>
                </Link>
            </div>

            <ul className="hidden md:flex justify-center gap-[16px] text-white">
                <li className="m-auto"><Link href="#">Home</Link></li>
                <li className="m-auto"><Link href="#about">Abouts</Link></li>
                <li className="m-auto"><Link href="#skill">Skill</Link></li>
                <li className="m-auto"><Link href="#portofolio">Portofolio</Link></li>
                <li className="m-auto"><Link href="#experience">Experience</Link></li>
                <li className="m-auto"><Link href="#testimonials">Testimonials</Link></li>
                <li className="m-auto"><Link href="#contact">Contact</Link></li>
            </ul>
            <Button variant="outline" className="collapse md:visible cursor-pointer bg-transparent" size="icon" onClick={() => { setModeContext(modeContext === "light" ? "dark" : "light"); document.body.classList.toggle("dark"); }}>
                {
                    modeContext === "dark" ? <Sun size={24} color="white" /> : <Moon size={24} color="white" />
                }
            </Button>

            <button onClick={() => setIsOpen(true)} className="md:hidden mr-[10%] py-3 text-white">
                <GiHamburgerMenu size={24} />
            </button>

            <div className={`dark:bg-black bg-white fixed h-full w-full shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center p-4 border-b">
                    {/* <span className="text-xl font-bold">{"<SS />"}</span> */}
                    <PiCompassRose size={32} />
                    <h1>KAHFI</h1>
                    <button onClick={() => setIsOpen(false)}>
                        <HiOutlineX size={24} />
                    </button>
                </div>

                <div className="flex flex-col gap-4 p-4 text-gray-800 dark:text-white">
                    <Link href="#" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="#about" onClick={() => setIsOpen(false)}>Abouts</Link>
                    <Link href="#skill" onClick={() => setIsOpen(false)}>Skill</Link>
                    <Link href="#portofolio" onClick={() => setIsOpen(false)}>Portofolio</Link>
                    <Link href="#experience" onClick={() => setIsOpen(false)}>Experience</Link>
                    <Link href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
                    <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>

                <Button variant="ghost" className="cursor-pointer" size="icon" onClick={() => { setModeContext(modeContext === "light" ? "dark" : "light"); document.body.classList.toggle("dark"); }}>
                    {
                        modeContext === "dark" ? <Sun size={24} color="white" /> : <Moon size={24} color="black" />
                    }
                </Button>

                {/* <Button className="w-full" onClick={() => setTheme("dark")}>
                    Dark
                </Button>
                <Button className="w-full" onClick={() => setTheme("light")}>
                    Light
                </Button> */}
            </div>
        </div>
    );
}

export default Navbar;