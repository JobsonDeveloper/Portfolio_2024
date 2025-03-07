import React from 'react';
import './Header.scss';
import { useState } from 'react';
import { Button, Drawer } from '@mui/material';
import OptionsIco from '@mui/icons-material/Sort';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/icons/logo.ico';
import styled from 'styled-components';
import optionsImg from '../../assets/icons/Options 1.png';
import gifMario from '../../assets/icons/2d-mario-running.gif';
import gifPacMan from '../../assets/icons/pacMan.gif';

// Components
import imgApresentacaoOne from "../../assets/images/imgApresentacaoOne.webp";
import imgApresentacaoTow from "../../assets/images/imgApresentacaoTow.webp";

const JDLink = styled(Link)`
    display: flex;
    text-decoration: none;
    font-size: var(--jd_text_font_size);
    color: var(--jd_secondary_color);
    cursor: pointer;
    transition: .5s;
    width: 100%;
    height: 100%;
`;

const JDSubtitulo = styled.h4`
    width: 100%;
    font-size: var(--jd_subtitle_font_size);
    justify-content: start;
    color: var(--jd_secondary_color);
    position: relative;
`;

export const Header = () => {
    const [open, setOpen] = useState(false);

    const changeOpenDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <article className="jd_header_navigation">
                <ul className="jd_header">
                    <ul className="jd_header_options">
                        <li className="jd_header_options_item jd_options_imagem" onClick={changeOpenDrawer(true)}>
                            <img src={optionsImg} alt="Options" className='jd_header_options_icon' />
                        </li>
                        <li className="jd_header_options_item jd_options_logo">
                            <Link to='/' className='jd_options_logo_link'>
                                <img src={logoImg} alt="Logo" className='jd_header_logo_link_img' />
                            </Link>
                        </li>
                        <li className="jd_header_options_item jd_options_link">
                            <JDLink to='mailto:jobsondeveloper@gmail.com' className='jd_header_link'>Fale Comigo</JDLink>
                        </li>
                    </ul>
                </ul>
            </article>

            <article className="jd_header_navigation_desktop_container">
                <ul className="jd_header_navigation_desktop">
                    <li className="jd_navigation_desktop_item jd_navigation_desktop_item_logo">
                        <Link to="/" className='jd_navigation_desktop_item_logo_link'>
                            <img src={logoImg} alt="Logo" className='jd_navigation_item_logo_img' />
                            <p className="jd_navigation_item_site">
                                jobsondeveloper
                                <span className="jd_item_domain">.vercel</span>
                            </p>
                        </Link>
                    </li>
                    <li className="jd_navigation_desktop_item jd_navigation_desktop_item_links">
                        <ul className="jd_navigation_desktop_links_list">
                            <li className="jd_navigation_desktop_links_list_item">
                                <Link to="/" className='jd_navigation_desktop_links_item_link'>
                                    Apresentação
                                </Link>
                            </li>
                            <li className="jd_navigation_desktop_links_list_item">
                                <Link to="/qualifications" className='jd_navigation_desktop_links_item_link'>
                                    Qualificações
                                </Link>
                            </li>
                            <li className="jd_navigation_desktop_links_list_item">
                                <Link to="/conhecimentos" className='jd_navigation_desktop_links_item_link'>
                                    Conhecimentos
                                </Link>
                            </li>
                            <li className="jd_navigation_desktop_links_list_item">
                                <Link to="/projetos" className='jd_navigation_desktop_links_item_link'>
                                    Projetos
                                </Link>
                            </li>
                            <li className="jd_navigation_desktop_links_list_item">
                                <Link to="https://docs.google.com/document/d/1AChPUwd_h-0ZXn8dbDYqhs9ifk7wnXya/edit?usp=sharing&ouid=109382985964896447463&rtpof=true&sd=true" className='jd_navigation_desktop_links_item_link'>
                                    Currículo
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </article>

            <article className="jd_initial_image">
                <img
                    src={imgApresentacaoOne}
                    alt="Imagem de apresentação, contendo Jobson dentro de um escritório com computadores e códigos"
                    className="jd_initial_image_imgOne"
                />
                <img
                    src={imgApresentacaoTow}
                    alt="Imagem de apresentação, contendo Jobson dentro de um escritório com computadores e códigos"
                    className="jd_initial_image_imgTow"
                />
            </article>

            <Drawer open={open} onClose={changeOpenDrawer(false)} className='jd_options_drawer'>
                <JDSubtitulo className='jd_options_subtitle'>Conheça mais sobre mim</JDSubtitulo>

                <ul className="jd_options_list">
                    <li className="jd_options_item">
                        <JDLink to='/' className='jd_options_links'>Apresentao</JDLink>
                    </li>
                    <li className="jd_options_item">
                        <JDLink to='/qualifications' className='jd_options_links'>Qualificações</JDLink>
                    </li>
                    <li className="jd_options_item">
                        <JDLink to='/conhecimentos' className='jd_options_links'>Conhecimentos</JDLink>
                    </li>
                    <li className="jd_options_item">
                        <JDLink to='/projetos' className='jd_options_links'>Projetos</JDLink>
                    </li>
                    <li className="jd_options_item">
                        <JDLink
                            to='https://docs.google.com/document/d/1AChPUwd_h-0ZXn8dbDYqhs9ifk7wnXya/edit?usp=sharing&ouid=109382985964896447463&rtpof=true&sd=true'
                            className='jd_options_links'
                            target='_blank'
                        >
                            Currículo
                        </JDLink>
                    </li>
                </ul>

                <div className="sh_options_footer">
                    <div className="sh_options_footer_gaming">
                        <div className='sh_gaming_ghost_gif'></div>
                        <img src={gifPacMan} alt="Gif do Pac Man" className='sh_gaming_pacMan_gif' />
                        <img src={gifMario} alt="Gif do Mário" className='sh_gaming_mario_gif' />
                    </div>
                </div>
            </Drawer>
        </>
    )
}