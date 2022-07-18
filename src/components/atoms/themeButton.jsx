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
  const darkMoonIcon = getAssets('darkMoon')
  const sunIcon = getAssets('sun')

  const darkTheme = themePage === 'dark'

  const icon = darkTheme ? moonIcon : sunIcon

  const icon2 = darkTheme ? darkMoonIcon : sunIcon

  const btnText = darkTheme ? 'Off' : 'On'

  const responsiveIcon = window.innerWidth >= 769 ? icon : icon2

  return (
    <ThemeButtonWrapper src={responsiveIcon} alt='theme icon'>
      <ThemeImg onClick={triggerRender} src={responsiveIcon} alt='theme icon' />
      <p>{btnText}</p>
    </ThemeButtonWrapper>
  )
}
