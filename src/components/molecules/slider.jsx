import React, { useContext, useEffect } from 'react'
import { CardImg } from '../atoms'
import { appContext } from '../../context'
import { SliderCounter, WrapperSlider } from '../style'

export const Slider = () => {
  const { spritesLength, index, effects: { setIndex, setShowModal } } = useContext(appContext)

  const handleNext = () => index + 1 === spritesLength ? setIndex(0) : setIndex(index + 1)
  const handlePrev = () => index ? setIndex(index - 1) : setIndex(spritesLength - 1)

  const handleOpen = () => setShowModal(true)


  useEffect(() => {
    const timer = setTimeout(() => handleNext(), 5000);
    return () => clearTimeout(timer)
  }, [handleNext])

  const prevIndex = index ? index - 1 : spritesLength - 1
  const nextIndex = index === spritesLength - 1 ? 0 : index + 1
  const counterText = index + 1 + " / " + spritesLength

  return (
    <WrapperSlider>
      <CardImg index={prevIndex} onClick={handlePrev} />
      <CardImg index={index} onClick={handleOpen} />
      <CardImg index={nextIndex} onClick={handleNext} />
      <SliderCounter>
        {counterText}
      </SliderCounter>
    </WrapperSlider>
  )
}