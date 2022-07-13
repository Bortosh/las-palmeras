import React, { useContext } from 'react'
import { appContext } from '../../context'
import { FooterWrapper, FooterImg } from '../style'

export function Footer() {
  const { language: { designCopyRight, devCopyRight }, effects: { getAssets } } = useContext(appContext)
  return (
    <FooterWrapper>
      <a target="_blank" href='https://padronjose.com'>{designCopyRight}</a>
      <a target="_blank" href='https://github.com/Bortosh'>{devCopyRight}</a>
      <a href='#' >
        <FooterImg src={getAssets('palms_white')} />
      </a>
    </FooterWrapper>
  )
}