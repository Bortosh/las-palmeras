import React, { useContext, useState, useEffect } from 'react'
import { appContext } from '../../context'
import { FooterWrapper, FooterImg, Direccion } from '../style'

export function Footer() {
  const { 
    coordsFooter,
    themePage,
    language: { designCopyRight, devCopyRight, address },
    effects: { getAssets } 
  } = useContext(appContext)

  const [imgToShow, setImgToShow] = useState()

  useEffect(() => {
    setImgToShow(getAssets( themePage === 'dark' ? 'palms_black' : 'palms_white'))
  }, [themePage])
  
  return (
    <FooterWrapper>
      <a target="_blank" href='https://padronjose.com'>{designCopyRight}</a>
      <a target="_blank" href='https://github.com/Bortosh'>{devCopyRight}</a>
      <a href='#' >
        <FooterImg src={imgToShow} />
      </a>
      <Direccion href={coordsFooter} target='_blank'>{address}</Direccion>
    </FooterWrapper>
  )
}