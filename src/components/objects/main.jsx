import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '../../context'
import { Slider } from '../molecules'
import { MainBar, MainImg, MainWrapper, NavBar, BackgroundImg, MasterWrapper} from '../style'

export function Main() {
    const { language: {menu}, index, carruselImages, effects: {getAssets} } = useContext(appContext)

    const [imageToRender, setImageToRender] = useState(carruselImages[0])

    useEffect(() => {setImageToRender(carruselImages[index])},[index])

    return (
        <MasterWrapper>
            <MainWrapper>
                <BackgroundImg src={imageToRender}/>
                <NavBar>
                    <MainImg src={getAssets('palms_white')}/>
                    <MainBar>
                        {menu.map((item, index) => 
                            <li key={item + index}>
                                {item}
                            </li>
                        )}
                    </MainBar>
                </NavBar>
            </MainWrapper>
            <Slider />
        </MasterWrapper>
    )
}
