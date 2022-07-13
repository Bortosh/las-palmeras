import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '../../context'
import { ModalBackground, ModalWrapper, ModalImg } from '../style'

export function Modal() {
    const { carruselImages, showModal, index, effects: { getAssets, setShowModal } } = useContext(appContext)

    const handleClose = () => {
        console.log('si sirve')
        setShowModal(false)
    }
    const [imgToShow, setImgToShow] = useState(false)

    useEffect(() => {
        setImgToShow(carruselImages[index])
    }, [index, showModal])

    return (
        showModal && (
            <>
                <ModalBackground onClick={ handleClose } />
                <ModalWrapper>
                    <ModalImg src={imgToShow} />
                </ModalWrapper>
            </>
        )
    )
}
