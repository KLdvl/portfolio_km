import React from 'react';
import {AiOutlineMail} from "react-icons/ai";
import {FaLinkedinIn, FaGithub} from "react-icons/fa";
import Link from 'next/link'

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">Let's build your website or
                        application together</p>
                    <h1 className="py-4 text-gray-700">Hello, I'm <span className="text-[#1b6dc1]">Kevin</span></h1>
                    <h2 className="py-2 text-gray-700">A Full-Stack Web Developer</h2>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">I'm a full-stack web developer specializing in
                        building great digital experiences. I'm focused on building responsive web applications with
                        frameworks and libraries.</p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <Link href="https://www.linkedin.com/in/kevin-mas-480678232/">
                            <a target="_blank">
                                <div
                                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaLinkedinIn/>
                                </div>
                            </a>
                        </Link>
                        <Link href="https://github.com/MkWebD">
                            <a target="_blank">
                        <div
                            className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub/>
                        </div>
                            </a>
                        </Link>
                        <div
                            className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main;
