import React, { useEffect, useState } from "react";
import './Qualifications.scss';
import { Link } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import 'aos/dist/aos.css'
import Aos from 'aos';
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Loading } from "../../components/loading/Loading";

// Backgrounds
import backgroundFormations from '../../assets/images/backgroundFormacoes.svg';
import backgroundExperiences from '../../assets/images/backgroundExperiencias.svg';
import { Fade, Pagination, Zoom } from "@mui/material";
import { CurseCard } from "../../components/curseCard/CurseCard";

export const Qualifications = () => {
    const [loading, setLoading] = useState(true);
    const [cursePage, setCursePage] = useState(1);
    const [profissionPage, setProfissionPage] = useState(1);

    const [showCurse, setShowCurse] = useState(true);
    const [showProfission, setShowProfission] = useState(true);

    const changeCursePage = (event, newPage) => {
        setShowCurse(false);

        setTimeout(() => {
            setCursePage(newPage);
            setShowCurse(true);
        }, 500);
    };

    const changeProfissionPage = (event, newPage) => {
        setShowProfission(false);

        setTimeout(() => {
            setProfissionPage(newPage);
            setShowProfission(true);
        }, 500);
    };

    useEffect(() => {
        Aos.init();

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <main className="jd_qualifications">
            <Header />

            <section className="jd_main">
                <h2 className="jd_page_name">Qualificações</h2>

                <ul className="jd_sections">
                    {/* Cursos realizados */}
                    <li className="jd_sections_itens">
                        <article className="jd_sections_titles">
                            <h2 className="jd_item_title">Cursos realizados</h2>
                            <p className="jd_item_subtitle">Conhecimentos adquiridos</p>
                        </article>

                        <article className="jd_sections_images">
                            <img
                                src={backgroundFormations}
                                alt="Desenho de pessoa olhando um caminho"
                                className='jd_sections_images_background'
                                data-aos="zoom-in"
                            />
                        </article>

                        <article className="jd_main_curse">
                            {/* ADS na UNIBRA */}
                            {cursePage === 1 &&
                                <a
                                    href="https://www.grupounibra.com/"
                                    className="jd_curse_card_link"
                                    target="_blank">
                                    <CurseCard
                                        curse='Análise e Desenvolvimento do Sistemas'
                                        institution='UNIBRA - Centro Universitário Brasileiro'
                                        status='Cursando'
                                        period='01/2022 - 12/2024'
                                        showCurse={showCurse}
                                        type='Graduação'
                                    />
                                </a>
                            }

                            {/* Full-Stack na EBAC */}
                            {cursePage === 2 &&
                                <a
                                    href="https://ebaconline.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=course_0_all_google_search_all_brand_general_test-cpc&utm_content=c_11725014130%7Cadg_113925699836%7Cad_495020094646%7Cph_kwd-42555011%7Ckey_ebac%7Cdev_c%7Cpst_%7Crgnid_1031854%7Cplacement_&gad_source=1&gclid=CjwKCAiA9bq6BhAKEiwAH6bqoIxh7u5H2HSMfWHzVSz09yO2yi3Ik-IDHUp1JWv1NUAMk9n2El1iUxoC6N8QAvD_BwE"
                                    className="jd_curse_card_link"
                                    target="_blank">
                                    <CurseCard
                                        curse='Desenvolvimento Full-Stack Java'
                                        institution='EBAC - Escola Britânica de Artes Criativas e Tecnologia'
                                        status='Cursando'
                                        period='12/2024 - 12/2025'
                                        showCurse={showCurse}
                                        type='Profissionalizante'
                                    />
                                </a>
                            }

                            {/* Bootcamp Full-Stack na DIO */}
                            {cursePage === 3 &&
                                <a
                                    href="https://www.dio.me/"
                                    className="jd_curse_card_link"
                                    target="_blank">
                                    <CurseCard
                                        curse='TQI Fullstack Developer'
                                        institution='DIO - Digital Innovation One'
                                        status='Cursando'
                                        period='11/2024 - 12/2024'
                                        showCurse={showCurse}
                                        type='Curso livre'
                                    />
                                </a>
                            }

                            <article className="jd_curse_pagination">
                                <Pagination
                                    count={3}
                                    page={cursePage}
                                    onChange={changeCursePage}
                                    hidePrevButton
                                    hideNextButton
                                />
                            </article>
                        </article>
                    </li>

                    {/* Experiências */}
                    <li className="jd_sections_itens">
                        <article className="jd_sections_titles jd_title_right">
                            <h2 className="jd_item_title">Experiências profissionais</h2>
                            <p className="jd_item_subtitle">Minha trajetória profissional</p>
                        </article>

                        <article className="jd_sections_images">
                            <img
                                src={backgroundExperiences}
                                alt="Desenho de pessoa olhando um caminho"
                                className='jd_sections_images_background'
                                data-aos="zoom-in"
                            />
                        </article>

                        <article className="jd_main_curse">
                            {/* ADS na UNIBRA */}
                            {profissionPage === 1 &&
                                    <CurseCard
                                        curse='Análise e Desenvolvimento do Sistemas'
                                        institution='UNIBRA - Centro Universitário Brasileiro'
                                        status='Cursando'
                                        period='01/2022 - 12/2024'
                                        showProfission={showProfission}
                                        type='Graduação'
                                    />
                            }

                            {/* Full-Stack na EBAC */}
                            {profissionPage === 2 &&
                                    <CurseCard
                                        curse='Desenvolvimento Full-Stack Java'
                                        institution='EBAC - Escola Britânica de Artes Criativas e Tecnologia'
                                        status='Cursando'
                                        period='12/2024 - 12/2025'
                                        showProfission={showProfission}
                                        type='Profissionalizante'
                                    />
                            }

                            <article className="jd_curse_pagination">
                                <Pagination
                                    count={2}
                                    page={profissionPage}
                                    onChange={changeProfissionPage}
                                    hidePrevButton
                                    hideNextButton
                                />
                            </article>
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