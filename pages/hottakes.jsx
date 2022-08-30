import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import hottakesImg from '../public/assets/projects/hottakes.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import { useSelector } from "react-redux"

const Crypto = () => {
    const langState = useSelector((state) => state.lang.lang);
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/40 z-10 shadow-xl" />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={hottakesImg}
                    alt='/'
                />
                <div
                    className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">{langState === 'gb' ? 'Sauce sharing app' : 'Application de partage de sauces'}</h2>
                    <h3>Node.Js / Express.Js / MongoDB, Angular.Js</h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>{langState === 'gb' ? 'Project' : 'Projet'}</p>
                    <h2>{langState === 'gb' ? 'Overview' : 'Aperçu'}</h2>
                    <p>{langState === 'gb' ? "This app was build using node JS to create a fully operationnal CRUD api. The app is secured, it respects the standards of OWASP. You can sign up usign email and password and use them as well for log in. Every data stored in the database is secure. Every user can create, update and delete sauces. It's possible to like / dislike sauces too only one like / dislike is allowed per user per sauce." : `Cette application a été codée en utilisation Node Js pour réaliser une application CRUD. L'application est sécurisée et respecte les standards de l'OWASP en terme de sécurité. Vous pouvez créer un compte en utilisant une adresse email unique et un mot de passe. Toutes les données stockées dans la base de données sont stockées de manière sécurisée. Un utilisateur peut créer, mettre à jour, et supprimer des sauces. Il est possible de "liker" ou "disliker" une sauce une fois par utilisateur par sauce.`}</p>
                    <Link href="https://mkwebd-piiquante.netlify.app/">
                        <a target="_blank">
                            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
                        </a>
                    </Link>
                    <Link href="https://github.com/MkWebD/Piiquante_back">
                        <a target="_blank">
                            <button className="px-8 py-2 mt-4">Code</button>
                        </a>
                    </Link>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Node.Js
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Express.Js
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Github
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> MongoDB
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Angular.Js
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">{langState === 'gb' ? 'Back' : 'Retour'}</p>
                </Link>
            </div>
        </div>
    );
};

export default Crypto;