import React, { useEffect, useState } from "react";
import "./Knowledge.scss";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Loading } from "../../components/loading/Loading";

// Backgrounds
import backgroundCertificates from '../../assets/images/backgroundCertificados.svg';
import backgroundHardSkills from '../../assets/images/backgroundHardSkills.svg';

export const Knowledge = () => {
    const [loading, setLoading] = useState(true);

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