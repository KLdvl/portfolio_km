import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from 'next/link'

const Main = () => {
    const { t } = useTranslation();
    return (
        <div id="home" className="w-full h-screen text-center">       
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
                <div className="mt-[40%] md:mt-[0]">
                    <p className="uppercase text-sm tracking-widest text-gray-600">{t("main_pre_title")}</p>
                    <h1 className="py-4 text-gray-700">{t("main_title_presentation")} <span className="text-[#1b6dc1]">Kevin</span></h1>
                    <h2 className="py-2 text-gray-700">{t("main_title_subtitle")}</h2>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">{t("main_title_description")}</p>
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
                </div>
            </div>

        </div>
    );
};

export default Main;
