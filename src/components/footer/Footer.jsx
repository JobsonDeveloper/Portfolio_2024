import { Link } from 'react-router-dom';
import './Footer.scss';

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useEffect, useState } from 'react';

export const Footer = () => {
    const [year, setYear] = useState();

    useEffect(() => {
        const date = new Date();
        setYear(date.getFullYear());
    });

    return (
        <footer className="jd_footer">
            <section className="jd_footer_options">
                <ul className="jd_footer_list jd_list_suggestions">
                    <li className="jd_footer_item jd_footer_item_title">
                        <h3 className="jd_footer_title">Sujestões</h3>
                    </li>
                    <li className="jd_footer_item jd_footer_item_element">
                        <Link
                            to='mailto:jobsondeveloper@gmail.com'
                            className='jd_footer_item_element_text'
                        >Enviar mensagem</Link>
                    </li>
                    <li className="jd_footer_item jd_footer_item_element">
                        <Link to='https://docs.google.com/document/d/1AChPUwd_h-0ZXn8dbDYqhs9ifk7wnXya/edit?usp=sharing&ouid=109382985964896447463&rtpof=true&sd=true'
                            className='jd_footer_item_element_text'
                        >Acessar currículo</Link>
                    </li>
                    <li className="jd_footer_item jd_footer_item_element jd_element_redes">
                        <Link
                            to='www.linkedin.com/in/jobson-de-oliveira-coutinho-5882b9251'
                            className="jd_element_redes_link"
                            target='_blank'>
                            <LinkedInIcon className='jd_footer_item_element_icon' />
                        </Link>
                        <Link
                            to='https://github.com/JobsonDeveloper'
                            className="jd_element_redes_link"
                            target='_blank'>
                            <GitHubIcon className='jd_footer_item_element_icon' />
                        </Link>
                        <Link
                            to='mailto:jobsondeveloper@gmail.com'
                            className="jd_element_redes_link"
                            target='_blank'>
                            <MailIcon className='jd_footer_item_element_icon' />
                        </Link>
                        <Link
                            to='https://api.whatsapp.com/send?phone=5581989403631&text=Bem%20vindo%20ao%20meu%20WhatsApp'
                            className="jd_element_redes_link"
                            target='_blank'>
                            <WhatsAppIcon className='jd_footer_item_element_icon' />
                        </Link>
                        <Link
                            to='https://youtube.com/@jcode44?si=G8yHNDqcAzW2C8k4'
                            className="jd_element_redes_link"
                            target='_blank'>
                            <YouTubeIcon className='jd_footer_item_element_icon' />
                        </Link>
                    </li>
                </ul>
                <ul className="jd_footer_list jd_list_map">
                    <li className="jd_footer_item jd_footer_item_title">
                        <h3 className="jd_footer_title">Mapa</h3>
                    </li>
                    <li className="jd_footer_item jd_footer_item_element">
                        <Link
                            to="/"
                            className='jd_footer_item_element_text'
                        >Apresentação</Link>
                    </li>
                    <li className="jd_footer_item jd_footer_item_element">
                        <Link
                            to="/qualifications"
                            className='jd_footer_item_element_text'
                        >Qualificações</Link>
                    </li>
                    <li className="jd_footer_item jd_footer_item_element">
                        <Link
                            to="/conhecimentos"
                            className='jd_footer_item_element_text'
                        >Conhecimentos</Link>
                    </li>
                    <li className="jd_footer_item jd_footer_item_element">
                        <Link
                            to="/projetos"
                            className='jd_footer_item_element_text'
                        >Projetos</Link>
                    </li>
                </ul>
                <ul className="jd_footer_list jd_list_emails">
                    <li className="jd_footer_item jd_footer_item_title">
                        <h3 className="jd_footer_title">Emails</h3>
                    </li>
                    <li className="jd_footer_item jd_footer_item_element">
                        <p className='jd_footer_item_element_text'>jobsondeveloper@gmail.com</p>
                    </li>
                    <li className="jd_footer_item jd_footer_item_element">
                        <p className='jd_footer_item_element_text'>jobsonoliveira800@gmail.com</p>
                    </li>
                </ul>
                <ul className="jd_footer_list jd_list_assignments">
                    <li className="jd_footer_item jd_footer_item_title">
                        <h3 className="jd_footer_title">Atribuições</h3>
                    </li>
                    <li className="jd_footer_item jd_footer_item_element">
                        <a
                            href="www.freepik.com"
                            className='jd_footer_item_element_text jd_assignments_links'
                        >www.freepik.com</a>
                    </li>
                </ul>

            </section>

            <article className="jd_footer_completion">
                <p className="jd_footer_completion_text">jobsondeveloper.vercel | &#169; - {year} - Todos os direitos reservados</p>
            </article>
        </footer>
    )
}