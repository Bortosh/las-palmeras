import React from 'react'
import { SliderBtn, SliderEdges } from '../style'

export const NextPrev = ({ icon, onClick }) => {
    return (
        <SliderEdges onClick={onClick}>
            <SliderBtn >
                {icon}
            </SliderBtn>
        </SliderEdges>
    )
}