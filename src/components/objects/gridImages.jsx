import React, { useContext } from 'react'
import { appContext } from '../../context'
import { GridWrapper, VideoTag, TextDescriptivo } from '../style'
import video7 from '../../assets/videos/video7.mp4'
import video2 from '../../assets/videos/video2.mp4'
import video6 from '../../assets/videos/video6.mp4'
import video5 from '../../assets/videos/video5.mp4'

export function GridImages() {
  const { language: { menu }, effects: { getAssets } } = useContext(appContext)

  const videos = [
    { poster: getAssets('patio1', 'jpeg'), src: video2 },
    { poster: getAssets('imgVideo7', 'jpeg'), src: video7 },
    { poster: getAssets('imgvideo5', 'jpeg'), src: video5 },
    { poster: getAssets('imgVideo6', 'jpeg'), src: video6 }
  ]

  return (
    <GridWrapper id={menu[1]}
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      {videos.map(({poster, src,}, index) => (
        <VideoTag controls poster={poster} key={index}>
          <source src={src} type="video/mp4" />
        </VideoTag>
      ))}
    </GridWrapper>
  )
}