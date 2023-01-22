import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them)
// or even better, manage them in separated files per language

const resources = {
    en: {
        translation: {
            "about_title": "About",
            "about_who": "Who am I ?",
            "about_who_description": "I'm your special web developer",
            "about_who_background": "I've spent around 10 years working as a sound engineer, then I came back home where I graduated a nurse degree and worked as nurse for almost 6 years. I always loved computed and everything related to the web. In 2020, I started working on my new project, developing a website, working with HTML, CSS, VueJs & Drupal CMS. Soon I found that I was really fascinated with computer programming and decided to pass a certification in web development.",
            "about_who_background_passion": "I was since my young age really into computers, hardware & software. As soon as I started programming with HTML & CSS, I was really interested in learning always more. I started working on Javascript in order to make websites more interactive. After a while, I worked on projects using VueJS, React JS, NodeJS and MongoDB. I'm planning on learning always more and being able to fulfill every mission.",
            "about_projects": "Below are some of my latest projects and applications I worked on.",            
            "test": "test-EN",
        }
    },
    fr: {
        translation: {
            "about_title": "A propos",
            "about_who": "Qui suis-je ?",
            "about_who_description": "Je suis votre développeur web personnel",
            "about_who_background": "J'ai passé près de 10 ans à travailler en tant qu'ingénieur du son en région parisienne. Je suis revenu dans le sud de la France par la suite où j'ai obtenu un diplôme d'infirmier. J'ai exercé ce métier pendant 6 ans. J'ai toujours aimé tout ce qui à trait à l'informatique et aux technologies du web. En 2020, j'ai commencé à travailler sur un nouveau projet professionnel en développant un site web avec différentes technologies (HTML, CSS, VueJs & Drupal comme CMS). Je me suis rapidement rendu compte que la programmation me passionnait, c'est ainsi que j'ai décidé d'obtenir une certification de développeur web.",
            "about_who_background_passion": "Depuis tout jeune, j'étais passionné par l'informatique, tant l'aspect hardware que software. L'envie d'apprendre ne m'a plus quitté dès le moment où j'ai commencé à programmer en HTML & CSS. J'ai rapidement commencé à travailler avec JavaScript pour pouvoir créer des sites web plus interactifs et après un certain temps, j'ai commencé à utiliser des outils tels que VueJs, ReactJs, NodeJs et MongoDb. Je suis dans l'apprentissage et l'amélioration de mes pratiques constamment afin de remplir chacune de mes missions du mieux que je peux.",
            "about_projects": "Retrouvez ci-dessous mes projets et applications les plus récents.",
            "test": "test-FR",
        }
    }
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })

export default i18n