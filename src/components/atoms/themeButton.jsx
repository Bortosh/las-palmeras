import React, { useContext, useState } from 'react'
import { appContext } from '../../context'
import { ThemeButtonWrapper, ThemeImg } from '../style'
import { getTheme, toogleTheme } from '../../helpers';

export function ThemeButton() {
  const { effects: { getAssets } } = useContext(appContext)

  const [change, setChange] = useState(false)

  const triggerRender = () => {
    setChange(!change)
    toogleTheme()
  }

  const moonIcon = getAssets('moon')
  const sunIcon = getAssets('sun')

  const darkTheme = getTheme() === 'dark'

  const icon = darkTheme ? moonIcon : sunIcon

  return (
    <ThemeButtonWrapper src={icon} alt='theme icon'>
      <ThemeImg onClick={triggerRender} src={icon} alt='theme icon' />
      <p>{darkTheme ? 'Off' : 'On'}</p>
    </ThemeButtonWrapper>
  )
}
