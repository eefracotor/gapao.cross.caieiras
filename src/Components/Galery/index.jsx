import React from "react";
// import React, { useRef } from "react";
import '../Galery/index.css';

export default function Galery(props) {
    // let refEvents = useRef();
    // let refGalery= useRef();

    // const handleReturn = (e) => {
    //     refGalery.current.style.display === 'none' ? refGalery.current.style.display='flex' : refGalery.current.style.display = 'none'
    //     console.log('pronto')
    // }


    return(
        <div className="galery" id='galery'>
            <h2 className="galeryTitle ">Galeria</h2>
            <p> Galery: { props.num }!!</p>
            {/* <a href="/#events" ref={refEvents} onClick={props.handleReturn}> Voltar</a> */}

        </div>
    )
}