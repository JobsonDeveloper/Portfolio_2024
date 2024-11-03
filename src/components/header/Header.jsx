import React from 'react';
import './Header.scss';
import { useState } from 'react';
import { Button, Drawer } from '@mui/material';
import OptionsIco from '@mui/icons-material/Sort';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/home/icons/logo.ico';
import styled from 'styled-components';

const JDLink = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    color: #000;
`;

export const Header = () => {
    const [open, setOpen] = useState(false);

    const changeOpenDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <ul className="jd_header">
                <li className="jd_header_options" onClick={changeOpenDrawer(true)}>
                    <OptionsIco />
                </li>

                <li className="jd_header_logo">
                    <img src={logoImg} alt="" />
                </li>

                <li className="jd_header_contactMe">
                   <JDLink to='/contact_me'>Fale Comigo</JDLink>
                   {/* <Link to='/contact'>dd</Link> */}
                </li>

            </ul>

            <Drawer open={open} onClose={changeOpenDrawer(false)}>
                <ul className="jc_options_list">
                    <li className="jc_options_item">
                        <Link to='/'>Sobre mim</Link>
                    </li>
                    <li className="jc_options_item">
                        <Link to='/qualificacoes'>Qualificações</Link>
                    </li>
                    <li className="jc_options_item">
                        <Link to='/conhecimento'>Conhecimentos</Link>
                    </li>
                    <li className="jc_options_item">
                        <Link to='/projetos'>Projetos</Link>
                    </li>
                </ul>
            </Drawer>
        </>
    )
}