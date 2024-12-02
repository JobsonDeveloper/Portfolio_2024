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

export const Qualifications = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Aos.init();
        setLoading(false);
    }, []);

    return (
        <main className="jd_qualifications">    
            <Header />

            <section className="jd_main">
                <h2 className="jd_page_name">Qualificações</h2>

                <ul className="jd_sections">
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

                        <ul className="jd_main_curse">
                            <li className="jd_main_curse_item"></li>
                        </ul>  
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