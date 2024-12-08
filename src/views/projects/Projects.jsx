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

import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
                    <li className="jd_sections_itens">
                        <article className="jd_sections_titles_links" data-aos="fade-right">
                            <h2 className="jd_item_title">Skillhub</h2>
                            <p className="jd_item_subtitle">Conectando clientes e freelancers</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_hello-world-compartilho-com-voc%C3%AAs-um-activity-7268274284282662912-JG75?utm_source=share&utm_medium=member_desktop"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon"/>
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/Front-End-TCC-ADS-2024"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon"/>
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.youtube.com/watch?v=DwOqPgSRGMA&t=45s"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <YouTubeIcon className="jd_project_icon"/>
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_section_project" data-aos="flip-left">
                            <article className="jd_sections_projetc_prevew">
                                <img src={imageSkillhub} alt="Foto do projeto Skillhub" className="jd_sections_projetc_image" />
                            </article>

                            <article className="jd_sections_texts">
                                <p className="jd_sections_text" data-aos="zoom-in">
                                    Esta é a Skillhub, uma plataforma de divulgação de serviços relacionados à tecnologia.
                                    O propósito dela é facilitar a procura dos Freelancers por um cliente e a procura dos clientes por um Freelancer qualificado.
                                    Através dela, tanto os clientes quanto os freelancers podem se cadastrar, e acessar o perfil, porém para os freelancers é necessário fornecer alguns dados a mais, como certificado de antecedentes criminais e foto do RG, para que seja feita uma análise e posteriormente a aprovação ou reprovação da criação da conta.
                                </p>
                            </article>
                        </article >
                    </li>

                    {/* Portfolio Dio */}
                    <li className="jd_sections_itens">
                        <article className="jd_sections_titles_links jd_title_right" data-aos="fade-left">
                            <h2 className="jd_item_title">Portfólio</h2>
                            <p className="jd_item_subtitle">Desafio de portfólio da DIO</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_ol%C3%A1-pessoal-passando-somente-para-mostrar-activity-7263348584517959680-gdZU?utm_source=share&utm_medium=member_desktop"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon"/>
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/Desafio-de-portf-lio-DIO.me"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon"/>
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.youtube.com/watch?v=f82jGwaWOBs"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <YouTubeIcon className="jd_project_icon"/>
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://projeto-de-portfolio.netlify.app/"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LanguageIcon className="jd_project_icon"/>
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_section_project" data-aos="flip-left">
                            <article className="jd_sections_projetc_prevew">
                                <img src={imagePortfolioDio} alt="Foto do projeto de portfólio da dio" className="jd_sections_projetc_image" />
                            </article>

                            <article className="jd_sections_texts">
                                <p className="jd_sections_text" data-aos="zoom-in">
                                    Portfólio criado durante o Bootcamp de Desenvolvimento Full-Stack Java. Ele foi desenvolvido utilizando
                                    HTML e CSS, durante o módulo de aprendizado de Front-End. Adquiri alguns conhecimentos muito relevantes
                                    ferentes ao CSS, conhecimentos que com certeza seram valiosos durante minha jornada.
                                </p>
                            </article>
                        </article >
                    </li>

                    {/* JavaScript Calculator */}
                    <li className="jd_sections_itens">
                        <article className="jd_sections_titles_links" data-aos="fade-right">
                            <h2 className="jd_item_title">Calculadora JavaScript</h2>
                            <p className="jd_item_subtitle">Aprimorando a lógica de programação</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_mais-um-projeto-conclu%C3%ADdo-foi-uma-experi%C3%AAncia-activity-7076352886712000512-l00L?utm_source=share&utm_medium=member_desktop"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon"/>
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/JsCalculator"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon"/>
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://youtube.com/shorts/H3uNTcSDJPE?si=kkqWcJhXEM6vHz1X"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <YouTubeIcon className="jd_project_icon"/>
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://calculadora-proj.netlify.app/"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LanguageIcon className="jd_project_icon"/>
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_section_project" data-aos="flip-left">
                            <article className="jd_sections_projetc_prevew">
                                <img src={imageJsCalculator} alt="Foto do projeto Skillhub" className="jd_sections_projetc_image" />
                            </article>

                            <article className="jd_sections_texts">
                                <p className="jd_sections_text" data-aos="zoom-in">
                                    Construído com o objetivo de solidificar os conhecimento em lógica de programação com JavaScript. Acredito que este foi um dos projetos que mais me ajudou posteriormente na faculdade, pois os conhecimentos adquiridos com ele facilitaram o entendimentos de muitos assuntos do mundo da programação.
                                </p>
                            </article>
                        </article >
                    </li>

                    {/* Java Calculator */}
                    <li className="jd_sections_itens">
                        <article className="jd_sections_titles_links jd_title_right" data-aos="fade-left">
                            <h2 className="jd_item_title">Calculadora Java</h2>
                            <p className="jd_item_subtitle">Aprimorando os conhecimento em Java</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_hello-world-venho-compartilhar-com-voc%C3%AAs-activity-7104208017851625472-9R1S?utm_source=share&utm_medium=member_desktop"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon"/>
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/JavaCalculator"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon"/>
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://youtube.com/shorts/pf5jUXnfNKk?feature=share"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <YouTubeIcon className="jd_project_icon"/>
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_section_project" data-aos="flip-left">
                            <article className="jd_sections_projetc_prevew">
                                <img src={imageJavaCalculator} alt="Foto do projeto Skillhub" className="jd_sections_projetc_image" />
                            </article>

                            <article className="jd_sections_texts">
                                <p className="jd_sections_text" data-aos="zoom-in">
                                    Realizada com o objetivo de aprimorar meu conhecimentos em lógica de programação, 
                                    também foram adquifidos conhecimentos novos sobre a linguagem Java e sobre o Eclipse, principalmente
                                    sobre o Java Swing, que foi a biblioteca utilizada para criar a interface gráfica da calculadora. Todo o armazenamento de caracteres foi 
                                    realizado com Arrays, que facilitam também a manipulação dos caracteres.
                                </p>
                            </article>
                        </article >
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