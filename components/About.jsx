import React from 'react';
import Link from 'next/link'
import { useSelector } from "react-redux"
import Image from 'next/image'
import aboutImg from '../public/assets/illustrations/about.jpg'

function About() {
    const langState = useSelector((state) => state.lang.lang);

    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-20">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#1b6dc1]">{langState === 'gb' ? "About" : "A propos"}</p>
                    <h2 className="py-4">{langState === 'gb' ? "Who I Am" : "Qui suis je ?"}</h2>
                    <p className="py-2 text-gray-600">{langState === 'gb' ? "I'm your special web developer" : "Je suis votre développeur web personnel"}</p>
                    <p className="py-2 text-gray-600">{langState === 'gb' ? "I've spent around 10 years working as a sound engineer, then I came back home where I graduated a nurse degree and worked as nurse for almost 6 years. I always loved computed and everything related to the web. In 2020, I started working on my new project, developing a website, working with HTML, CSS, VueJs & Drupal CMS. Soon I found that I was really fascinated with computer programming and decided to pass a certification in web development." : "J'ai passé près de 10 ans à travailler en tant qu'ingénieur du son en région parisienne. Je suis revenu dans le sud de la France par la suite où j'ai obtenu un diplôme d'infirmier. J'ai exercé ce métier pendant 6 ans. J'ai toujours aimé tout ce qui à trait à l'informatique et aux technologies du web. En 2020, j'ai commencé à travailler sur un nouveau projet professionnel en développant un site web avec différentes technologies (HTML, CSS, VueJs & Drupal comme CMS). Je me suis rapidement rendu compte que la programmation me passionnait, c'est ainsi que j'ai décidé d'obtenir une certification de développeur web."}</p>
                    <p className="py-2 text-gray-600">{langState === 'gb' ? "I was since my young age really into computers, hardware & software. As soon as I started programming with HTML & CSS, I was really interested in learning always more. I started working on Javascript in order to make websites more interactive. After a while, I worked on projects using VueJS, React JS, NodeJS and MongoDB. I'm planning on learning always more and being able to fulfill every mission." : "Depuis tout jeune, j'étais passionné par l'informatique, tant l'aspect hardware que software. L'envie d'apprendre ne m'a plus quitté dès le moment où j'ai commencé à programmer en HTML & CSS. J'ai rapidement commencé à travailler avec JavaScript pour pouvoir créer des sites web plus interactifs et après un certain temps, j'ai commencé à utiliser des outils tels que VueJs, ReactJs, NodeJs et MongoDb. Je suis dans l'apprentissage et l'amélioration de mes pratiques constamment afin de remplir chacune de mes missions du mieux que je peux."}</p>
                    <Link href='/#projects'>
                        <p className="py-2 text-gray-600 underline cursor-pointer">{langState === 'gb' ? "Below are some of my latest projects and applications I worked on." : "Retrouvez ci-dessous mes projets et applications les plus récents."}</p>
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
