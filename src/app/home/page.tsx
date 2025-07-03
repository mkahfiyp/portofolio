"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineX } from "react-icons/hi";
import { PiCompassRose } from "react-icons/pi";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-[1440px]">
            <div id="navbar" className="w-full sticky top-0 flex  justify-between px-[10%] py-4 bg-white">
                <div id="nav-logo">
                    <Link href="/" className="flex gap-2 items-center ">
                        {/* <img src="/assets/Vector.png" alt="" className="w-[29px] h-[24px]" /> */}
                        {/* <h1 className="">&lt;MK /&gt;</h1> */}
                        <PiCompassRose size={32} />
                        <h1>KAHFI</h1>
                    </Link>
                </div>
                <div id="nav-link" className="hidden">
                    <ul className="flex gap-4">
                        <li className="m-auto"><Link href="#">Home</Link></li>
                        <li className="m-auto"><Link href="#about">Abouts</Link></li>
                        <li className="m-auto"><Link href="#skill">Skill</Link></li>
                        <li className="m-auto"><Link href="#portofolio">Portofolio</Link></li>
                        <li className="m-auto"><Link href="#experience">Experience</Link></li>
                        <li className="m-auto"><Link href="#testimonials">Testimonials</Link></li>
                        <li className="m-auto"><Link href="#contact">Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div id="header-img" className="bg-[url('/assets/bg-image-1.png')] w-full h-[694px] bg-no-repeat bg-cover bg-center">
                {/* <img src="/assets/bg-image-1.png" alt="" /> */}
            </div>

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

                {/* <Button variant="ghost" className="cursor-pointer" size="icon" onClick={() => { setModeContext(modeContext === "light" ? "dark" : "light"); document.body.classList.toggle("dark"); }}>
                    {
                        modeContext === "dark" ? <Sun size={24} color="white" /> : <Moon size={24} color="black" />
                    }
                </Button> */}
            </div>
        </div>
    );
}