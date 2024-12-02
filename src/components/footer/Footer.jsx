import { Link } from 'react-router-dom';
import './Footer.scss';

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import { useEffect, useState } from 'react';

export const Footer = () => {
    const [year, setYear] = useState();

    useEffect(() => {
        const date = new Date();
        setYear(date.getFullYear());
    });

    return (
        <footer className="jd_footer">
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
                    <Link to='https://docs.google.com/document/d/1vkr9zDTHYl8V5HzuTLBgbo-SwPufee5JW4DnXK2BLdk/edit?usp=drive_link'
                        className='jd_footer_item_element_text'
                    >Acessar currículo</Link>
                </li>

                <li className="jd_footer_item jd_footer_item_element jd_element_redes">
                    <Link to='www.linkedin.com/in/jobson-de-oliveira-coutinho-5882b9251' className="jd_element_redes_link">
                        <LinkedInIcon className='jd_footer_item_element_icon' />
                    </Link>
                    <Link to='https://github.com/JobsonDeveloper' className="jd_element_redes_link">
                        <GitHubIcon className='jd_footer_item_element_icon' />
                    </Link>
                    <Link to='mailto:jobsondeveloper@gmail.com' className="jd_element_redes_link">
                        <MailIcon className='jd_footer_item_element_icon' />
                    </Link>
                    <Link to='https://api.whatsapp.com/send?phone=5581989403631&text=Bem%20vindo%20ao%20meu%20WhatsApp' className="jd_element_redes_link">
                        <WhatsAppIcon className='jd_footer_item_element_icon' />
                    </Link>
                </li>
            </ul>

            <ul className="jd_footer_list jd_list_map">
                <li className="jd_footer_item jd_footer_item_title">
                    <h3 className="jd_footer_title">Mapa</h3>
                </li>

                <li className="jd_footer_item jd_footer_item_element">
                    <a
                        href="/"
                        className='jd_footer_item_element_text'
                    >Apresentação</a>
                </li>

                <li className="jd_footer_item jd_footer_item_element">
                    <a
                        href="/qualifications"
                        className='jd_footer_item_element_text'
                    >Qualificações</a>
                </li>

                <li className="jd_footer_item jd_footer_item_element">
                    <a
                        href="/knowledge"
                        className='jd_footer_item_element_text'
                    >Conhecimentos</a>
                </li>

                <li className="jd_footer_item jd_footer_item_element">
                    <a
                        href="/projects"
                        className='jd_footer_item_element_text'
                    >Projetos</a>
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

            <article className="jd_footer_completion">
                <p className="jd_footer_completion_text">jobsondeveloper.site | &#169; - {year} - Todos os direitos reservados</p>
            </article>
        </footer>
    )
}