import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '../../context'
import { ModalBackground, ModalWrapper, ModalImg } from '../style'

export function Modal() {
  const { carruselImages, showModal, index, effects: { setShowModal } } = useContext(appContext)

  const handleClose = () => setShowModal(false)

  const [imgToShow, setImgToShow] = useState(false)

  useEffect(() => {
    setImgToShow(carruselImages[index])
  }, [carruselImages, index, showModal])

  return (
    showModal && (
      <>
        <ModalBackground onClick={handleClose} />
        <ModalWrapper>
          <ModalImg src={imgToShow} />
        </ModalWrapper>
      </>
    )
  )
}
