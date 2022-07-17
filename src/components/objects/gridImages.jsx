import React, { useContext } from 'react'
import { appContext } from '../../context'
import { GridWrapper, VideoTag, TextDescriptivo } from '../style'
import video7 from '../../assets/videos/video7.mp4'
import video2 from '../../assets/videos/video2.mp4'
// import video3 from '../../assets/videos/video3.mp4'
import video6 from '../../assets/videos/video6.mp4'
import video5 from '../../assets/videos/video5.mp4'

export function GridImages() {
  const { language: { menu, titles }, effects: { getAssets } } = useContext(appContext)
  return (
    <>
      <TextDescriptivo>{titles[1]}</TextDescriptivo>
      <GridWrapper id={menu[1]}>
        <VideoTag controls poster={getAssets('patio1', 'jpeg')} >
          <source src={video2} type="video/mp4" />
        </VideoTag>
        <VideoTag controls poster={getAssets('imgVideo7', 'jpeg')} >
          <source src={video7} type="video/mp4" />
        </VideoTag>
        <VideoTag controls poster={getAssets('imgvideo5', 'jpeg')} >
          <source src={video5} type="video/mp4" />
        </VideoTag>
        <VideoTag controls poster={getAssets('imgVideo6', 'jpeg')} >
          <source src={video6} type="video/mp4" />
        </VideoTag>
      </GridWrapper>
    </>
  )
}