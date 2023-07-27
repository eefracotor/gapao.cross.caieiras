import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
// import React, { useRef } from "react";
import './index.css';
import Img1 from '../../assets/images/Img1.jpg';
import Img2 from '../../assets/images/Img2.jpg';
import Img3 from '../../assets/images/Img3.jpg';
import Img4 from '../../assets/images/Img4.jpg';
import Img5 from '../../assets/images/Img5.jpg';
import Img6 from '../../assets/images/Img6.jpg';
import Img7 from '../../assets/images/Img7.jpg';
import Img8 from '../../assets/images/Img8.jpg';
import Img9 from '../../assets/images/Img9.jpg';
import Img10 from '../../assets/images/Img010.jpg';
import Img11 from '../../assets/images/Img011.jpg';
import Img12 from '../../assets/images/Img012.jpg';
import Img13 from '../../assets/images/Img013.jpg';

export default function Gallery(props) {
    var data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
    ]
    const [model, setModel] = useState(false);
    const [temImgSrc, setTemImgSrc] = useState('');
    const getImg = (imgSrc) => {
        // console.log(imgSrc)
        setTemImgSrc(imgSrc);
        setModel(true);
    }


    return(
        <div className="container-gallery" id='gallery'>
        {/* // <> */}
            <h2 className="galleryTitle ">Galeria</h2>
            <p> Galery: { props.num }!!</p>
            <div className={model? "model open" : "model"}>
                <img src={temImgSrc} alt="" />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className='container'>
                <div className='gallery'>
                    {data.map((item, index) => {
                        return(
                            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} style={{width: '100%'}} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}