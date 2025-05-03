import React, { useEffect, useState } from "react";
import "./Knowledge.scss";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Loading } from "../../components/loading/Loading";
import { Pagination } from "@mui/material";

// Backgrounds
import backgroundCertificates from '../../assets/images/backgroundCertificados.webp';
import backgroundHardSkills from '../../assets/images/backgroundHardSkills.webp';
import { CertificatesCard } from "../../components/certificatesCard/CertificatesCard";

// Certificates
import DioTQIFillStack from '../../assets/certificates/DIO-TQI-FullStack-Java.png';
import DioBootcampJava from '../../assets/certificates/DIO-Bootcamp-Java.png';
import DioBootcampSpringFramework from '../../assets/certificates/DIO-Spring-Framework.png';
import DioBootcampReactJs from '../../assets/certificates/DIO-Bootcamp-ReactJs.png';
import DioBootcampSQL from '../../assets/certificates/DIO-Bootcamp-SQL.png';
import UBUnibraLogicFromProgramming from '../../assets/certificates/UNIBRA-Intencivo-de-Logica-de-Programacao-Java.webp';
import UBProjectOrientedObject from '../../assets/certificates/UNIBRA-Projeto-com-Programacao-Orientada-a-Objetos.webp';
import UBManagementProject from '../../assets/certificates/UNIBRA-Gestao-de-Projetos.webp';

// Icons Reacgt
import { SiJunit5, SiSqlite, SiFormik, SiCypress , SiJest, SiBabel, SiEditorconfig, SiPrettier, SiEslint, SiStyledcomponents, SiReactrouter , SiJquery, SiAndroidstudio, SiGimp, SiIonic, SiMui, SiPostman, SiSass, SiSpring  } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";

import { LiaGrunt } from "react-icons/lia";
import { Tilt } from 'react-tilt'
import { RiJavascriptFill } from "react-icons/ri";
import { FaVuejs, FaHtml5, FaCss3Alt, FaLess, FaGulp, FaBootstrap, FaCpanel, FaFigma, FaGitAlt, FaGithub, FaJava, FaLaravel, FaPhp, FaReact, FaTrello } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { DiMysql } from "react-icons/di";
import { TbBrandNpm, TbBrandRedux  } from "react-icons/tb";
const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export const Knowledge = () => {
    const [loading, setLoading] = useState(true);
    const [certificatePage, setCertificatePage] = useState(1);
    const [showCertificate, setShowCertificate] = useState(true);

    const changeCertificatePage = (event, newPage) => {
        setShowCertificate(false);

        setTimeout(() => {
            setCertificatePage(newPage);
            setShowCertificate(true);
        }, 500);
    };

    useEffect(() => {
        Aos.init();

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <main className="jd_knowledge">
            <Header />

            <section className="jd_main">
                <h2 className="jd_page_name">Conhecimentos</h2>

                <ul className="jd_sections">
                    {/* Cursos realizados */}
                    <li className="jd_sections_itens jd_certificates">
                        <article className="jd_sections_titles" data-aos="fade-right">
                            <h2 className="jd_item_title">Certificados</h2>
                            <p className="jd_item_subtitle">Troféus alcançados com o tempo</p>
                        </article>

                        <article className="jd_sections_images">
                            <img
                                src={backgroundCertificates}
                                alt="Desenho de pessoa olhando um caminho"
                                className='jd_sections_images_background'
                                data-aos="fade-right"
                            />
                        </article>

                        <article className="jd_main_certificates" data-aos="fade-left">
                            {certificatePage === 1 &&
                                <CertificatesCard
                                    certificateUrl={DioTQIFillStack}
                                    showCertificate={showCertificate}
                                />
                            }
                            {certificatePage === 2 &&
                                <CertificatesCard
                                    certificateUrl={DioBootcampJava}
                                    showCertificate={showCertificate}
                                />
                            }
                            {certificatePage === 3 &&
                                <CertificatesCard
                                    certificateUrl={DioBootcampSpringFramework}
                                    showCertificate={showCertificate}
                                />
                            }
                            {certificatePage === 4 &&
                                <CertificatesCard
                                    certificateUrl={DioBootcampReactJs}
                                    showCertificate={showCertificate}
                                />
                            }
                            {certificatePage === 5 &&
                                <CertificatesCard
                                    certificateUrl={DioBootcampSQL}
                                    showCertificate={showCertificate}
                                />
                            }
                            {certificatePage === 6 &&
                                <CertificatesCard
                                    certificateUrl={UBUnibraLogicFromProgramming}
                                    showCertificate={showCertificate}
                                />
                            }
                            {certificatePage === 7 &&
                                <CertificatesCard
                                    certificateUrl={UBProjectOrientedObject}
                                    showCertificate={showCertificate}
                                />
                            }
                            {certificatePage === 8 &&
                                <CertificatesCard
                                    certificateUrl={UBManagementProject}
                                    showCertificate={showCertificate}
                                />
                            }

                            <article className="jd_certificate_pagination">
                                <Pagination
                                    count={8}
                                    page={certificatePage}
                                    onChange={changeCertificatePage}
                                    hidePrevButton
                                    hideNextButton
                                />
                            </article>
                        </article>
                    </li>

                    {/* Hard-Skills */}
                    <li className="jd_sections_itens jd_hard_skills">
                        <article className="jd_sections_titles jd_title_right" data-aos="fade-left">
                            <h2 className="jd_item_title">Hard Skills</h2>
                            <p className="jd_item_subtitle">Tecnologias conhecidas</p>
                        </article>

                        <article className="jd_sections_images" data-aos="fade-left">
                            <img
                                src={backgroundHardSkills}
                                alt="Desenho de pessoa olhando um caminho"
                                className='jd_sections_images_background'
                            />
                        </article>

                        {/* Hard-Skills Front-End */}
                        <article className="jd_hard_skills_container jd_front_end" data-aos="fade-right">
                            <article className="jd_hard_skills_substitles">
                                <h6 className="jd_hardk_skills_subtitles_title">Front-End</h6>
                            </article>

                            <ul className="jd_hard_skills_container_list">
                                <Tilt options={defaultOptions}>
                                    <li className="jd_hard_skills_item" title="HTML">
                                        <FaHtml5 className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions}>
                                    <li className="jd_hard_skills_item" title="CSS">
                                        <FaCss3Alt className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions}>
                                    <li className="jd_hard_skills_item" title="Sass">
                                        <SiSass className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions}>
                                    <li className="jd_hard_skills_item" title="Less">
                                        <FaLess className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="JavaScript">
                                        <RiJavascriptFill className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="TypeScript">
                                        <BiLogoTypescript className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="jQuery">
                                        <SiJquery className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Ionic">
                                        <SiIonic className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="React">
                                        <FaReact className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Redux">
                                        <TbBrandRedux className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="React Router">
                                        <SiReactrouter className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Jest">
                                        <SiJest  className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Cypress">
                                        <SiCypress  className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Styled-Components">
                                        <SiStyledcomponents  className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Material UI">
                                        <SiMui className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Bootstrap">
                                        <FaBootstrap className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Vue.js">
                                        <FaVuejs className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Gulp">
                                        <FaGulp className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Grunt">
                                        <LiaGrunt className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Babel">
                                        <SiBabel className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="ESLint">
                                        <SiEslint className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Prettier">
                                        <SiPrettier className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Prettier">
                                        <SiFormik className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                            </ul>
                        </article>

                        {/* Hard-Skills Back-End */}
                        <article className="jd_hard_skills_container jd_back_end" data-aos="fade-right">
                            <article className="jd_hard_skills_substitles">
                                <h6 className="jd_hardk_skills_subtitles_title">Back-End</h6>
                            </article>

                            <ul className="jd_hard_skills_container_list">
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="PHP">
                                        <FaPhp className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Laravel">
                                        <FaLaravel className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="MySQL">
                                        <DiMysql className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Java">
                                        <FaJava className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Spring Framework">
                                        <SiSpring  className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="PostgreSQL">
                                        <BiLogoPostgresql  className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="SQLite">
                                        <SiSqlite  className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="JUnit">
                                        <SiJunit5  className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                            </ul>
                        </article>

                        {/* Hard-Skills Oder Skills */}
                        <article className="jd_hard_skills_container jd_oder_skills" data-aos="fade-right">
                            <article className="jd_hard_skills_substitles">
                                <h6 className="jd_hardk_skills_subtitles_title">Outras Tecnologias</h6>
                            </article>

                            <ul className="jd_hard_skills_container_list">
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="EditorConfig">
                                        <SiEditorconfig  className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Trello">
                                        <FaTrello className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Figma">
                                        <FaFigma className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Gimp">
                                        <SiGimp className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Git">
                                        <FaGitAlt className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="GitHub">
                                        <FaGithub className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Android Stúdio">
                                        <SiAndroidstudio className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="Postman">
                                        <SiPostman className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="NPM">
                                        <TbBrandNpm className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                                <Tilt options={defaultOptions} >
                                    <li className="jd_hard_skills_item" title="cPanel">
                                        <FaCpanel className="jd_hard_skills_item_icon" />
                                    </li>
                                </Tilt>
                            </ul>
                        </article>
                    </li>
                </ul>
            </section>

            <Footer />
            {loading &&
                <Loading />
            }
        </main>
    )
}