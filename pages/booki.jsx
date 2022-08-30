import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import bookiImg from '../public/assets/projects/booki.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import { useSelector } from "react-redux"

const Booki = () => {
    const langState = useSelector((state) => state.lang.lang);
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10"/>
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={bookiImg}
                    alt='/'
                />
                <div
                    className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">{langState === 'gb' ? 'Holiday reservation Site' : 'Site de réservation de vacances'}</h2>
                    <h3>HTML 5 / CSS 3</h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>{langState === 'gb' ? 'Project' : 'Projet'}</p>
                    <h2>{langState === 'gb' ? 'Overview' : 'Aperçu'}</h2>
                    <p>{langState === 'gb' ? "This app was built using HTML 5 & CSS 3 only. This is an integration from a design which was given. All the app is fully responsive and has different designs on mobile, tablet and desktop. It includes three sections: filters, hostels and activities. Both hostels and activities are displayed as cards." : "Ce site a été codé en utilisant HTML 5 & CSS 3 seulement. C'est une intégration issue d'un design qui était donné. Toute l'application est responsive, les designs s'adaptent en fonction du support (tablette, smartphone et desktop). Elle comporte trois sections: filtres, hôtels et activités. Les hôtels et les activités sont affichées sous la forme de cartes."}
                    </p>
                    <Link href="https://mkwebd-booki.netlify.app/">
                        <a target="_blank">
                            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
                        </a>
                    </Link>
                    <Link href="https://github.com/MkWebD/Booki">
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
                                <RiRadioButtonFill className="pr-1"/> HTML 5
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/> CSS 3
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/> Github
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

export default Booki;