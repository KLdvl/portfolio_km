import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import groupomaniaImg from '../public/assets/projects/groupomania.jpg'
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
                    src={groupomaniaImg}
                    alt='/'
                />
                <div
                    className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">{langState === 'gb' ? 'Company social network app' : "Réseau social d'entreprise"}</h2>
                    <h3>Vue3 / Node.Js / Express.Js / MongoDB</h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>{langState === 'gb' ? 'Project' : 'Projet'}</p>
                    <h2>{langState === 'gb' ? 'Overview' : 'Aperçu'}</h2>
                    <p>{langState === 'gb' ? 'This app was entirely built from scratch. The backend part is written using NodeJs, Express and MongoDB. Everything is stored in the database in a secured way. The app respects the standards of OWASP. It is possible to sign up using email and password, log in. The rest of the API is a classic CRUD API, every user is able to create, update and delete a post. Each user can like / dislike any post, once per post. The first user created in the database will be an administrator who can moderate the social network (he can update and delete any post).' : `Cette application a été développée entièrement à partir de zéro. La partie backend utilise la technologie NodeJS, ExpressJs et MongoDB. Toutes les données sont stockées de façon sécurisée dans la base de données. L'application respecte les standards de l'OWASP. Il est possible de créer un compte en utilisant une adresse email et un mot de passe. Le reste de l'application est une application CRUD classique, chaque utilisateur enregistré peut créer, mettre à jour et supprimer des posts. Chaque utilisateur peut "liker" ou "disliker" n'importe quel post hormis ses propres posts, une fois par post. Le premier utilisateur à être créé sur la base de données aura un statut administrateur qui lui permettra de modérer le contenu du réseau social car il pourra modifier ou supprimer n'importe quel post existant.`}</p>
                    <Link href="https://mkwebd-groupomania.netlify.app/">
                        <a target="_blank">
                            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
                        </a>
                    </Link>
                    <Link href="https://github.com/MkWebD/Groupomania_back">
                        <a target="_blank">
                            <button className="px-8 py-2 mt-4 mr-8">Code Back-end</button>
                        </a>
                    </Link>
                    <Link href="https://github.com/MkWebD/Groupomania_front">
                        <a target="_blank">
                            <button className="px-8 py-2 mt-4">Code Front-end</button>
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
                                <RiRadioButtonFill className="pr-1" /> MongoDB
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Github
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> VueJs 3
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Vuetify 3
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> VueX
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