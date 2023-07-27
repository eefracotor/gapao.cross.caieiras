import React, { useRef, useState } from 'react';
import '../Events/index.css';
import homeBk1 from '../../assets/images/homeBK1.jpg';
import Gallery from '../Gallery';
// import { Link } from 'react-router-dom';
// const idGallery = '';

export default function Events() {
    const [idGallery, setIdGallery] = useState('');
    // let idGallery
    let refGalleryBtn = useRef(),
        refGallery = useRef(),
        refEvents = useRef();
    const handleSelectGallery = (e) => {
        console.log("handleSelect!! " + e.target.id);
        setIdGallery(e.target.id);
        console.log("idGallery!! " + idGallery);
        refGallery.current.style.display === 'none' ? refGallery.current.style.display='flex' : refGallery.current.style.display = 'none'
    }

    const handleReturn = (e) => {
        refGallery.current.style.display = 'none'
    }
    return(
        <><div id='events' className='events' ref={refEvents}>
            <h2 className='eventsTitle'>Medias</h2>
            <div className='container'>
                <a onClick={handleSelectGallery} href='/#gallery' ref={refGalleryBtn} className='gallery-link'  id='1'>
                    <div className='card' id='1'>
                        <img className='imagen' src={homeBk1} alt='teste'id='1' />
                    </div>
                </a>
                <a onClick={handleSelectGallery} href='/#gallery' ref={refGalleryBtn} className='gallery-link'  id='2'>
                    <div className='card' id='2'>
                        <img className='imagen' src={homeBk1} alt='teste' id='2' />
                    </div>
                </a>
                <a onClick={handleSelectGallery} href='/#gallery' ref={refGalleryBtn} className='gallery-link'  id='3'>
                    <div className='card' id='3'>
                        <img className='imagen' src={homeBk1} alt='teste' id='3'/>
                    </div>
                </a>
                <a onClick={handleSelectGallery} href='/#gallery' ref={refGalleryBtn} className='gallery-link'  id='4'>
                    <div className='card' id='4'>
                        <img className='imagen' src={homeBk1} alt='teste' id='4' />
                    </div>
                </a>
                {/* <a href='' className='gallery-link'>
                    <div className='card'>
                        <img className='imagen' src={homeBk1} />
                    </div>
                </a> */}
            </div>
            <div id='galleryContainer' ref={refGallery} style={{display:'none'}}>
                <a href="/#events" ref={refEvents} onClick={handleReturn} className='return-gallery'> Voltar</a>

                <Gallery 
                    num={idGallery}
                    // returnGallery={handleSelectGallery} 
                />
            </div>

        </div>
        </>
    )
}