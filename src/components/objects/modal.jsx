import React, { useContext } from 'react'
import { appContext } from '../../context'
import { ModalBackground, ModalWrapper, ModalImg } from '../style'

export function Modal() {

    const { effects: {getAssets} } = useContext(appContext)

    return (
        <>
            <ModalBackground />
            <ModalWrapper>
                <ModalImg />
            </ModalWrapper>
        </>
    )
}
