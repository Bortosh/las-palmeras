import React, { useContext } from 'react'
import { appContext } from '../../context'
import { SliderImg } from '../style'

export const CardImg = ({ index = 0 }) => {
    const { carruselImages } = useContext(appContext)

    return (
        <SliderImg src={carruselImages[index]} />
    )
}