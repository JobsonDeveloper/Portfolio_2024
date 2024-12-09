import React, { useEffect, useState } from "react";
import "./Projects.scss";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Loading } from "../../components/loading/Loading";
import 'aos/dist/aos.css'
import Aos from 'aos';

// Project pictures
import imageSkillhub from '../../assets/projects/skillhub.webp';
import imagePortfolioDio from '../../assets/projects/portfolioDio.webp';
import imageJavaCalculator from '../../assets/projects/calculadoraJava.webp';
import imageJsCalculator from '../../assets/projects/calculadoraJavaScript.webp';

import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

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

                        <article className="jd_section_project">
                            <article className="jd_sections_projetc_prevew" data-aos="fade-right">
                                <img src={imageSkillhub} alt="Foto do projeto Skillhub" className="jd_sections_projetc_image" />
                            </article>

                            <article className="jd_sections_texts">
                                <p className="jd_sections_text" data-aos="fade-left">
                                    A Skillhub é uma plataforma inovadora que conecta clientes e freelancers de maneira simples e eficiente. Com o objetivo de oferecer serviços de alta qualidade e com segurança, a plataforma permite que tanto clientes quanto freelancers se registrem e participem ativamente do ecossistema.
                                </p>

                                <p className="jd_sections_text" data-aos="fade-left">
                                    Ao se cadastrar, o cliente tem acesso gratuito à plataforma, podendo registrar os serviços que precisa realizar. Já o freelancer, além de se registrar, passa por uma verificação de perfil, assegurando que os serviços oferecidos sejam de alta qualidade e que ambos, clientes e prestadores, possam confiar no processo.
                                </p>

                                <p className="jd_sections_text" data-aos="fade-left">
                                    Após ter o perfil aprovado, o freelancer precisa aderir a um dos planos oferecidos pela Skillhub, cada plano oferece diferentes benefícios, e a renovação mensal do plano renova também o limite de clientes que o freelancer pode atender por mês.
                                </p>

                                <p className="jd_sections_text" data-aos="fade-left">
                                    Após o registro, tanto freelancers quanto clientes podem editar seus perfis a qualquer momento, atualizando informações básicas, como endereço, telefone e E-mail, isso garante que todos os dados estejam sempre atualizados e acessíveis para o bom andamento da comunicação entre as partes.
                                </p>

                                <p className="jd_sections_text" data-aos="fade-left">
                                    Quando um cliente registra um serviço, o freelancer pode visualizar e aceitar a oferta, ao aceitar, os dados de contato do cliente se torna visível para o freelancer e os dados de contato do freelancer se torna visível para o cliente, facilitando a comunicação e o acompanhamento do progresso do serviço. Quando o trabalho é finalizado, tanto o cliente quanto o freelancer têm a oportunidade de avaliar a experiência, contribuindo para a transparência, a confiança e o ranqueamento dos usuários dentro da plataforma, após esta avaliação, o serviço é marcado como concluído no sistema.
                                </p>

                                <p className="jd_sections_text" data-aos="fade-left">
                                    A Skillhub proporciona, assim, um ambiente seguro, confiável e organizado, permitindo que clientes e freelancers se conectem de maneira produtiva, garantindo serviços de qualidade com a máxima transparência e eficiência.
                                </p>
                            </article>
                        </article >

                    </li>

                    {/* Portfolio Dio */}
                    <li className="jd_sections_itens jd_section_portfolio_dio">
                        <article className="jd_sections_titles_links jd_title_right" data-aos="fade-left">
                            <h2 className="jd_item_title">Portfólio</h2>
                            <p className="jd_item_subtitle">Desafio de portfólio da DIO</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_ol%C3%A1-pessoal-passando-somente-para-mostrar-activity-7263348584517959680-gdZU?utm_source=share&utm_medium=member_desktop"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/Desafio-de-portf-lio-DIO.me"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.youtube.com/watch?v=f82jGwaWOBs"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <YouTubeIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://projeto-de-portfolio.netlify.app/"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LanguageIcon className="jd_project_icon" />
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_section_project">
                            <article className="jd_sections_projetc_prevew" data-aos="fade-left">
                                <img src={imagePortfolioDio} alt="Foto do projeto de portfólio da dio" className="jd_sections_projetc_image" />
                            </article>

                            <article className="jd_sections_texts">
                                <p className="jd_sections_text" data-aos="fade-right">
                                    Este portfólio foi desenvolvido como parte do Bootcamp de Desenvolvimento Full-Stack Java oferecido pela DIO - Digital Innovation One. O projeto foi criado utilizando HTML e CSS, durante o módulo dedicado ao aprendizado de Front-End.
                                </p>
                                <p className="jd_sections_text" data-aos="fade-right">
                                    Ao longo dessa jornada, tenho adquirido conhecimentos valiosos para meu desenvolvimento profissional. Este módulo, em especial, foca no aprendizado de CSS, com ênfase no aperfeiçoamento das habilidades de estilização básica e na aplicação de recursos avançados, como keyframes e interações dinâmicas entre componentes.
                                </p>
                            </article>
                        </article >
                    </li>

                    {/* JavaScript Calculator */}
                    <li className="jd_sections_itens jd_section_js_calculator">
                        <article className="jd_sections_titles_links" data-aos="fade-right">
                            <h2 className="jd_item_title">Calculadora JavaScript</h2>
                            <p className="jd_item_subtitle">Aprimorando a lógica de programação</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_mais-um-projeto-conclu%C3%ADdo-foi-uma-experi%C3%AAncia-activity-7076352886712000512-l00L?utm_source=share&utm_medium=member_desktop"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/JsCalculator"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://youtube.com/shorts/H3uNTcSDJPE?si=kkqWcJhXEM6vHz1X"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <YouTubeIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://calculadora-proj.netlify.app/"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LanguageIcon className="jd_project_icon" />
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_section_project">
                            <article className="jd_sections_projetc_prevew" data-aos="fade-right">
                                <img src={imageJsCalculator} alt="Foto do projeto Skillhub" className="jd_sections_projetc_image" />
                            </article>

                            <article className="jd_sections_texts">
                                <p className="jd_sections_text" data-aos="fade-left">
                                    Este projeto foi desenvolvido com o objetivo de solidificar meus conhecimentos em lógica de programação, utilizando JavaScript. Acredito que ele foi um dos mais importantes durante minha trajetória na faculdade, pois os aprendizados adquiridos com sua construção facilitaram a compreensão de diversos conceitos no universo da programação.
                                </p>
                                <p className="jd_sections_text" data-aos="fade-left">
                                    O projeto foi amplamente construído com o uso de Arrays, fundamentais para o armazenamento e manipulação dos dados fornecidos pelo usuário. Através do trabalho com Arrays, pude aprofundar e consolidar os conhecimentos adquiridos na faculdade, utilizando métodos como push, length, pop, entre outros.
                                </p>
                                <p className="jd_sections_text" data-aos="fade-left">
                                    Esses métodos são amplamente utilizados em projetos modernos e representam conceitos essenciais no desenvolvimento de software. Este projeto não só contribuiu para minha formação acadêmica, mas também me proporcionou uma base sólida que tem sido crucial na evolução da minha carreira.
                                </p>
                            </article>
                        </article >
                    </li>

                    {/* Java Calculator */}
                    <li className="jd_sections_itens jd_section_java_calculator">
                        <article className="jd_sections_titles_links jd_title_right" data-aos="fade-left">
                            <h2 className="jd_item_title">Calculadora Java</h2>
                            <p className="jd_item_subtitle">Aprimorando os conhecimento em Java</p>

                            <ul className="jd_sections_projetc_redirects">
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://www.linkedin.com/posts/jobson-de-oliveira-coutinho-5882b9251_hello-world-venho-compartilhar-com-voc%C3%AAs-activity-7104208017851625472-9R1S?utm_source=share&utm_medium=member_desktop"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <LinkedInIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://github.com/JobsonDeveloper/JavaCalculator"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <GitHubIcon className="jd_project_icon" />
                                    </a>
                                </li>
                                <li className="jd_projetc_redirect_item">
                                    <a
                                        href="https://youtube.com/shorts/pf5jUXnfNKk?feature=share"
                                        className="jd_sections_projetc_links"
                                        target="_blank">
                                        <YouTubeIcon className="jd_project_icon" />
                                    </a>
                                </li>
                            </ul>
                        </article>

                        <article className="jd_section_project">
                            <article className="jd_sections_projetc_prevew" data-aos="fade-left">
                                <img src={imageJavaCalculator} alt="Foto do projeto Skillhub" className="jd_sections_projetc_image" />
                            </article>

                            <article className="jd_sections_texts" data-aos="fade-right">
                                <p className="jd_sections_text" >
                                    Esta calculadora foi criada com o objetivo de aprimorar meus conhecimentos em lógica de programação utilizando Java. Durante o desenvolvimento, também adquiri novos aprendizados sobre a linguagem e sobre o Eclipse, a IDE empregada no projeto.
                                </p>
                                <p className="jd_sections_text" >
                                    Os conhecimentos mais significativos obtidos estão relacionados ao Java Swing, a biblioteca usada para construir a interface gráfica da calculadora. O gerenciamento de caracteres foi realizado com Arrays, o que proporcionou maior facilidade na manipulação de dados por meio de métodos como push, pop e length. Este projeto representa um importante passo no aprofundamento das minhas habilidades em programação e no desenvolvimento de aplicações com Java.
                                </p>
                            </article>
                        </article >
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