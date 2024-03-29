import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Flags } from './Flags'
import { useSelector } from "react-redux"

const Navbar = () => {
    const { t } = useTranslation();
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const router = useRouter()

    const langState = useSelector((state) => state.lang.lang);

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => window.scrollY >= 90 ? setShadow(true) : setShadow(false);
        window.addEventListener('scroll', handleShadow)
    }, [])

    return (
        <div style={{ backgroundColor: `${navBg}` }}
             className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300' : 'fixed w-full h-20 z-[100]'}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <a>
                    <Image className="cursor-pointer" src="/assets/Logo_MK.png" alt='/' width="125" height="50" />
                    </a>
                </Link>
                <div className="md:hidden">{langState === 'gb' ? <Flags country={'gb'} /> : <Flags country={'fr'} />}</div>
                <div>
                    <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">{t("navbar_home")}</li>
                        </Link>
                        <Link href="/#about">
                            <li className="ml-10 text-sm uppercase hover:border-b">{t("navbar_about")}</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-sm uppercase hover:border-b">{t("navbar_skills")}</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-10 text-sm uppercase hover:border-b">{t("navbar_projects")}</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                        <li className="ml-10 flex flex-col">{langState === 'gb' ? <Flags country={'gb'} /> : <Flags country={'fr'} />}
                        </li>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ""}>
                <div
                    className={nav
                        ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                        : "fixed left-[-130%] top-0 p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href='/'>
                                <a>
                                <Image className="cursor-pointer" onClick={() => setNav(false)} src="/assets/Logo_MK.png" alt='/' width="87"
                                       height="35" />
                                </a>
                            </Link>
                            <div onClick={handleNav}
                                 className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">
                                {t("navbar_mobile_title")}
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">{t("navbar_home")}</li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">{t("navbar_about")}</li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">{t("navbar_skills")}</li>
                            </Link>
                            <Link href="/#projects">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">{t("navbar_projects")}</li>
                            </Link>
                            <Link href="/#contact">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">{t("navbar_mobile_connect")}</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <Link href="https://www.linkedin.com/in/kevin-mas-480678232/">
                                    <a target="_blank">
                                        <div
                                            className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                </Link>
                                <Link href="https://github.com/MkWebD">
                                    <a target="_blank">
                                        <div
                                            className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                            <FaGithub />
                                        </div>
                                    </a>
                                </Link>
                                <a href="mailto:maskevin.w@gmail.com">
                                    <div
                                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;