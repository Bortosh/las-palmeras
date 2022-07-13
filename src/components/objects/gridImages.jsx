import React, { useContext } from 'react'
import { appContext } from '../../context'
import { GridImagesWrapper, GridWrapper } from '../style'

export function GridImages() {
    const { effects: {getAssets} } = useContext(appContext)
    return (
        <GridWrapper>
            <GridImagesWrapper src={getAssets('cocina1', 'jpeg')}/>
            <GridImagesWrapper src={getAssets('cocina2', 'jpeg')}/>
            <GridImagesWrapper src={getAssets('patio1', 'jpeg')}/>
            <GridImagesWrapper src={getAssets('piscina', 'jpeg')}/>
            <GridImagesWrapper src={getAssets('piscina', 'jpeg')}/>
        </GridWrapper>
    )
}