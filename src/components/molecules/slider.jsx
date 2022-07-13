import React, { useContext, useState } from 'react'
import { NextPrev, CardImg } from '../atoms'
import { appContext } from '../../context'
import { SliderCounter, WrapperSlider } from '../style'

export const Slider = () => {
    const { spritesLength, index, effects: {setIndex} } = useContext(appContext)

    const handleNext = () => index + 1 === spritesLength ? setIndex(0) : setIndex(index + 1)
    const handlePrev = () => index ? setIndex(index - 1) : setIndex(spritesLength - 1)

    return (
        <WrapperSlider>
            <NextPrev icon="<" onClick={handlePrev} />

            <CardImg index={index ? index - 1 : spritesLength - 1} />
            <CardImg index={index} />
            <CardImg index={index === spritesLength - 1 ? 0 : index + 1 } />

            <NextPrev icon=">" onClick={handleNext} />

            <SliderCounter>
                {index + 1 + " / " + spritesLength}
            </SliderCounter>
        </WrapperSlider>
    )
}