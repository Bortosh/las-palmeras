import React, { useState, useEffect, createContext } from "react";
import { enLang, esLang } from "../locales";
import { getTheme, newTheme, toogleTheme } from "../helpers";

export const appContext = createContext()

export const ContextProvider = ({ children }) => {
  const defaultLang = localStorage.getItem('lang')
  const setDefaultLang = lang => localStorage.setItem('lang', lang)
  const theme = getTheme()

  const [locale, setLocale] = useState('es' || defaultLang)
  const [index, setIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [themePage, setThemePage] = useState(getTheme())
  const [imgToShow, setImgToShow] = useState()

  const coords = "https://maps.google.com/maps?q=calle%2010%2019%20la%20torre%20rozo+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;?hl=en=&output=embed"
  const coordsFooter = 'https://www.google.com/maps?ll=3.619018,-76.421998&z=15&t=m&hl=en&gl=US&mapclient=embed&q=calle+10+19+la+torre+rozo'

  useEffect(() => { !defaultLang && setDefaultLang('es') }, [defaultLang])
  useEffect(() => { !defaultLang && setDefaultLang('es') }, [theme])

  const setLanguage = language => {
    setLocale(language)
    setDefaultLang(language)
  }

  const changeTheme = () => {
    toogleTheme()
    setThemePage(newTheme())
  }

  const languages = { es: esLang, en: enLang }

  const getAssets = (name, format = 'png') => require(`../assets/${name}.${format}`)

  const carruselImages = [
    getAssets('piscina', 'jpeg'),
    getAssets('cocina1', 'jpeg'),
    getAssets('cocina2', 'jpeg'),
    getAssets('patio1', 'jpeg')
  ]

  const effects = () => ({
    setLanguage,
    getAssets,
    setIndex,
    setShowModal,
    changeTheme,
    setImgToShow
  })

  const state = {
    locale,
    language: languages[locale],
    spritesLength: carruselImages.length,
    carruselImages,
    index,
    showModal,
    coords,
    coordsFooter,
    themePage,
    imgToShow,
    theme,
    effects: {
      ...effects()
    }
  }

  return (
    <appContext.Provider value={state}>
      {children}
    </appContext.Provider>
  )
}