import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux"

const ProjectItem = ({ title, backgroundImg, projectUrl, mainTechnos }) => {
    const langState = useSelector((state) => state.lang.lang);
    return (
        <div
            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} alt="/" />
            <div
                className="hidden group-hover:block w-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
                <p className="pb-2 pt-2 text-white text-center">{mainTechnos}</p>
                <Link href={projectUrl}>
                    <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">{langState === 'gb' ? "More Info" : "Voir Plus"}</p>
                </Link>
            </div>
        </div>
    );
};

export default ProjectItem;