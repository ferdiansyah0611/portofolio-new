import React from 'react'
import {
  Tooltip
} from '@mui/material'
import useLanguange from '@hook/useLanguange'

const AboutHash = () => {
  const languange = useLanguange()
  return (
    <section id="about">
      <div>
        <h2>{languange('Tentang Saya')}</h2>
        <div className="column">
          <Tooltip title={"Photo from Ferdiansyah"}>
            <img width="auto" height="350px" onContextMenu={(e) => e.preventDefault()} src="/me-img.jpg" className="w-auto transform hover:scale-90 transition 1000s" alt="profile"/>
          </Tooltip>
        </div>
        <div className="column">
          <p className="font-light">
            {languange('tentang-description')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutHash