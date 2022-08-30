import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import kanapImg from '../public/assets/projects/kanap.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import { useSelector } from "react-redux"

const Crypto = () => {
    const langState = useSelector((state) => state.lang.lang);
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/40 z-10 shadow-xl"/>
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={kanapImg}
                    alt='/'
                />
                <div
                    className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">{langState === 'gb' ? 'Couch commercial app' : 'Application de vente de canapés'}</h2>
                    <h3>HTML 5 / SCSS / JS</h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>{langState === 'gb' ? 'Project' : 'Projet'}</p>
                    <h2>{langState === 'gb' ? 'Overview' : 'Aperçu'}</h2>
                    <p>{langState === 'gb' ? "This app was built using mainly JS to dynamically link backend to front-end. The app is a classical commercial app. You can add the product that you have chose to a cart stored in localstorage, so that it persists throughout navigation on site. You can add and remove objects to your cart and when order is passed, you have a unique order number which is sent to you." : "Ce site a été construit en utilisant principalement JavaScript pour lier de façon dynamique la partie frontend au backend. L'application est une application commerciale basique. Elle dispose de 3 pages principales, une qui permet d'afficher l'ensemble des produits disponibles dans le catalogue, une seconde qui permet d'afficher les détails concernant un produit et la dernière qui est une page panier qui récapitule l'ensemble des éléments ajoutés dans le panier. Vous pouvez ajouter le produit que vous avez sélectionné dans un panier qui est stocké dans le localStorage de votre navigateur, ce qui permet de ne pas en perdre le contenu lors de votre navigation. Vous pouvez ajouter et supprimer des produits du panier et quand la commande est passée, vous avez un numéro de commande unique qui vous est envoyé."}</p>
                    <Link href="https://mkwebd-kanap-front.netlify.app/html/">
                        <a target="_blank">
                            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
                        </a>
                    </Link>
                    <Link href="https://github.com/MkWebD/Kanap_front">
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
                                <RiRadioButtonFill className="pr-1"/> CSS 3
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/> Javascript
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/> Github
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/> Node.Js
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/> Express.Js
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">{langState === 'gb' ? 'Back' : 'Retour'}</p>
                </Link>
            </div>
        </div>
    );
};

export default Crypto;