import React, { useEffect, useState } from "react";
import "./Projects.scss";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Loading } from "../../components/loading/Loading";
import "aos/dist/aos.css";
import Aos from "aos";

// Project pictures
import imageSkillhub from "../../assets/projects/skillhub.webp";
import imageCartasUchiha from "../../assets/projects/cartasUchiha.webp";
import imageSaborDoAmor from "../../assets/projects/saborDoAmor.webp";
import imageCloneDisneyPlus from "../../assets/projects/cloneDisneyPlus.webp";
import imageDisneyPlusVingadores from "../../assets/projects/vingadoresDisneyPlus.webp";
import imageListaDeTarefas from "../../assets/projects/listaDeTarefas.webp";
import imageToDoList from "../../assets/projects/toDoList.webp";
import imageJbCar from "../../assets/projects/JBcar.webp";
import imageEPLAY from "../../assets/projects/eplay.png";
import imageEFood from "../../assets/projects/efood.png";
import imageLoggable from "../../assets/projects/Loggable.png";
import imageClienteProdutoSpringBoot from "../../assets/projects/Spring-Boot-Client-Product-API.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";

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
        <h2 className="jd_page_name">Projetos</h2>

        <ul className="jd_sections">
          {/* Loggable */}
          <li className="jd_sections_itens ">
            <article className="jd_sections_titles_links" data-aos="fade-right">
              <h2 className="jd_item_title">Loggable</h2>
              <p className="jd_item_subtitle">
                Autenticação de usuários com JWT
              </p>

              <ul className="jd_sections_projetc_redirects">
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://www.linkedin.com/posts/jobson-de-oliveira_hello-wolrd-finalizando-mais-um-projeto-activity-7379904284634636289-OARq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4oovgBFy-L9G25WIsdt3jsyYuhcglLXI8"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LinkedInIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://github.com/JobsonDeveloper/Loggable-api"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <GitHubIcon className="jd_project_icon" />
                  </a>
                </li>
              </ul>
            </article>

            <article
              className="jd_sections_projetc_prevew"
              data-aos="fade-right"
            >
              <img
                src={imageLoggable}
                alt="Documentação das rotas do Loggable com Swagger"
                className="jd_sections_projetc_image"
              />
            </article>
          </li>

          {/* JAVA - Client-Product */}
          <li className="jd_sections_itens jd_section_jb_car jd_card_right">
            <article
              className="jd_sections_titles_links jd_title_right"
              data-aos="fade-left"
            >
              <h2 className="jd_item_title">APIs - Cliente-Produto</h2>
              <p className="jd_item_subtitle">
                Criação e documentação de Microsserviços
              </p>

              <ul className="jd_sections_projetc_redirects">
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://www.linkedin.com/posts/jobson-de-oliveira_%C3%BAltimo-projeto-do-curso-de-%F0%9D%97%97%F0%9D%97%B2%F0%9D%98%80%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%83%F0%9D%97%BC-activity-7366143127834783744-bTnC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4oovgBFy-L9G25WIsdt3jsyYuhcglLXI8"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LinkedInIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://github.com/JobsonDeveloper/Spring_Boot_Client_Product"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <GitHubIcon className="jd_project_icon" />
                  </a>
                </li>
              </ul>
            </article>

            <article
              className="jd_sections_projetc_prevew"
              data-aos="fade-left"
            >
              <img
                src={imageClienteProdutoSpringBoot}
                alt="Foto do projeto Estoque de Produtos"
                className="jd_sections_projetc_image"
              />
            </article>
          </li>

          {/* EPLAY */}
          <li className="jd_sections_itens ">
            <article className="jd_sections_titles_links" data-aos="fade-right">
              <h2 className="jd_item_title">EPLAY</h2>
              <p className="jd_item_subtitle">
                Utilização do React com Redux e consumo de API
              </p>

              <ul className="jd_sections_projetc_redirects">
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://www.linkedin.com/posts/jobson-de-oliveira_hello-world-gra%C3%A7as-a-deus-hoje-estou-activity-7309405942440189952-NIuZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4oovgBFy-L9G25WIsdt3jsyYuhcglLXI8"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LinkedInIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://github.com/JobsonDeveloper/eplay"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <GitHubIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://eplay-ochre.vercel.app/"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LanguageIcon className="jd_project_icon" />
                  </a>
                </li>
              </ul>
            </article>

            <article
              className="jd_sections_projetc_prevew"
              data-aos="fade-right"
            >
              <img
                src={imageEPLAY}
                alt="Foto do projeto EPLAY"
                className="jd_sections_projetc_image"
              />
            </article>
          </li>

          {/* eFood */}
          <li className="jd_sections_itens jd_section_jb_car jd_card_right">
            <article
              className="jd_sections_titles_links jd_title_right"
              data-aos="fade-left"
            >
              <h2 className="jd_item_title">eFood</h2>
              <p className="jd_item_subtitle">
                Desafio de React com Redux e consumo de API
              </p>

              <ul className="jd_sections_projetc_redirects">
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://www.linkedin.com/posts/jobson-de-oliveira_ol%C3%A1-pessoal-hoje-foi-um-dia-de-muita-activity-7309400224714661888-VWdM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4oovgBFy-L9G25WIsdt3jsyYuhcglLXI8"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LinkedInIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://github.com/JobsonDeveloper/eFood"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <GitHubIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://efood-three-omega.vercel.app/"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LanguageIcon className="jd_project_icon" />
                  </a>
                </li>
              </ul>
            </article>

            <article
              className="jd_sections_projetc_prevew"
              data-aos="fade-left"
            >
              <img
                src={imageEFood}
                alt="Foto do projeto eFood"
                className="jd_sections_projetc_image"
              />
            </article>
          </li>

          {/* Clone Disney+ */}
          <li className="jd_sections_itens jd_section_clone_disney">
            <article className="jd_sections_titles_links" data-aos="fade-right">
              <h2 className="jd_item_title">Clone Disney+</h2>
              <p className="jd_item_subtitle">
                Landing page feita com HTML, Sass e JavaScript
              </p>

              <ul className="jd_sections_projetc_redirects">
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://www.linkedin.com/posts/jobson-de-oliveira_bota-tarde-para-todos-compartilho-hoje-activity-7288628088551198720-Y-3m?utm_source=share&utm_medium=member_desktop"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LinkedInIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://github.com/JobsonDeveloper/Clone_Disney_Plus"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <GitHubIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://youtu.be/xWgneA1JHlA?si=MK7Z7kZuKIpD0KGn"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <YouTubeIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://clone-disney-plus-gold.vercel.app/"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LanguageIcon className="jd_project_icon" />
                  </a>
                </li>
              </ul>
            </article>

            <article
              className="jd_sections_projetc_prevew"
              data-aos="fade-right"
            >
              <img
                src={imageCloneDisneyPlus}
                alt="Foto do projeto Clone da Disney Plus"
                className="jd_sections_projetc_image"
              />
            </article>
          </li>

          {/* Jogo de cartas */}
          <li className="jd_sections_itens jd_section_jogo_cartas jd_card_right">
            <article
              className="jd_sections_titles_links jd_title_right"
              data-aos="fade-left"
            >
              <h2 className="jd_item_title">Página de filme da Disney+</h2>
              <p className="jd_item_subtitle">
                Landing page feita com HTML, Sass e JavaScript
              </p>

              <ul className="jd_sections_projetc_redirects">
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://www.linkedin.com/posts/jobson-de-oliveira_boa-noite-para-todos-quero-compartilhar-activity-7289779464257884160-313I?utm_source=share&utm_medium=member_desktop"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LinkedInIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://github.com/JobsonDeveloper/Vingadores_DisneyPlus"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <GitHubIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://youtu.be/u7UJwlRrqyI?si=g9M75IyqwwAnsqpj"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <YouTubeIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://vingadores-disney-plus.vercel.app/"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LanguageIcon className="jd_project_icon" />
                  </a>
                </li>
              </ul>
            </article>

            <article
              className="jd_sections_projetc_prevew"
              data-aos="fade-left"
            >
              <img
                src={imageDisneyPlusVingadores}
                alt="Foto do projeto de jogo de cartas proposto pela dio"
                className="jd_sections_projetc_image"
              />
            </article>
          </li>

          {/* Skillhub */}
          <li className="jd_sections_itens jd_section_skillhub">
            <article className="jd_sections_titles_links" data-aos="fade-right">
              <h2 className="jd_item_title">Skillhub</h2>
              <p className="jd_item_subtitle">
                Site criado com React, TypeScript, PHP e MySQL
              </p>

              <ul className="jd_sections_projetc_redirects">
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_hello-world-compartilho-com-voc%C3%AAs-um-activity-7268274284282662912-JG75?utm_source=share&utm_medium=member_desktop"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LinkedInIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://github.com/JobsonDeveloper/Front-End-TCC-ADS-2024"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <GitHubIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://www.youtube.com/watch?v=DwOqPgSRGMA&t=45s"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <YouTubeIcon className="jd_project_icon" />
                  </a>
                </li>
              </ul>
            </article>

            <article
              className="jd_sections_projetc_prevew"
              data-aos="fade-right"
            >
              <img
                src={imageSkillhub}
                alt="Foto do projeto Skillhub"
                className="jd_sections_projetc_image"
              />
            </article>
          </li>

          {/* Jogo de cartas */}
          <li className="jd_sections_itens jd_section_jogo_cartas jd_card_right">
            <article
              className="jd_sections_titles_links jd_title_right"
              data-aos="fade-left"
            >
              <h2 className="jd_item_title">Jogo de Cartas</h2>
              <p className="jd_item_subtitle">
                Jogo feito com HTML, CSS e JavaScript
              </p>

              <ul className="jd_sections_projetc_redirects">
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_o-v%C3%ADdeo-possui-%C3%A1udio-hello-world-activity-7272330537065758720-RHbN?utm_source=share&utm_medium=member_desktop"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LinkedInIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://github.com/JobsonDeveloper/Jogo-da-Memoria"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <GitHubIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://youtu.be/2S227SHdKnQ?si=ZPryZ6zeEP2YXCEY"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <YouTubeIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://jd-jogo-da-memoria.netlify.app/"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LanguageIcon className="jd_project_icon" />
                  </a>
                </li>
              </ul>
            </article>

            <article
              className="jd_sections_projetc_prevew"
              data-aos="fade-left"
            >
              <img
                src={imageCartasUchiha}
                alt="Foto do projeto de jogo de cartas proposto pela dio"
                className="jd_sections_projetc_image"
              />
            </article>
          </li>

          {/* Lista de Tarefas */}
          <li className="jd_sections_itens jd_section_lista_de_tarefas">
            <article className="jd_sections_titles_links" data-aos="fade-right">
              <h2 className="jd_item_title">Lista de Tarefas</h2>
              <p className="jd_item_subtitle">Sistema criado com React, Redux e TypeScript</p>

              <ul className="jd_sections_projetc_redirects">
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://www.linkedin.com/posts/jobson-de-oliveira_hello-world-compartilho-hoje-com-voc%C3%AAs-activity-7301028422686797824-hP1X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4oovgBFy-L9G25WIsdt3jsyYuhcglLXI8"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LinkedInIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://github.com/JobsonDeveloper/Lista-de-tarefas"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <GitHubIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://lista-de-tarefas-r6l2.vercel.app/"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LanguageIcon className="jd_project_icon" />
                  </a>
                </li>
              </ul>
            </article>

            <article
              className="jd_sections_projetc_prevew"
              data-aos="fade-right"
            >
              <img
                src={imageListaDeTarefas}
                alt="Foto do projeto Lista de Tarefas"
                className="jd_sections_projetc_image"
              />
            </article>
          </li>

          {/* To-Do List */}
          <li className="jd_sections_itens jd_section_toDo_list jd_card_right">
            <article
              className="jd_sections_titles_links jd_title_right"
              data-aos="fade-left"
            >
              <h2 className="jd_item_title">To-Do List</h2>
              <p className="jd_item_subtitle">Sistema criado com HTML, CSS e JavaScript</p>

              <ul className="jd_sections_projetc_redirects">
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://www.linkedin.com/posts/jobson-de-oliveira_aperfei%C3%A7oando-a-atividade-que-foi-constru%C3%ADda-activity-7293275017822236672-BXTL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4oovgBFy-L9G25WIsdt3jsyYuhcglLXI8"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LinkedInIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://github.com/JobsonDeveloper/ToDoList_Vue"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <GitHubIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://vue-to-do-list-mu.vercel.app/"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LanguageIcon className="jd_project_icon" />
                  </a>
                </li>
              </ul>
            </article>

            <article
              className="jd_sections_projetc_prevew"
              data-aos="fade-left"
            >
              <img
                src={imageToDoList}
                alt="Foto do projeto To-Do List"
                className="jd_sections_projetc_image"
              />
            </article>
          </li>

          {/* Sabor do amor */}
          <li className="jd_sections_itens ">
            <article className="jd_sections_titles_links" data-aos="fade-right">
              <h2 className="jd_item_title">Sabor do Amor</h2>
              <p className="jd_item_subtitle">Site criado com HTML, CSS e JQuery</p>

              <ul className="jd_sections_projetc_redirects">
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_hello-world-quero-compartilhar-com-voc%C3%AAs-activity-7286021125237579776-zLBP?utm_source=share&utm_medium=member_desktop"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LinkedInIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://github.com/JobsonDeveloper/Sabor_do_Amor"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <GitHubIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://youtu.be/0LRBMRR0xhA?si=Fl6HqKmrZwHI5DhQ"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <YouTubeIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://sabor-do-amor.vercel.app/"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LanguageIcon className="jd_project_icon" />
                  </a>
                </li>
              </ul>
            </article>

            <article
              className="jd_sections_projetc_prevew"
              data-aos="fade-right"
            >
              <img
                src={imageSaborDoAmor}
                alt="Foto do projeto Sabor do Amor"
                className="jd_sections_projetc_image"
              />
            </article>
          </li>

          {/* JB Car */}
          <li className="jd_sections_itens jd_section_jb_car jd_card_right">
            <article
              className="jd_sections_titles_links jd_title_right"
              data-aos="fade-left"
            >
              <h2 className="jd_item_title">JB - Car</h2>
              <p className="jd_item_subtitle">Site criado com HTML, CSS e JavaScript</p>

              <ul className="jd_sections_projetc_redirects">
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://github.com/JobsonDeveloper/JB-CAR"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <GitHubIcon className="jd_project_icon" />
                  </a>
                </li>
                <li className="jd_projetc_redirect_item">
                  <a
                    href="https://jb-car.vercel.app/"
                    className="jd_sections_projetc_links"
                    target="_blank"
                  >
                    <LanguageIcon className="jd_project_icon" />
                  </a>
                </li>
              </ul>
            </article>

            <article
              className="jd_sections_projetc_prevew"
              data-aos="fade-left"
            >
              <img
                src={imageJbCar}
                alt="Foto do projeto JB Car"
                className="jd_sections_projetc_image"
              />
            </article>
          </li>
        </ul>
      </section>

      <Footer />

      {/* Loadins */}
      {loading && <Loading />}
    </main>
  );
};
