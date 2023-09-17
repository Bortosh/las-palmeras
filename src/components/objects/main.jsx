import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select';
import { appContext } from '../../context'
import { ThemeButton } from '../atoms'
import { Slider } from '../molecules'
import { MainBar, MainImg, MainWrapper, NavBar, BackgroundImg, MasterWrapper, SelectWrapper } from '../style'

export function Main() {
  const { imgToShow, themePage, language: { menu }, locale, index, carruselImages, effects: { getAssets, setLanguage, setImgToShow } } = useContext(appContext)

  const [imageToRender, setImageToRender] = useState(carruselImages[0])

  useEffect(() => { setImageToRender(carruselImages[index]) }, [carruselImages, index])

  useEffect(() => {
    setImgToShow(getAssets(themePage === 'dark' ? 'palms_black' : 'palms_white'))
  }, [themePage])

  const option = [
    { value: 'en', label: 'US' },
    { value: 'es', label: 'ES' },
  ];

  const handleLang = e => setLanguage(e.value);

  const defaultValue = option.filter(item => item.value === locale);

  const responsiveImg = window.innerWidth >= 769 ? getAssets('palms_white') : imgToShow

  return (
    <MasterWrapper>
      <BackgroundImg src={imageToRender} alt='imagen1' />
      <MainWrapper>
        <NavBar>
          <a href='#'>
            <MainImg src={responsiveImg} alt='imagen2'/>
          </a>
          <MainBar>
            {menu.map((item, index) =>
              <a key={item + index} href={`#${item}`}>
                <li >
                  {item}
                </li>
              </a>
            )}
            <SelectWrapper>
              <Select
                menuPlacement='auto'
                options={option}
                defaultValue={defaultValue}
                onChange={handleLang}
                isSearchable={false}
                variant
              />
            </SelectWrapper>
            <ThemeButton />
          </MainBar>
        </NavBar>
      </MainWrapper>
      <Slider />
    </MasterWrapper>
  )
}
