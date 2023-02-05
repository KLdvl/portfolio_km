import React from 'react';
import ProjectItem from "./ProjectItem";
import bookiImg from "../public/assets/projects/booki.jpg";
import ohmyfoodImg from "../public/assets/projects/ohmyfood.jpg"
import kanapImg from "../public/assets/projects/kanap.jpg"
import hottakesImg from "../public/assets/projects/hottakes.jpg"
import groupomaniaImg from "../public/assets/projects/groupomania.jpg"
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#1b6dc1]">{t("projects_title")}</p>
                <h2 className="py-4">{t("projects_subtitle")}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem title={t("projects_booki_title")} backgroundImg={bookiImg} projectUrl='/booki'
                                 mainTechnos="HTML 5 / CSS 3" />
                    <ProjectItem title={t("projects_ohmyfood_title")} backgroundImg={ohmyfoodImg} projectUrl='/ohmyfood'
                                 mainTechnos="HTML 5 / SASS" />
                    <ProjectItem title={t("projects_kanap_title")} backgroundImg={kanapImg} projectUrl='/kanap'
                                 mainTechnos="HTML 5 / CSS 3 / JS" />
                    <ProjectItem title={t("projects_hottakes_title")} backgroundImg={hottakesImg} projectUrl='/hottakes'
                                 mainTechnos="NODE.JS / EXPRESS / MONGODB / ANGULAR" />
                    <ProjectItem title={t("projects_groupomania_title")} backgroundImg={groupomaniaImg}
                                 projectUrl='/groupomania' mainTechnos="VUE3 / NODE.JS / EXPRESS / MONGODB" />
                </div>
            </div>
        </div>
    );
};

export default Projects;