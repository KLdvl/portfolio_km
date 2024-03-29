import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import ohmyfoodImg from '../public/assets/projects/ohmyfood.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import { useTranslation } from 'react-i18next';

const Crypto = () => {
    const { t } = useTranslation();
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/40 z-10 shadow-xl"/>
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={ohmyfoodImg}
                    alt='/'
                />
                <div
                    className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">{t("projects_ohmyfood_title")}</h2>
                    <h3>HTML5 / SASS</h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>{t("projects_title")}</p>
                    <h2>{t("projects_overview")}</h2>
                    <p>{t("projects_ohmyfood_description")}</p>
                    <Link href="https://mkwebd-ohmyfood.netlify.app/">
                        <a target="_blank">
                            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
                        </a>
                    </Link>
                    <Link href="https://github.com/MkWebD/Ohmyfood">
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
                                <RiRadioButtonFill className="pr-1"/> SASS
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/> Github
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">{t("projects_back")}</p>
                </Link>
            </div>
        </div>
    );
};

export default Crypto;