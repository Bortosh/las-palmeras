import React, { useState, useEffect, createContext } from "react";
import { enLang, esLang } from "../locales";

export const appContext = createContext()

export const ContextProvider = ({children}) => {
    const defaultLang = localStorage.getItem('lang')
    const setDefaultLang = lang => localStorage.setItem('lang', lang)

    const [locale, setLocale] = useState(defaultLang || 'es')
    const [index, setIndex] = useState(0)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {!defaultLang && setDefaultLang('es')} ,[])

    const setLanguage = language => {
        setLocale(language)
        setDefaultLang(language)
    }

    const languages = {
        es: esLang,
        en: enLang
    }

    const getAssets = ( name, format = 'png' ) => (
        require(`../assets/${name}.${format}`)
    )

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
        setShowModal
    })

    const state = {
        locale,
        language: languages[locale],
        spritesLength: carruselImages.length,
        carruselImages,
        index,
        showModal,
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