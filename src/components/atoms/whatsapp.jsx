import React, { useContext } from 'react'
import { appContext } from '../../context'
import { WhatsappIcon, WhatsappWrapper } from '../style'

export function Whatsapp() {
    const { language: {contact}, effects: {getAssets}  } = useContext(appContext)
    const urlWhatsapp = 'https://api.whatsapp.com/send?phone='
    const contactNumber = 3164887193
    const mensaje = "&text=Hola, Nececito mas informacion sobre la finca Las Palmeras!"

    return (
        <WhatsappWrapper target='_blank' href={urlWhatsapp + contactNumber + mensaje}>
            <WhatsappIcon src={getAssets('whatsapp')} />
            <p>{contact}</p>
        </WhatsappWrapper>
    )
}
