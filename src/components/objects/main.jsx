import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select';
import { appContext } from '../../context'
import { ThemeButton } from '../atoms'
import { Slider } from '../molecules'
import { MainBar, MainImg, MainWrapper, NavBar, BackgroundImg, MasterWrapper, SelectWrapper } from '../style'

export function Main() {
  const { language: { menu }, locale, index, carruselImages, effects: { getAssets, setLanguage } } = useContext(appContext)

  const [imageToRender, setImageToRender] = useState(carruselImages[0])

  useEffect(() => { setImageToRender(carruselImages[index]) }, [carruselImages, index])

  const option = [
    { value: 'en', label: 'US' },
    { value: 'es', label: 'ES' },
  ];

  const handleLang = e => setLanguage(e.value);

  const defaultValue = option.filter(item => item.value === locale);

  return (
    <MasterWrapper>
      <BackgroundImg src={imageToRender} />
      <MainWrapper>
        <NavBar>
          <a href='#'>
            <MainImg src={getAssets('palms_white')} />
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
