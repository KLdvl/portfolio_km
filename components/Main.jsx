import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from 'next/link'
import { useSelector } from "react-redux"

const Main = () => {
    const { t, i18n } = useTranslation();
    const langState = useSelector((state) => state.lang.lang);
    return (
        <div id="home" className="w-full h-screen text-center">       
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
                <div className="mt-[40%] md:mt-[0]">
                    <p className="uppercase text-sm tracking-widest text-gray-600">{langState === 'gb' ? "Let's build your website or application together" : "Construisons ensemble votre site web ou application web"}</p>
                    <h1 className="py-4 text-gray-700">{langState === 'gb' ? "Hello, I'm" : "Bonjour, je suis"} <span className="text-[#1b6dc1]">Kevin</span></h1>
                    <h2 className="py-2 text-gray-700">{langState === 'gb' ? "A Full-Stack Web Developer" : "Développeur web Full-Stack"}</h2>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">{langState === 'gb' ? "I'm a full-stack web developer specializing in building great digital experiences. I'm focused on building responsive web applications with frameworks and libraries." : "Je suis un développeur web full-stack spécialisé dans la création d'expériences digitales de qualité. Je construis pour vous des applications web adaptées à tous supports avec des frameworks et des librairies spécialisés"}</p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <Link href="https://www.linkedin.com/in/kevin-mas-480678232/">
                            <a target="_blank">
                                <div
                                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div>
                            </a>
                        </Link>
                        <Link href="https://github.com/MkWebD">
                            <a target="_blank">
                                <div
                                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaGithub />
                                </div>
                            </a>
                        </Link>
                        <a href="mailto:maskevin.w@gmail.com">
                            <div
                                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <AiOutlineMail />
                            </div>
                        </a>
                    </div>
                    <div>{t("test")}</div>
                </div>
            </div>

        </div>
    );
};

export default Main;
