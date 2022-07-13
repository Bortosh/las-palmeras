import styled from 'styled-components'

export const MasterWrapper = styled.div.attrs({
    className:'| MasterWrapper |'
})`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #2F3033;
    overflow: hidden;
    width: 100%;
`

export const MainWrapper = styled.div.attrs({
    className:'| MainWrapper |'
})`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    width: 100%;
`

export const BackgroundImg = styled.img.attrs({
    className:'| BackgroundImg |'
})`
    position: absolute;
    width: 100%;
    object-fit: cover;
    opacity: 0.4;
    height: 100vh;
    filter: blur(8px);
    transform: scale(1.03);
`

export const MainBar = styled.ul.attrs({
    className:'| MainBar |'
})`
    color: #ffffff;
    display: flex;
    gap: 50px;
    font-size: 32px;
    font-weight: 400;
    z-index: 100;
    li {
        list-style-type: none;
    }
`
export const MainImg = styled.img.attrs({
    className:'| MainImg |'
})`
    width: 200px;
    z-index: 100;
`

export const NavBar = styled.nav.attrs({
    className:'| NavBar |'
})`
    display: flex;
    justify-content: space-between;
    max-width: 1320px;
    width: 100%;
    padding: 0 40px;
`

export const WhatsappWrapper = styled.a.attrs({
    className:'| WhatsappWrapper |'
})`
    display: flex;
    align-items: center;
    color: #2F3033;
    position: fixed;
    right: 60px;
    bottom: 40px;
    border-radius: 50px;
    background-color: #E5E5E5;
    padding: 4px 20px;
    gap: 12px;
    text-decoration: none;
    z-index: 1000;
    p {
        width: 90px;
        font-size: 14px;
        font-weight: 700;
    }
`

export const WhatsappIcon = styled.img.attrs({
    className:'| WhatsappIcon |'
})`
    width: 38px;
`

export const WrapperAbout = styled.div.attrs({
    className:'| WrapperAbout |'
})`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    width: 100%;
    background-color: #2F3033;
`

export const SliderEdges = styled.div.attrs({
    className:'| SliderEdges |'
})`
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    transition: all 1s ease;
    z-index: 200;
    opacity: 0;
    &:first-of-type {
        justify-content: flex-start;
        left: 0;
        padding-left: 1rem;
    }
    &:last-of-type {
        justify-content: flex-end;
        right: 0;
        padding-right: 1rem;
    }
`
export const SliderCounter = styled.span.attrs({
    className:'| SliderCounter |'
})`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: #0007;
    color: white;
    border-radius: 20px;
    padding: 0.2rem 0.8rem;
    cursor: default;
    font-weight: 600;
    width: fit-content;
    opacity: 0;
    transition: all 1s ease;
    z-index: 100;
`

export const WrapperAboutDescription = styled.div.attrs({
    className:'| WrapperAboutDescription |'
})`
    padding: 60px 0;
    max-width: 1200px;
    font-size: 18px;
    color: #f2f2f2;
`

export const WrapperSlider = styled.div.attrs({
    className:'| WrapperSlider |'
})`
    display: flex;
    align-items: center;
    position: relative;
    height: 50vh;
    width: 100%;
    justify-content: center;
    &:hover ${SliderCounter},
    &:hover ${SliderEdges}{
        opacity: 1;
        transition: all 2s ease;
    }
`

export const SliderImg = styled.img.attrs({
    className:'| SliderImg |'
})`
    cursor: pointer;
    height: 100%;
    object-fit: cover;
    z-index: 100;
    width: 100%;
`

export const SliderBtn = styled.button.attrs({
    className:'| SliderBtn |'
})`
    font-size: 20px;
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #0007;
`

export const MapWrapper = styled.iframe.attrs({
    className:'| MapWrapper |'
})`
    width: 100%;
    max-width: 1200px;
    height: 80vh;
    border-radius: 4px;
    margin: 120px 40px;
    border: none;
`

export const FooterImg = styled.img.attrs({
    className:'| FooterImg |'
})`
    background-color: #2F3033;
    width: 200px;
    padding: 2rem;
`

export const FooterWrapper = styled.div.attrs({
    className:'| FooterWrapper |'
})`
    color: white;
`

export const GridWrapper = styled.div.attrs({
    className:'| GridWrapper |'
})`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    max-width: 1200px;
    width: 100%;
`

export const GridImagesWrapper = styled.img.attrs({
    className:'| GridImagesWrapper |'
})`
    border-radius: 4px;
    max-height: 250px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    &:nth-child(1) {
        grid-column-start: span 2;
        opacity: 0.4;
    }
`

export const ModalBackground = styled.div.attrs({
    className:'| ModalBackground |'
})`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #0007;
    z-index: 1000;
`

export const ModalWrapper = styled.div.attrs({
    className:'| ModalWrapper |'
})`
    position: fixed;
    width: 100%;
    max-width: 600px;
    height: 100%;
    max-height: 400px;
    background-color: #2F3033;
    z-index: 1200;
    bottom: 50%;
    transform: translateY(50%);
    border-radius: 4px;
    box-sizing: border-box; 
`




