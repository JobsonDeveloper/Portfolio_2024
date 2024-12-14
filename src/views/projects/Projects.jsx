import React, { useEffect, useState } from "react";
import "./Projects.scss";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Loading } from "../../components/loading/Loading";
import 'aos/dist/aos.css'
import Aos from 'aos';

// Project pictures
import imageSkillhub from '../../assets/projects/skillhub.webp';
import imagePortfolioDio from '../../assets/projects/portfolioDio.webp';
import imageJavaCalculator from '../../assets/projects/calculadoraJava.webp';
import imageJsCalculator from '../../assets/projects/calculadoraJavaScript.webp';
import imageCartasUchiha from '../../assets/projects/cartasUchiha.webp';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';

export const Projects = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Aos.init();

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <main className="jd_projects">
            <Header />

            <section className="jd_main">
                <h2 className="jd_page_name" >Projetos</h2>

                <ul className="jd_sections">
                    {/* Skillhub */}
                    <li className="jd_sections_itens jd_section_skillhub">

                        <article className="jd_sections_titles_links" data-aos="fade-right">
                            <h2 className="jd_item_title">Skillhub</h2>
                            <p className="jd_item_subtitle">Conectando clientes e freelancers</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_hello-world-compartilho-com-voc%C3%AAs-um-activity-7268274284282662912-JG75?utm_source=share&utm_medium=member_desktop"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/Front-End-TCC-ADS-2024"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.youtube.com/watch?v=DwOqPgSRGMA&t=45s"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <YouTubeIcon className="jd_project_icon" />
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_sections_projetc_prevew" data-aos="fade-right">
                            <img src={imageSkillhub} alt="Foto do projeto Skillhub" className="jd_sections_projetc_image" />
                        </article>

                    </li>

                    {/* Jogo de cartas do Bootcap  Full-Stack Java na DIO */}
                    <li className="jd_sections_itens jd_section_portfolio_dio jd_card_right">
                        <article className="jd_sections_titles_links jd_title_right" data-aos="fade-left">
                            <h2 className="jd_item_title">Jogo de Cartas</h2>
                            <p className="jd_item_subtitle">Um dos desafios do Bootcamp na DIO</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_o-v%C3%ADdeo-possui-%C3%A1udio-hello-world-activity-7272330537065758720-RHbN?utm_source=share&utm_medium=member_desktop"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/Jogo-da-Memoria"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://youtu.be/2S227SHdKnQ?si=ZPryZ6zeEP2YXCEY"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <YouTubeIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://jd-jogo-da-memoria.netlify.app/"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LanguageIcon className="jd_project_icon" />
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_sections_projetc_prevew" data-aos="fade-left">
                            <img src={imageCartasUchiha} alt="Foto do projeto de jogo de cartas proposto pela dio" className="jd_sections_projetc_image" />
                        </article>
                    </li>

                    {/* Portfolio Dio */}
                    <li className="jd_sections_itens jd_section_portfolio_dio">
                        <article className="jd_sections_titles_links" data-aos="fade-right">
                            <h2 className="jd_item_title">Portfólio</h2>
                            <p className="jd_item_subtitle">Desafio de portfólio da DIO</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_ol%C3%A1-pessoal-passando-somente-para-mostrar-activity-7263348584517959680-gdZU?utm_source=share&utm_medium=member_desktop"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/Desafio-de-portf-lio-DIO.me"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.youtube.com/watch?v=f82jGwaWOBs"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <YouTubeIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://projeto-de-portfolio.netlify.app/"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LanguageIcon className="jd_project_icon" />
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_sections_projetc_prevew" data-aos="fade-right">
                            <img src={imagePortfolioDio} alt="Foto do projeto de portfólio da dio" className="jd_sections_projetc_image" />
                        </article >
                    </li>

                    {/* Java Calculator */}
                    <li className="jd_sections_itens jd_section_java_calculator jd_card_right">
                        <article className="jd_sections_titles_links jd_title_right" data-aos="fade-left">
                            <h2 className="jd_item_title">Calculadora Java</h2>
                            <p className="jd_item_subtitle">Aprimorando os conhecimento em Java</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_hello-world-venho-compartilhar-com-voc%C3%AAs-activity-7104208017851625472-9R1S?utm_source=share&utm_medium=member_desktop"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/JavaCalculator"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://youtube.com/shorts/pf5jUXnfNKk?feature=share"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <YouTubeIcon className="jd_project_icon" />
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_sections_projetc_prevew" data-aos="fade-left">
                            <img src={imageJavaCalculator} alt="Foto do projeto Skillhub" className="jd_sections_projetc_image" />
                        </article>
                    </li>
                </ul>
            </section>

            <Footer />

            {/* Loadins */}
            {loading &&
                <Loading />
            }
        </main>
    )
}