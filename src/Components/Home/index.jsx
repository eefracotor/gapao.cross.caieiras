import React from 'react';
import '../Home/index.css';
import logoMain from '../../assets/images/logoCuadrado.png';
// import nombreLogo from '../../assets/images/logoNombre.png';

export default function Home() {
    return(
        <>
        <div className='home' id='home'>
            {/* <h2>Home</h2> */}
            <div className='home-main'>
                <div className='logo'>
                    <img className='logo' src={logoMain} alt="" />
                </div>
                {/* <div className='nombre'>
                    <img className='nombre' src={nombreLogo} alt="" />
                </div> */}
            </div>

        </div>
        </>
    );
};