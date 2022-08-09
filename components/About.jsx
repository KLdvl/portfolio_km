import React from 'react';

function About() {
    return (
        <div className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">I'm your special web developer</p>
                    <p className="py-2 text-gray-600">I've spent around 10 years working as a sound engineer, then I came back home where I graduated a
                        nurse degree and worked as nurse for almost 6 years. I always loved computed and everything
                        related to the web. In 2020, I started working on my new project, developing a website, working
                        with HTML, CSS, VueJs & Drupal CMS. Soon I found that I was really fascinated with computer
                        programming and decided to pass a certification in web development.</p>
                    <p className="py-2 text-gray-600">I was since my young age really into computers, hardware & software. As soon as I started
                        programming with HTML & CSS, I was really interested in learning always more. I started working
                        on Javascript in order to make websites more interactive. After a while, I worked on projects
                        using VueJS, React JS, NodeJS and MongoDB. I'm planning on learning always more and being able
                        to fulfill every mission.</p>
                    <p className="py-2 text-gray-600 underline cursor-pointer">Below are some of my latest projects and applications I worked on.</p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <img className="rounded-xl"
                        src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80"
                        alt="/"/>
                </div>
            </div>
        </div>
    );
}

export default About;
