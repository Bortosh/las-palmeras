import React from "react";
import { useContext } from "react";
import { appContext } from "../../context";
import { WrapperAbout, WrapperAboutDescription } from "../style";
import Gallery from "./Gallery";
import videoEvento1 from '../../assets/videos/videoEvento1.mp4'
import videoEvento2 from '../../assets/videos/videoEvento2.mp4'
import videoEvento3 from '../../assets/videos/videoEvento3.mp4'
import videoEvento4 from '../../assets/videos/videoEvento4.mp4'
import videoEvento5 from '../../assets/videos/videoEvento5.mp4'
import videoEvento6 from '../../assets/videos/videoEvento6.mp4'
import evento1 from '../../assets/evento1.jpeg'
import evento2 from '../../assets/evento2.jpeg'
import evento3 from '../../assets/evento3.jpeg'

// CSS
import '../../estilos/eventos.css'

const Event = () => {

    const { language: { menu, textEvent, titleEvent }, effects: { getAssets } } = useContext(appContext)

    const videos = [
        { poster: getAssets('imgVideoEvento4', 'jpeg'), src: videoEvento4 },
        { poster: getAssets('imgVideoEvento5', 'jpeg'), src: videoEvento5 },
        { poster: getAssets('imgVideoEvento2', 'jpeg'), src: videoEvento2 },
        { poster: getAssets('imgVideoEvento1', 'jpeg'), src: videoEvento1 },
        { poster: getAssets('imgVideoEvento3', 'jpeg'), src: videoEvento3 },
        { poster: getAssets('imgVideoEvento6', 'jpeg'), src: videoEvento6 },
    ]

    const imagenes = [evento1, evento2, evento3]

    return (
        <>
            <WrapperAbout id={menu[3]}
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >
                <h1>{titleEvent}</h1>
                <WrapperAboutDescription>
                    {textEvent.map((item, index) =>
                        <p key={index}>{item}</p>
                    )}
                </WrapperAboutDescription>
            </WrapperAbout>
            <Gallery images={imagenes} />
            <div 
                className="wrapper-videos"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >
                {videos.map(({ poster, src, }, index) => (
                    <video controls poster={poster} key={index} className='videos'>
                        <source src={src} type="video/mp4" />
                    </video>
                ))}

            </div>
        </>
    )

}

export default Event;