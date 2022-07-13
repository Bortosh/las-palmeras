import React, { useContext } from 'react'
import { appContext } from '../../context'
import { WrapperAbout, WrapperAboutDescription } from '../style'

export function About() {
    const { language: {description} } = useContext(appContext)
    return (
        <WrapperAbout>
            <WrapperAboutDescription>
                {description.map((item, index) => 
                    <p key={index}>{item}</p>
                )}
            </WrapperAboutDescription>
        </WrapperAbout>
    )
}
