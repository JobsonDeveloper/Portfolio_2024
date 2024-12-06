import React, { useEffect, useState } from "react";
import "./Projects.scss";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Loading } from "../../components/loading/Loading";
import 'aos/dist/aos.css'
import Aos from 'aos';

// Project pictures
import imageSkillhub from '../../assets/projects/skillhub.png';
import imagePortfolioDio from '../../assets/projects/portfolioDio.png';
import imageJsCalculator from '../../assets/projects/calculadoraJava.webp';
import imageJavaCalculator from '../../assets/projects/calculadoraJavaScript.png';

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
                    <li className="jd_sections_itens">
                        <article className="jd_sections_titles" data-aos="fade-right">
                            <h2 className="jd_item_title">Skillhub</h2>
                            <p className="jd_item_subtitle">Conectando clientes e freelancers</p>
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

                    <li className="jd_sections_itens">
                        <article className="jd_sections_titles jd_title_right" data-aos="fade-right">
                            <h2 className="jd_item_title">Skillhub</h2>
                            <p className="jd_item_subtitle">Conectando clientes e freelancers</p>
                        </article>

                        {/* <article className="jd_sections_images" data-aos="zoom-in">
                            <img
                                src={backgroundFormations}
                                alt="Desenho de pessoa olhando um caminho"
                                className='jd_sections_images_background'
                                data-aos="zoom-in"
                            />
                        </article> */}
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