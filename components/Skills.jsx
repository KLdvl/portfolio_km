import React from 'react';
import { useSelector } from "react-redux"
import SkillItem from './SkillItem';
import skillsArray from '../store/skills'

function Skills() {
    const langState = useSelector((state) => state.lang.lang);
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#1b6dc1]">{langState === 'gb' ? "Skills" : "Compétences"}</p>
                <h2 className="py-4">{langState === 'gb' ? "What I can do ?" : "Les technologies que j'utilise"}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">        
                    {skillsArray.map(({id, imageSrc, title}) => (
                        <SkillItem key={id} imageSrc={imageSrc} title={title} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;