import React from 'react'
import {
  Tooltip
} from '@mui/material'
import languange from '../../resource/languange'

const AboutHash = ({lang}) => (
  <section id="about">
    <div>
      <h2>{languange(lang, 'Tentang Saya')}</h2>
      <div className="column">
        <Tooltip title={"Photo from Ferdiansyah"}>
          <img width="auto" height="350px" onContextMenu={(e) => e.preventDefault()} src="/me-img.jpg" className="w-auto transform hover:scale-90 transition 1000s" alt="profile"/>
        </Tooltip>
      </div>
      <div className="column">
        <p className="font-light">
          {languange(lang, 'tentang-description')}
        </p>
      </div>
    </div>
  </section>
)

export default AboutHash