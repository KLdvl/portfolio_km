import React, { useRef } from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from 'next/link'
import emailjs from '@emailjs/browser';
import { useSelector } from "react-redux"
import Image from 'next/image'
import contactImg from '../public/assets/illustrations/contact.jpg'

const Contact = () => {
    const langState = useSelector((state) => state.lang.lang);

    const form = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mkwebd', 'template_contact_mkwebd', form.current, '2VbigwQU3Dir7hlbJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-20 w-full">
                <p className="text-xl tracking-widest uppercase text-[#1b6dc1]">Contact</p>
                <h2 className="py-4">{langState === 'gb' ? 'Get in touch' : 'Me contacter'}</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* left */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <div>
                                <Image className="rounded-xl hover:scale-105 ease-in duration-300"
                                     src={contactImg} alt='/' />
                            </div>
                            <div>
                                <h2 className="py-2">Kevin - MKWebDev</h2>
                                <p>{langState === 'gb' ? "Full-Stack developer" : "Développeur Full-Stack"}</p>
                                <p className="py-4">{langState === 'gb' ? "I'm available for freelance or full-time positions. Contact me and let's work together." : "Je suis disponible en tant que freelance ou à temps plein. Contactez moi et commençons à travailler ensembles."}</p>
                            </div>
                            <div>
                                <p className="uppercase pt-8">{langState === 'gb' ? "Connect with me" : "Se connecter à mon réseau"}</p>
                                <div className="flex items-center justify-between py-4">
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
                    {/* right */}

                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form ref={form} onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">{langState === 'gb' ? "Name" : "Nom"}</label>
                                        <input id="name" name='name' className="border-2 rounded-lg p-3 flex border-gray-300" type="text" required />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">{langState === 'gb' ? "Phone Number" : "Numéro de téléphone"}</label>
                                        <input id="phone" name='phone' className="border-2 rounded-lg p-3 flex border-gray-300" type="tel" required />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Email</label>
                                    <input id="email" name='email' className="border-2 rounded-lg p-3 flex border-gray-300" type="email" required />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">{langState === 'gb' ? "Subject" : "Sujet"}</label>
                                    <input id="subject" name='subject' className="border-2 rounded-lg p-3 flex border-gray-300" type="text" required />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Message</label>
                                    <textarea id="message" name='message' className="border-2 rounded-lg p-3 border-gray-300" rows="10" required />
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">{langState === 'gb' ? "Send Message" : "Envoyer votre message"}</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div
                            className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp className="text-[#1b6dc1]" size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;