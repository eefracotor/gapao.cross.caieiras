import React, { useRef, useState } from 'react';
import '../Events/index.css';
import homeBk1 from '../../assets/images/homeBK1.jpg';
import Galery from '../Galery';
// import { Link } from 'react-router-dom';
// const idGalery = '';

export default function Events() {
    const [idGalery, setIdGalery] = useState('');
    // let idGalery
    let refGaleryBtn = useRef(),
        refGalery = useRef(),
        refEvents = useRef();
    const handleSelectGalery = (e) => {
        console.log("handleSelect!! " + e.target.id);
        setIdGalery(e.target.id);
        console.log("idGalery!! " + idGalery);
        refGalery.current.style.display === 'none' ? refGalery.current.style.display='flex' : refGalery.current.style.display = 'none'
    }

    const handleReturn = (e) => {
        refGalery.current.style.display = 'none'
    }
    return(
        <><div id='events' className='events' ref={refEvents}>
            <h2 className='eventsTitle'>Medias</h2>
            <div className='container'>
                <a onClick={handleSelectGalery} href='/#galery' ref={refGaleryBtn} className='galery-link'  id='1'>
                    <div className='card' id='1'>
                        <img className='imagen' src={homeBk1} alt='teste'id='1' />
                    </div>
                </a>
                <a onClick={handleSelectGalery} href='/#galery' ref={refGaleryBtn} className='galery-link'  id='2'>
                    <div className='card' id='2'>
                        <img className='imagen' src={homeBk1} alt='teste' id='2' />
                    </div>
                </a>
                <a onClick={handleSelectGalery} href='/#galery' ref={refGaleryBtn} className='galery-link'  id='3'>
                    <div className='card' id='3'>
                        <img className='imagen' src={homeBk1} alt='teste' id='3'/>
                    </div>
                </a>
                <a onClick={handleSelectGalery} href='/#galery' ref={refGaleryBtn} className='galery-link'  id='4'>
                    <div className='card' id='4'>
                        <img className='imagen' src={homeBk1} alt='teste' id='4' />
                    </div>
                </a>
                {/* <a href='' className='galery-link'>
                    <div className='card'>
                        <img className='imagen' src={homeBk1} />
                    </div>
                </a> */}
            </div>
            <div id='galeryContainer' ref={refGalery} style={{display:'none'}}>
                <a href="/#events" ref={refEvents} onClick={handleReturn} className='return-galery'> Voltar</a>

                <Galery 
                    num={idGalery}
                    // returnGalery={handleSelectGalery} 
                />
            </div>

        </div>
        </>
    )
}