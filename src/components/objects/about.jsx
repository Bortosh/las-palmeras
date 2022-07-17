import React, { useContext } from 'react'
import { appContext } from '../../context'
import { WrapperAbout, WrapperAboutDescription, TextDescriptivo } from '../style'

export function About() {
  const { language: { menu, description, titles } } = useContext(appContext)
  return (
    <WrapperAbout id={menu[0]}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
      <TextDescriptivo>{titles[0]}</TextDescriptivo>
      <WrapperAboutDescription>
        {description.map((item, index) =>
          <p key={index}>{item}</p>
        )}
      </WrapperAboutDescription>
    </WrapperAbout>
  )
}
