'use client'
import Link from "next/link"
import MainButton from "./mainButton"
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all";


gsap.registerPlugin(ScrollTrigger, SplitText);


function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(false)

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: '#navbar',
                start: 'bottom top',
                toggleActions: 'play none none reverse',
            }
        })

        navTween.to('#navbar', { 
            width: '70%', 
            duration: 1,
            ease: 'power1.inOut',
        })

        navTween.fromTo('#navbar > nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#ffffff40',
            backdropFilter: 'blur(10px)',
            borderRadius: '25px',
            duration: 1,
            ease: 'power1.inOut',
        })

        navTween.fromTo('#navbar > div', { backgroundColor: 'transparent' }, {
            backgroundColor: '#ffffff40',
            backdropFilter: 'blur(10px)',
            borderRadius: '25px',
            duration: 1,
            ease: 'power1.inOut',
        })
    }, [])

    return (
        <header className='p-5 flex justify-center fixed w-full'>
            <div id="navbar" className="flex flex-col gap-4 w-5xl max-w-5xl">
                <nav className="flex items-center justify-between md:pl-6 md:pr-2 py-2 px-6">
                    <Link href={'#home'} className="pointer">
                        <div className="flex items-start justify-center gap-1">
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path d="M 23.421 8.825 C 22.298 8.62 21.588 8.807 20.62 9.452 C 19.544 10.165 18.922 11.222 18.481 12.389 C 18.107 13.379 17.961 14.421 17.893 15.475 C 17.849 16.061 17.782 16.663 17.66 17.235 C 17.558 17.691 17.239 17.889 16.771 17.837 C 16.615 17.81 16.454 17.767 16.299 17.712 C 15.188 17.273 14.452 16.398 13.853 15.397 C 13.181 14.216 12.686 12.944 12.382 11.605 C 11.906 9.608 11.475 7.606 11.094 5.588 C 10.89 4.487 10.622 3.663 10.209 2.819 C 9.892 2.167 9.462 1.54 8.9 0.843 C 8.47 0.4 8.288 0.133 7.707 -0.504 C 5.989 0.377 4.895 1.52 4.369 2.132 C 3.716 2.902 2.861 4.131 2.323 5.799 C 1.571 8.103 1.802 10.083 1.971 11.038 C 2.14 11.993 2.59 13.722 3.85 15.473 C 4.388 16.215 5.815 17.998 8.379 19.087 C 10.379 19.93 12.167 19.98 13.186 19.93 C 14.837 19.835 16.125 19.39 16.843 19.08 C 18.201 18.503 19.2 17.748 19.853 17.162 C 20.862 16.256 21.549 15.291 22.001 14.499 C 22.783 13.117 23.097 11.868 23.234 11.134 C 23.337 10.65 23.449 9.832 23.421 8.825 Z" fill="rgb(26,22,21)"></path></svg>
                            <p className="text-[22px]/[1.2em] text-neutral-30 font-bold">Dreelio</p>
                        </div>
                    </Link>

                    <div className="hidden md:block">
                        <ul className="flex gap-2 text-body-large text-neutral-30">
                            <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                                <Link href={'#'}>
                                    Features
                                </Link>
                            </li>
                            <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                                <Link href={'#'}>
                                    Benefits
                                </Link>
                            </li>
                            <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                                <Link href={'#'}>
                                    Pricing
                                </Link>
                            </li>
                            <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                                <Link href={'#'}>
                                    Blog
                                </Link>
                            </li>
                            <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                                <Link href={'#'}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <MainButton text="Try Dreelio free" />
                    </div>

                    <button className='md:hidden' onClick={() => setOpenDropdown(!openDropdown)}>
                        <Menu />
                    </button>
                </nav>
                <div className={`${!openDropdown && 'hidden'} p-6 md:hidden text-center mt-2 w-full `}>
                    <ul className="flex flex-col gap-2 text-body-large text-neutral-30 pb-6">
                        <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                            <Link href={'#'}>
                                Features
                            </Link>
                        </li>
                        <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                            <Link href={'#'}>
                                Benefits
                            </Link>
                        </li>
                        <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                            <Link href={'#'}>
                                Pricing
                            </Link>
                        </li>
                        <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                            <Link href={'#'}>
                                Blog
                            </Link>
                        </li>
                        <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                            <Link href={'#'}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <MainButton className="w-full" text="Try Dreelio free" />
                </div>
            </div>
        </header>
    )
}

export default Navbar
