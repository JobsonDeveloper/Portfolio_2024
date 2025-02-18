import './Home.scss';
import aboutMeImageOne from '../../assets/images/sobreMimBackgroundOne.webp';
import aboutMeImageTow from '../../assets/images/sobreMimBackgroundTow.webp';
import aboutMeImageTree from '../../assets/images/sobreMimBackgroundThree.webp';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css'
import Aos from 'aos';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { Loading } from '../../components/loading/Loading';

export const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Aos.init();

        setTimeout(() => {
            setLoading(false);
        }, 1000);
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
                        <article className="jd_sections_titles jd_presentation_titles" data-aos="fade-right">
                            <h2 className="jd_personality_title">Apresentação</h2>
                            <p className="jd_personality_subtitle">Me conheça um pouco</p>
                        </article>

                        <article className="jd_sections_images jd_presentation_image">
                            <img
                                src={aboutMeImageOne}
                                alt="Desenho de pessoa olhando um caminho"
                                className='jd_sections_images_background'
                                data-aos="fade-right"
                            />
                        </article>

                        <article className="jd_sections_texts jd_presentation_text">
                            <p className="jd_sections_text" data-aos="fade-left">
                                Sou uma homem de natureza calma, buscando sempre manter a tranquilidade e o equilíbrio mediante qualquer situação, este aspecto da minha personalidade me permite refletir com mais clareza sobre determinados problemas, possibilitando a resolução de diversos desafios de forma ponderada.
                            </p>
                            <p className="jd_sections_text" data-aos="fade-left">
                                Também sou dedicado ao aprendizado contínuo, acredito que os estudos e a reflexão constante são o caminho correta para uma evolução pessoal. Minha abordagem estudiosa me leva a explorar novas ideias, adquirir conhecimento e buscar soluções inovadoras para os problemas que surgem.
                            </p>
                            <p className="jd_sections_text" data-aos="fade-left">
                                Também sou visionário, costumo arquitetar planos focados no futuro, minha visão de longo prazo me impulsiona a buscar sempre o melhor caminho, alinhando as ações de hoje com os objetivos do amanhã.                            </p>
                        </article>
                    </li>

                    <li className="jd_sections_itens jd_personality_history">
                        <article className="jd_sections_images jd_history_img">
                            <img
                                src={aboutMeImageTow}
                                alt="Desenho de pessoa olhando um caminho"
                                className='jd_sections_images_background'
                                data-aos="fade-left"
                            />
                        </article>
                        <article className="jd_sections_texts jd_history_text">
                            <p className="jd_sections_text" data-aos="fade-right">
                                Ingressei oficialmente no mundo da programação quando iniciei minha graduação no Centro Universitário Brasileiro, desde então tenho buscado entender cada vez mais sobre o assunto.
                            </p>

                            <p className="jd_sections_text" data-aos="fade-right">
                                Durante o período que passei na UNIBRA, colaborei com a criação de scripts que exerciam funções específicas, tais como: consumo da API do mercado pago para criação automática de links de pagamento, envio de E-mails em massa através do site e armazenamento de imagens no Back-End, contando com o registro delas no banco de dados. Depois passei a colaborar com o desenvolvimento de uma plataforma de gerenciamento de sites, onde aprimorei meus conhecimentos, tanto sobre o Front-End utilizando Laravel, JavaScript, quanto sobre o Back-End, utilizando o PHP com Laravel, JavaScript e MySQL.
                            </p>
                            <p className="jd_sections_text" data-aos="fade-right">
                                Depois foi designado para o desenvolvimento de um aplicativo de dashboard feito com Ionic e TypeScript, durante este desafio, obtive diversos conhecimentos referentes a criação e consumo de APIs, além da utilização do Android Studio para deploy das aplicações.
                            </p>
                        </article>
                    </li>

                    <li className="jd_sections_itens jd_personality_walk">
                        <article className="jd_sections_images jd_walk_img">
                            <img
                                src={aboutMeImageTree}
                                alt="Desenho de pessoa olhando um caminho"
                                className='jd_sections_images_background'
                                data-aos="fade-right"
                            />
                        </article>
                        <article className="jd_sections_texts jd_walk_text">
                            <p className="jd_sections_text" data-aos="fade-left">
                                Atualmente, estou em uma jornada contínua de aprimoramento e aprendizado, tenho dedicado meu tempo a explorar novos conhecimentos e me aprofundar em novas tecnologias, com o objetivo de expandir minhas habilidades no campo da programação. Cada novo aprendizado tem me permitido evoluir não apenas minhas técnicas de desenvolvimento, mas também minha forma de pensar.
                            </p>
                            <p className="jd_sections_text" data-aos="fade-left">
                                Também tenho buscado entender as inovações que estão moldando o futuro do mundo tecnológico, incorporando essas descobertas ao meu processo de desenvolvimento. Essa busca constante me impulsiona a repensar métodos e estratégias, me tornando mais adaptável e me preparado para enfrentar os desafios que surgem no caminho. Estou comprometido em evoluir a cada dia, aprimorando minhas capacidades e minha visão de mundo.
                            </p>
                        </article>
                    </li>
                </ul>
            </section>

            <Footer />

            {/* Loading */}
            {loading &&
                < Loading />
            }
        </main >
    )
}