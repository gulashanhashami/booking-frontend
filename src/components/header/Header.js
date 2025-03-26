import React, { useEffect, useState } from "react";
import logoDark from "../../resources/images/logo-dark.svg";
import logoWhite from "../../resources/images/logo-white.svg";


export const Header = ()=>{
    const [header, setHeader] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY >50? setHeader(true) : setHeader(false);
        })
    }, []);

    return (
        <header className={`${header? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-500`}>
            <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
                <a href="">
                    {header? (<img className='w-[160px]' src={logoDark} />) : (<img className='w-[160px]' src={logoWhite} />)}
                </a>
                <nav className={`${header? 'text-primary' : 'text-white'} flex gap-x-2 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8 font-normal`}>
                    <a href="" className='hover:text-accent transition'>
                        Home
                        </a>
                        <a href="" className='hover:text-accent transition'>
                        Rooms
                        </a>
                        <a href="" className='hover:text-accent transition'>
                        Login
                        </a>
                        <a href="" className='hover:text-accent transition'>
                        Register
                        </a>
                        <a href="" className='hover:text-accent transition'>
                        Contact
                        </a>
                </nav>
            </div>
        </header>
    );
}