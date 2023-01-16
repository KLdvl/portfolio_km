import React from 'react';
import ProjectItem from "./ProjectItem";
import bookiImg from "../public/assets/projects/booki.jpg";
import ohmyfoodImg from "../public/assets/projects/ohmyfood.jpg"
import kanapImg from "../public/assets/projects/kanap.jpg"
import hottakesImg from "../public/assets/projects/hottakes.jpg"
import groupomaniaImg from "../public/assets/projects/groupomania.jpg"
import { useSelector } from "react-redux"

const Projects = () => {
    const langState = useSelector((state) => state.lang.lang);
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-20">
                <p className="text-xl tracking-widest uppercase text-[#1b6dc1]">{langState === 'gb' ? "Projects" : "Projets"}</p>
                <h2 className="py-4">{langState === 'gb' ? "What I have built" : "Ce que j'ai développé"}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem title={langState === 'gb' ? 'Holiday reservation Site' : 'Réservation de vacances'} backgroundImg={bookiImg} projectUrl='/booki'
                                 mainTechnos="HTML 5 / CSS 3" />
                    <ProjectItem title={langState === 'gb' ? 'Food reservation site' : 'Réservation de menus en ligne'} backgroundImg={ohmyfoodImg} projectUrl='/ohmyfood'
                                 mainTechnos="HTML 5 / SASS" />
                    <ProjectItem title={langState === 'gb' ? 'Couches commercial app' : 'App de vente de canapés'} backgroundImg={kanapImg} projectUrl='/kanap'
                                 mainTechnos="HTML 5 / CSS 3 / JS" />
                    <ProjectItem title={langState === 'gb' ? 'Sauce sharing app' : 'App de partage de sauces'} backgroundImg={hottakesImg} projectUrl='/hottakes'
                                 mainTechnos="NODE.JS / EXPRESS / MONGODB / ANGULAR" />
                    <ProjectItem title={langState === 'gb' ? 'Company social network app' : "Réseau social d'entreprise"} backgroundImg={groupomaniaImg}
                                 projectUrl='/groupomania' mainTechnos="VUE3 / NODE.JS / EXPRESS / MONGODB" />
                </div>
            </div>
        </div>
    );
};

export default Projects;