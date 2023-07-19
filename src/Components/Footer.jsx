import React from 'react';
import './Footer.css';
import github from "../assets/Icons/github.svg";
import linkedin from '../assets/Icons/linkedin.svg'
import briefcase from '../assets/Icons/briefcase.svg'

export default function Footer() {
    return(
        <footer className='footer'>
            <div className='footer-galpao'></div>
            <div className='developer'>
                <h3>All Rights Reserved for Efrain Conopoy. 2023 - Designed and Developed by Efrain Conopoy.</h3>
                <div className='social-footer'>
                    <a href='#' target='_blank'><img src={briefcase} className='icon-social-footer' alt='Logo de um portfolio' /></a>
                    <a href='https://github.com/eefracotor' target='_blank'><img src={github} className='icon-social-footer' alt='Logo de GitHub ' /></a>
                    <a href='https://www.linkedin.com/in/eefracotor/' target='_blank'><img src={linkedin} className='icon-social-footer' alt='Logo de LinkedIn' /></a>
                </div>
            </div>
        </footer>
    );
};