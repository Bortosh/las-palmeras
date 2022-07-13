import React, { useContext } from 'react'
import { appContext } from '../../context'
import { FooterWrapper, FooterImg } from '../style'

export function Footer() {
    const { language: { footer }, effects: {getAssets} } = useContext(appContext)
    return (
        <FooterWrapper>
            <p>{footer}</p>
            <FooterImg src={getAssets('palms_white')} />
        </FooterWrapper>
    )
}