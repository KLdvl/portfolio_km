import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link'
import Image from 'next/image'
import aboutImg from '../public/assets/illustrations/about.jpg'

function About() {
    const { t } = useTranslation();

    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-20">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#1b6dc1]">{t("about_title")}</p>
                    <h2 className="py-4">{t("about_who")}</h2>
                    <p className="py-2 text-gray-600">{t("about_who_description")}</p>
                    <p className="py-2 text-gray-600">{t("about_who_background")}</p>
                    <p className="py-2 text-gray-600">{t("about_who_background_passion")}</p>
                    <Link href='/#projects'>
                        <p className="py-2 text-gray-600 underline cursor-pointer">{t('about_projects')}</p>
                    </Link>
                </div>
                <div
                    className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image className="rounded-xl"
                           src={aboutImg}
                           alt="/"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
