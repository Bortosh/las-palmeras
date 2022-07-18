import React, { useContext } from 'react'
import { appContext } from '../../context'
import { MapWrapper } from "../style"

export const Map = () => {
  const { coords, language: { menu } } = useContext(appContext)

  return (
    <MapWrapper
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      id={menu[2]}
      src={coords}
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
    />
  )
}