import React from 'react';
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";
import Link from 'next/link'

const Contact = () => {

    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {};
        Array.from(e.currentTarget.elements).forEach(field => {
            if(!field.name) return;
            formData[field.name] = field.value;
        });

        await fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(formData)
        })
    }

    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#1b6dc1]">Contact</p>
                <h2 className="py-4">Get in touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* left */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <div>
                                <img className="rounded-xl hover:scale-105 ease-in duration-300"
                                     src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"/>
                            </div>
                            <div>
                                <h2 className="py-2">Kevin - MKWebDev</h2>
                                <p>Full-Stack developer</p>
                                <p className="py-4">I'm available for freelance or full-time positions. Contact me and
                                    let's work together.</p>
                            </div>
                            <div>
                                <p className="uppercase pt-8">Connect with me</p>
                                <div className="flex items-center justify-between py-4">
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
                    {/* right */}

                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form method="post" onSubmit={handleOnSubmit}>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Name</label>
                                        <input id="name" name='name' className="border-2 rounded-lg p-3 flex border-gray-300" type="text"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Phone Number</label>
                                        <input id="phone" name='phone' className="border-2 rounded-lg p-3 flex border-gray-300" type="text"/>
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Email</label>
                                    <input id="email" name='email' className="border-2 rounded-lg p-3 flex border-gray-300" type="email"/>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Subject</label>
                                    <input id="subject" name='subject' className="border-2 rounded-lg p-3 flex border-gray-300" type="text"/>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Message</label>
                                    <textarea id="message" name='message' className="border-2 rounded-lg p-3 border-gray-300" rows="10"/>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div
                            className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp className="text-[#1b6dc1]" size={30}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;