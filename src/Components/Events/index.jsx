import React from 'react';
import '../Events/index.css';
import homeBk1 from '../../assets/images/homeBK1.jpg';

export default function Events() {
    return(
        <><div id='events' className='events'>
            <h2 className='eventsTitle'>Medias</h2>
            <div className='container'>
                <a href='https://dancing-custard-a6d5cb.netlify.app/events/galery' className='galery-link'>
                    <div className='card'>
                        <img className='imagen' src={homeBk1} alt='teste' />
                    </div>
                </a>
                <a href='https://dancing-custard-a6d5cb.netlify.app/events/galery' className='galery-link'>
                    <div className='card'>
                        <img className='imagen' src={homeBk1} alt='teste' />
                    </div>
                </a>
                <a href='https://dancing-custard-a6d5cb.netlify.app/events/galery' className='galery-link'>
                    <div className='card'>
                        <img className='imagen' src={homeBk1} alt='teste' />
                    </div>
                </a>
                <a href='https://dancing-custard-a6d5cb.netlify.app/events/galery' className='galery-link'>
                    <div className='card'>
                        <img className='imagen' src={homeBk1} alt='teste' />
                    </div>
                </a>
                {/* <a href='' className='galery-link'>
                    <div className='card'>
                        <img className='imagen' src={homeBk1} />
                    </div>
                </a> */}
            </div>

        </div>
        </>
    )
}