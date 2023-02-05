import Head from 'next/head'
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { useTranslation } from 'react-i18next';


export default function Home() {
    const { t } = useTranslation();
    return (
        <div>
            <Head>
                <title>{t("index_title")}</title>
                <meta name="description" content={t("index_name_content")} />
                <link rel="icon" href="/assets/Logo_MK.ico" />
            </Head>
            <Main />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}
