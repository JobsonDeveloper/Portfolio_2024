import { Header } from '../../components/header/Header';
import './Home.scss';
import aboutMeImageOne from '../../assets/images/sobreMimBackgroundOne.png';
import aboutMeImageTow from '../../assets/images/sobreMimBackgroundTow.png';
import aboutMeImageTree from '../../assets/images/sobreMimBackgroundThree.png';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useEffect } from 'react';
import 'aos/dist/aos.css'
import Aos from 'aos';
import { Footer } from '../../components/footer/Footer';

export const Home = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <main className="jd_home">
            <Header />

            <section className="jd_main">
                {/* Name */}
                <ul className="jd_presentation_name">
                    <li className="jd_presentation_name_item">
                        <h2 className="jd_presentation_title_one"></h2>
                    </li>
                    <li className="jd_presentation_name_item">
                        <h2 className="jd_presentation_title_tow"></h2>
                    </li>
                </ul>

                {/* Personality */}
                <ul className="jd_sections jd_personality">
                    <li className="jd_sections_itens jd_personality_apresentation">
                        <div className="jd_sections_titles">
                            <h2 className="jd_personality_title">Sobre mim</h2>
                            <p className="jd_personality_subtitle">Me conheça um pouco</p>
                        </div>
                        <div className="jd_sections_images">
                            <img
                                src={aboutMeImageOne}
                                alt="Desenho de pessoa olhando um caminho"
                                className='jd_sections_images_background'
                                data-aos="zoom-in"
                            />
                        </div>
                        <div className="jd_sections_texts">
                            <p className="jd_sections_text" data-aos="zoom-in">
                                Sou um bem calmo, dedicado e amante do mundo da tecnologia, procuro sempre aplicar meus conhecimentos da melhor forma possível em tudo que faço, para poder fornecer o melhor resultado possível e superar as expectativas.
                            </p>
                        </div>
                    </li>

                    <li className="jd_sections_itens jd_personality_history">
                        <div className="jd_sections_images">
                            <img
                                src={aboutMeImageTow}
                                alt="Desenho de pessoa olhando um caminho"
                                className='jd_sections_images_background'
                                data-aos="zoom-in"
                            />
                        </div>
                        <div className="jd_sections_texts">
                            <p className="jd_sections_text" data-aos="zoom-in">
                                Conheci o mundo da programação durante o ensino médio, onde iniciei um curso de lógica de programação, em Janeiro de 2022 comecei meus estudos de Análise e desenvolvimento de sistemas na UNIBRA-Centro Universitário Brasileiro, onde passei a amar ainda mais o mundo da programação.                            </p>
                        </div>
                    </li>

                    <li className="jd_sections_itens jd_personality_walk">
                        <div className="jd_sections_images">
                            <img
                                src={aboutMeImageTree}
                                alt="Desenho de pessoa olhando um caminho"
                                className='jd_sections_images_background'
                                data-aos="zoom-in"
                            />
                        </div>
                        <div className="jd_sections_texts">
                            <p className="jd_sections_text" data-aos="zoom-in">
                                Hoje estou cada vez mais fascinado não só pela programação mas também por tudo que está relacionado a ela, segurança, planejamento de software, coleta de requisitos, etc. Pretendo continuar explorando este “novo mundo” para solidificar os conhecimentos que já possuo e adquirir ainda mais conhecimentos.
                            </p>
                        </div>
                    </li>

                    <li className="jd_sections_itens jd_personality_next_page">
                        <Link to='/qualifications' className="jd_next_page_text">Qualificações</Link>
                        <div className="jd_next_page_img">
                            <NavigateNextIcon className='jd_next_page_icon' />
                        </div>
                    </li>
                </ul>
            </section>

            <Footer />
        </main >
    )
}