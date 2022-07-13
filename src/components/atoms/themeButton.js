import React, { useContext } from 'react'
import { appContext } from '../../context'
import { ThemeButtonWrapper, ThemeImg } from '../style'
import { getTheme, toogleTheme } from '../../helpers';

export function ThemeButton() {
  const { effects: { getAssets } } = useContext(appContext)

  const moonIcon = getAssets('moon')
  const sunIcon = getAssets('sun')

  const darkTheme = getTheme() === 'dark'

  const icon = darkTheme ? moonIcon : sunIcon

  return (
    <ThemeButtonWrapper onClick={toogleTheme} src={icon} alt='theme icon'>
      <ThemeImg onClick={toogleTheme} src={icon} alt='theme icon' />
      <p>{darkTheme ? 'Off' : 'On'}</p>
    </ThemeButtonWrapper>
  )
}
