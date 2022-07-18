import React, { useContext, useState, useEffect } from 'react'
import { appContext } from '../../context'
import { ThemeButtonWrapper, ThemeImg } from '../style'

export function ThemeButton() {
  const { themePage, effects: { getAssets, changeTheme } } = useContext(appContext)

  const [change, setChange] = useState(false)

  const triggerRender = () => {
    setChange(!change)
    changeTheme()
  }

  useEffect(() => {
    triggerRender()
  }, [])

  const moonIcon = getAssets('moon')
  const sunIcon = getAssets('sun')

  const darkTheme = themePage === 'dark'

  const icon = darkTheme ? moonIcon : sunIcon

  const btnText = darkTheme ? 'Off' : 'On'

  // const responsiveImg = window.innerWidth >= 769 ? getAssets('palms_white') : imgToShow

  return (
    <ThemeButtonWrapper src={icon} alt='theme icon'>
      <ThemeImg onClick={triggerRender} src={icon} alt='theme icon' />
      <p>{btnText}</p>
    </ThemeButtonWrapper>
  )
}
