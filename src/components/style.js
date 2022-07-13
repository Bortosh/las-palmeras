import styled from 'styled-components'

export const Theme = styled.div.attrs({
	className: 'theme theme--animation',
})``;

export const MasterWrapper = styled.div.attrs({
  className: '| MasterWrapper |'
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
  className: '| MainWrapper |'
})`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    width: 100%;

    @media (max-width: 720px) {
        position: fixed;
        z-index: 800;
        background-color: #2F3033;
    }
`

export const BackgroundImg = styled.img.attrs({
  className: '| BackgroundImg |'
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
  className: '| MainBar |'
})`
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    font-size: 32px;
    font-weight: 400;
    z-index: 100;
    padding: 0;
    margin: 0;
    li {
        list-style-type: none;
        padding: none;
    }
    @media (max-width: 720px) {
        gap: 0.5rem;
        width: 100%;
        justify-content: space-between;
        li {
          font-size: 22px;
        }
    }
`
export const MainImg = styled.img.attrs({
  className: '| MainImg |'
})`
    width: 160px;
    z-index: 100;
    object-fit: contain;
`

export const NavBar = styled.nav.attrs({
  className: '| NavBar |'
})`
    display: flex;
    justify-content: space-between;
    max-width: 1320px;
    width: 100%;
    padding: 0 40px;

    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
        font-size: 26px;
    }

    @media (max-width: 720px) {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }
`

export const WhatsappWrapper = styled.a.attrs({
  className: '| WhatsappWrapper |'
})`
    display: flex;
    align-items: center;
    color: #2F3033;
    position: fixed;
    right: 2vw;
    bottom: 2vh;
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

    @media (max-width: 480px) {
        padding: 0px 10px;
        border-radius: 30px;
        p {
            font-size: 12px;
        }
    }
`

export const WhatsappIcon = styled.img.attrs({
  className: '| WhatsappIcon |'
})`
    width: 38px;

    @media (max-width: 480px) {
        width: 28px;
    }
`

export const WrapperAbout = styled.div.attrs({
  className: '| WrapperAbout |'
})`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    width: 100%;
    background-color: #2F3033;
`

export const SliderEdges = styled.div.attrs({
  className: '| SliderEdges |'
})`
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    transition: all 1s ease;
    z-index: 200;
    padding: 0.5rem;
    opacity: 0;
    &:first-of-type {
        justify-content: flex-start;
        left: 0;
    }
    &:last-of-type {
        justify-content: flex-end;
        right: 0;
    }
`
export const SliderCounter = styled.span.attrs({
  className: '| SliderCounter |'
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
    width: fit-content;
    opacity: 0;
    transition: all 1s ease;
    z-index: 100;
`

export const WrapperAboutDescription = styled.div.attrs({
  className: '| WrapperAboutDescription |'
})`
    padding: 60px 20px;
    max-width: 1200px;
    font-size: 18px;
    color: #f2f2f2;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    p {
      margin: 0
    }
`

export const WrapperSlider = styled.div.attrs({
  className: '| WrapperSlider |'
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
  className: '| SliderImg |'
})`
    cursor: pointer;
    height: 100%;
    object-fit: cover;
    z-index: 100;
    max-width: 100%;
    width: 100%;
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(3) {
      background-color: blue;
    }

    @media (max-width: 480px) {
      max-width: 80vw;
    }
`

export const SliderBtn = styled.button.attrs({
  className: '| SliderBtn |'
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
  className: '| MapWrapper |'
})`
    width: 100%;
    max-width: 1200px;
    height: 80vh;
    border-radius: 4px;
    padding: 60px 20px;
    border: none;
    border-radius: 4px;
    overflow: hidden;
`

export const FooterImg = styled.img.attrs({
  className: '| FooterImg |'
})`
    background-color: #2F3033;
    width: 200px;
    margin-top: 40px;
`

export const FooterWrapper = styled.div.attrs({
  className: '| FooterWrapper |'
})`
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 60px 20px;

    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
    }
`

export const GridWrapper = styled.div.attrs({
  className: '| GridWrapper |'
})`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    max-width: 1200px;
    width: 100%;
    padding: 60px 20px;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0.5rem;
    }
`

export const GridImagesWrapper = styled.img.attrs({
  className: '| GridImagesWrapper |'
})`
    border-radius: 4px;
    max-height: 300px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    &:nth-child(1) {
        grid-column-start: span 2;
        opacity: 0.4;
    }
`

export const VideoTag = styled.video.attrs({
  className: '| VideoTag |'
})`
    border-radius: 4px;
    max-height: 300px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    &:nth-child(1) {
        grid-column-start: span 2;
        opacity: 0.4;
    }

    &:nth-child(2) {
        grid-row-start: span 2;
        opacity: 0.4;
        max-height: 100%;
    }
`

export const ModalBackground = styled.div.attrs({
  className: '| ModalBackground |'
})`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #0007;
    z-index: 1000;
`

export const ModalWrapper = styled.div.attrs({
  className: '| ModalWrapper |'
})`
    position: fixed;
    width: 90%;
    height: 90%;
    background-color: #2F303370;
    z-index: 1200;
    bottom: 50%;
    transform: translateY(50%);
    border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
`

export const ModalImg = styled.img.attrs({
  className: '| ModalImg |'
})`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ThemeButtonWrapper = styled.div.attrs({
  className: '| ThemeButton |'
})`
  display: flex;
  align-items: center;
  gap: 16px;
  border: 2px solid #f2f2f2;
  border-radius: 30px;
  padding-left: 40px;
  padding-right: 16px;
  position: relative;
  p {
    margin: 0;
    font-size: 26px;
  }
  @media (max-width: 720px) {
    padding-left: 32px;
    padding-right: 14px;
    p {
      font-size: 22px;
    }
  }
`

export const ThemeImg = styled.img.attrs({
  className: '| ThemeButton |'
})`
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
    border: 3px solid #f2f2f2;
    padding: 4px;
    box-sizing: initial;
    position: absolute;
    left: -1px;

    @media (max-width: 720px) {
        width: 14px;
        height: 14px;
  }
`

export const SelectWrapper = styled.div.attrs({
  className: '| SelectWrapper |'
})`
    display: flex;
    align-items: center;
    gap: 2rem;

    .css-qc6sy-singleValue {
        color: #f2f2f2;
    }

    .css-1s2u09g-control,
    .css-1pahdxg-control {
        display: flex;
        flex-direction: row-reverse;
        font-size: 26px;
    }

    .css-1pahdxg-control,
    .css-1s2u09g-control {
        background-color: transparent;
        border: none;
        box-shadow: none;
    }

    .css-319lph-ValueContainer,
    .css-tlfecz-indicatorContainer,
    .css-1gtu0rj-indicatorContainer {
        padding: 0;
    }

    .css-tlfecz-indicatorContainer {
        color: #f2f2f2;
    }

    .css-1gtu0rj-indicatorContainer {
        color: #f2f2f2;
    }

    .css-26l3qy-menu {
      div {
          background-color: #2F3033;
          padding: 5px;
        }
    }

    .css-1okebmr-indicatorSeparator {
        display: none;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;

        .css-qc6sy-singleValue {
            font-size: 1.5rem;
        }
    }
`
