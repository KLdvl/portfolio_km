import React from 'react';
import Image from 'next/image'
import { useSelector } from "react-redux"

function Skills() {
    const langState = useSelector((state) => state.lang.lang);
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#1b6dc1]">{langState === 'gb' ? "Skills" : "Compétences"}</p>
                <h2 className="py-4">{langState === 'gb' ? "What I can do ?" : "Les technologies que j'utilise"}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/html.png" width="64px" height="64px" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML 5</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/css.png" width="64px" height="64px" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS 3</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/js.png" width="64px" height="64px"
                                       alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/react.png" width="64px" height="64px" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/nextjs.png" width="64px" height="64px" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Next.js</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/vuejs.png" width="64px" height="64px" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>VueJs 3</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/nodejs.png" width="64px" height="64px" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Node.js</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/mongodb.png" width="64px" height="64px" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Mongo DB</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/tailwind.png" width="64px" height="64px" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/bootstrap.png" width="64px" height="64px" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Bootstrap</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/github.png" width="64px" height="64px" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;