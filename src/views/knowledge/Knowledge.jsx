import React, { useEffect, useState } from "react";
import "./Knowledge.scss";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Loading } from "../../components/loading/Loading";
import { Pagination } from "@mui/material";

// Backgrounds
import backgroundCertificates from '../../assets/images/backgroundCertificados.svg';
import backgroundHardSkills from '../../assets/images/backgroundHardSkills.svg';
import { CertificatesCard } from "../../components/certificatesCard/CertificatesCard";

// Certificates
import DioReactAndTypeScript from '../../assets/certificates/DIO-Paginas-com-React-e-TypeScript.jpg';
import DioJavaScriptDebuggingError from '../../assets/certificates/DIO-Debugging-e-Error-Handling-JavaScript.jpg';
import DioJavaScriptFunctions from '../../assets/certificates/DIO-Dominando-Funcoes-JavaScript.jpg';
import DioIntroductFomGitAndGitHub from '../../assets/certificates/DIO-Introducao-ao-Git-e-GitHub.jpg';
import DioOrientationFromObject from '../../assets/certificates/DIO-Orientacao-a-Objetos-com-JavaScript.jpg';
import UBUnibraLogicFromProgramming from '../../assets/certificates/UNIBRA-Intencivo-de-Logica-de-Programacao-Java.jpg';
import UBProjectOrientedObject from '../../assets/certificates/UNIBRA-Projeto-com-Programacao-Orientada-a-Objetos.jpg';
import UBManagementProject from '../../assets/certificates/UNIBRA-Gestao-de-Projetos.jpg';

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
                    <li className="jd_sections_itens">
                        <article className="jd_sections_titles" data-aos="fade-right">
                            <h2 className="jd_item_title">Certificados</h2>
                            <p className="jd_item_subtitle">Troféus alcançados com o tempo</p>
                        </article>

                        <article className="jd_sections_images" data-aos="zoom-in">
                            <img
                                src={backgroundCertificates}
                                alt="Desenho de pessoa olhando um caminho"
                                className='jd_sections_images_background'
                                data-aos="zoom-in"
                            />
                        </article>

                        <article className="jd_main_certificates">
                            {certificatePage === 1 &&
                                <CertificatesCard
                                    certificateUrl={DioReactAndTypeScript}
                                    showCertificate={showCertificate}
                                />
                            }
                            {certificatePage === 2 &&
                                <CertificatesCard
                                    certificateUrl={DioJavaScriptDebuggingError}
                                    showCertificate={showCertificate}
                                />
                            }
                            {certificatePage === 3 &&
                                <CertificatesCard
                                    certificateUrl={DioJavaScriptFunctions}
                                    showCertificate={showCertificate}
                                />
                            }
                            {certificatePage === 4 &&
                                <CertificatesCard
                                    certificateUrl={DioIntroductFomGitAndGitHub}
                                    showCertificate={showCertificate}
                                />
                            }
                            {certificatePage === 5 &&
                                <CertificatesCard
                                    certificateUrl={DioOrientationFromObject}
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

                    <li className="jd_sections_itens">
                        <article className="jd_sections_titles jd_title_right" data-aos="fade-left">
                            <h2 className="jd_item_title">Hard Skills</h2>
                            <p className="jd_item_subtitle">Tecnologias conhecidas</p>
                        </article>

                        <article className="jd_sections_images" data-aos="zoom-in">
                            <img
                                src={backgroundHardSkills}
                                alt="Desenho de pessoa olhando um caminho"
                                className='jd_sections_images_background'
                                data-aos="zoom-in"
                            />
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