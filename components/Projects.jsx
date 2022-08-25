import React from 'react';
import ProjectItem from "./ProjectItem";
import bookiImg from "../public/assets/projects/booki.jpg";
import ohmyfoodImg from "../public/assets/projects/ohmyfood.jpg"
import kanapImg from "../public/assets/projects/kanap.jpg"
import hottakesImg from "../public/assets/projects/hottakes.jpg"
import groupomaniaImg from "../public/assets/projects/groupomania.jpg"

const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#1b6dc1]">Projects</p>
                <h2 className="py-4">What I have built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem title='Holiday reservation Site' backgroundImg={bookiImg} projectUrl='/booki'
                                 mainTechnos="HTML 5 / CSS 3"/>
                    <ProjectItem title='Food reservation site' backgroundImg={ohmyfoodImg} projectUrl='/ohmyfood'
                                 mainTechnos="HTML 5 / SASS"/>
                    <ProjectItem title='Couch commercial app' backgroundImg={kanapImg} projectUrl='/kanap'
                                 mainTechnos="HTML 5 / CSS 3 / JS"/>
                    <ProjectItem title='Sauce sharing app' backgroundImg={hottakesImg} projectUrl='/hottakes'
                                 mainTechnos="Node.Js / Express.Js / MongoDB / Angular.Js"/>
                    <ProjectItem title='Company social network app' backgroundImg={groupomaniaImg}
                                 projectUrl='/groupomania' mainTechnos="Vue3 / Node.Js / Express.Js / MongoDB"/>
                </div>
            </div>
        </div>
    );
};

export default Projects;