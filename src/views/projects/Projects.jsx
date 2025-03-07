import React, { useEffect, useState } from "react";
import "./Projects.scss";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Loading } from "../../components/loading/Loading";
import 'aos/dist/aos.css'
import Aos from 'aos';

// Project pictures
import imageSkillhub from '../../assets/projects/skillhub.webp';
import imageCartasUchiha from '../../assets/projects/cartasUchiha.webp';
import imageSaborDoAmor from '../../assets/projects/saborDoAmor.webp';
import imageBrasilDiverso from '../../assets/projects/BrasilDiverso.webp';
import imageCloneDisneyPlus from '../../assets/projects/cloneDisneyPlus.webp';
import imageDisneyPlusVingadores from '../../assets/projects/vingadoresDisneyPlus.webp';
import imageListaDeTarefas from '../../assets/projects/listaDeTarefas.webp';
import imageToDoList from '../../assets/projects/toDoList.webp';
import imageJbCar from '../../assets/projects/JBcar.webp';
import imageEbacTechTalks from '../../assets/projects/ebacTechTalks.webp';

import imagePortfolioDio from '../../assets/projects/portfolioDio.webp';
import imageJavaCalculator from '../../assets/projects/calculadoraJava.webp';
import imageJsCalculator from '../../assets/projects/calculadoraJavaScript.webp';

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
                    {/* Clone Disney+ */}
                    <li className="jd_sections_itens jd_section_clone_disney">

                        <article className="jd_sections_titles_links" data-aos="fade-right">
                            <h2 className="jd_item_title">Clone Disney+</h2>
                            <p className="jd_item_subtitle">Criado durante os estudos na EBAC</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira_bota-tarde-para-todos-compartilho-hoje-activity-7288628088551198720-Y-3m?utm_source=share&utm_medium=member_desktop"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/Clone_Disney_Plus"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://youtu.be/xWgneA1JHlA?si=MK7Z7kZuKIpD0KGn"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <YouTubeIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://clone-disney-plus-gold.vercel.app/"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LanguageIcon className="jd_project_icon" />
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_sections_projetc_prevew" data-aos="fade-right">
                            <img src={imageCloneDisneyPlus} alt="Foto do projeto Clone da Disney Plus" className="jd_sections_projetc_image" />
                        </article>

                    </li>

                    {/* Jogo de cartas do Bootcap  Full-Stack Java na DIO */}
                    <li className="jd_sections_itens jd_section_jogo_cartas jd_card_right">
                        <article className="jd_sections_titles_links jd_title_right" data-aos="fade-left">
                            <h2 className="jd_item_title">Clone da página de filme da Disney+</h2>
                            <p className="jd_item_subtitle">Um dos desafios de projeto da EBAC</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira_boa-noite-para-todos-quero-compartilhar-activity-7289779464257884160-313I?utm_source=share&utm_medium=member_desktop"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/Vingadores_DisneyPlus"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://youtu.be/u7UJwlRrqyI?si=g9M75IyqwwAnsqpj"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <YouTubeIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://vingadores-disney-plus.vercel.app/"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LanguageIcon className="jd_project_icon" />
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_sections_projetc_prevew" data-aos="fade-left">
                            <img src={imageDisneyPlusVingadores} alt="Foto do projeto de jogo de cartas proposto pela dio" className="jd_sections_projetc_image" />
                        </article>
                    </li>

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
                    <li className="jd_sections_itens jd_section_jogo_cartas jd_card_right">
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

                    {/* Lista de Tarefas */}
                    <li className="jd_sections_itens jd_section_lista_de_tarefas">
                        <article className="jd_sections_titles_links" data-aos="fade-right">
                            <h2 className="jd_item_title">Lista de Tarefas</h2>
                            <p className="jd_item_subtitle">Facilitando o seu dia-a-dia</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira_hello-world-compartilho-hoje-com-voc%C3%AAs-activity-7301028422686797824-hP1X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4oovgBFy-L9G25WIsdt3jsyYuhcglLXI8"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/Lista-de-tarefas"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://lista-de-tarefas-r6l2.vercel.app/"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LanguageIcon className="jd_project_icon" />
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_sections_projetc_prevew" data-aos="fade-right">
                            <img src={imageListaDeTarefas} alt="Foto do projeto Lista de Tarefas" className="jd_sections_projetc_image" />
                        </article >
                    </li>

                    {/* To-Do List */}
                    <li className="jd_sections_itens jd_section_toDo_list jd_card_right">
                        <article className="jd_sections_titles_links jd_title_right" data-aos="fade-left">
                            <h2 className="jd_item_title">To-Do List</h2>
                            <p className="jd_item_subtitle">Sempre te ajudando a lembrar</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira_aperfei%C3%A7oando-a-atividade-que-foi-constru%C3%ADda-activity-7293275017822236672-BXTL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4oovgBFy-L9G25WIsdt3jsyYuhcglLXI8"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/ToDoList_Vue"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://vue-to-do-list-mu.vercel.app/"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LanguageIcon className="jd_project_icon" />
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_sections_projetc_prevew" data-aos="fade-left">
                            <img src={imageToDoList} alt="Foto do projeto To-Do List" className="jd_sections_projetc_image" />
                        </article>
                    </li>

                    {/* Lista de Tarefas */}
                    <li className="jd_sections_itens jd_section_ebac_tech_talks">
                        <article className="jd_sections_titles_links" data-aos="fade-right">
                            <h2 className="jd_item_title">EBAC Tech Talks</h2>
                            <p className="jd_item_subtitle">Projeto de site de divulgação de eventos</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/EBAC_Tech_Talks"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://ebac-tech-talks-self-mu.vercel.app/"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LanguageIcon className="jd_project_icon" />
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_sections_projetc_prevew" data-aos="fade-right">
                            <img src={imageEbacTechTalks} alt="Foto do projeto EBAC Tech Talks" className="jd_sections_projetc_image" />
                        </article >
                    </li>

                    {/* JB Car */}
                    <li className="jd_sections_itens jd_section_jb_car jd_card_right">
                        <article className="jd_sections_titles_links jd_title_right" data-aos="fade-left">
                            <h2 className="jd_item_title">JB - Car</h2>
                            <p className="jd_item_subtitle">A melhor escolha está aqui</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/JB-CAR"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://jb-car.vercel.app/"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LanguageIcon className="jd_project_icon" />
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_sections_projetc_prevew" data-aos="fade-left">
                            <img src={imageJbCar} alt="Foto do projeto JB Car" className="jd_sections_projetc_image" />
                        </article>
                    </li>

                    {/* Portfolio Dio */}
                    <li className="jd_sections_itens jd_section_portfolio_dio">
                        <article className="jd_sections_titles_links" data-aos="fade-right">
                            <h2 className="jd_item_title">Sabor do Amor</h2>
                            <p className="jd_item_subtitle">O restaurante dos sonhos</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_hello-world-quero-compartilhar-com-voc%C3%AAs-activity-7286021125237579776-zLBP?utm_source=share&utm_medium=member_desktop"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/Sabor_do_Amor"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://youtu.be/0LRBMRR0xhA?si=Fl6HqKmrZwHI5DhQ"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <YouTubeIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://sabor-do-amor.vercel.app/"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LanguageIcon className="jd_project_icon" />
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_sections_projetc_prevew" data-aos="fade-right">
                            <img src={imageSaborDoAmor} alt="Foto do projeto Sabor do Amor" className="jd_sections_projetc_image" />
                        </article >
                    </li>

                    {/* Brasil diverso */}
                    <li className="jd_sections_itens jd_section_brasil_diverso jd_card_right">
                        <article className="jd_sections_titles_links jd_title_right" data-aos="fade-left">
                            <h2 className="jd_item_title">Brasil Diverso</h2>
                            <p className="jd_item_subtitle">Porque a diversidade nos faz bem</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_hello-world-quero-compartilhar-com-voc%C3%AAs-activity-7286021125237579776-zLBP?utm_source=share&utm_medium=member_desktop"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/Brasil_Diverso"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://youtu.be/0LRBMRR0xhA?si=Fl6HqKmrZwHI5DhQ"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <YouTubeIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://brasil-diverso.vercel.app/"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LanguageIcon className="jd_project_icon" />
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_sections_projetc_prevew" data-aos="fade-left">
                            <img src={imageBrasilDiverso} alt="Foto do projeto Brasil Diverso" className="jd_sections_projetc_image" />
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