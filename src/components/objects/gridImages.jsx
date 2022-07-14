import React, { useContext } from 'react'
import { appContext } from '../../context'
import { GridWrapper, VideoTag } from '../style'
import video1 from '../../assets/videos/video1.mp4'
import video2 from '../../assets/videos/video2.mp4'
import video3 from '../../assets/videos/video3.mp4'
import video4 from '../../assets/videos/video4.mp4'

export function GridImages() {
  const { effects: { getAssets } } = useContext(appContext)
  return (
    <GridWrapper>
      <VideoTag controls poster={getAssets('patio1', 'jpeg')} >
        <source src={video2} type="video/mp4" />
      </VideoTag>
      <VideoTag controls poster={getAssets('cocina2', 'jpeg')} >
        <source src={video1} type="video/mp4" />
      </VideoTag>
      <VideoTag controls poster={getAssets('cocina1', 'jpeg')} >
        <source src={video3} type="video/mp4" />
      </VideoTag>
      <VideoTag controls poster={getAssets('piscina', 'jpeg')} >
        <source src={video4} type="video/mp4" />
      </VideoTag>
    </GridWrapper>
  )
}