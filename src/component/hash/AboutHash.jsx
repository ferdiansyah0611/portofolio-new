import React from 'react'
import {
  Tooltip
} from '@mui/material'
import languange from '../../resource/languange'

const AboutHash = ({lang}) => (
  <section id="about" className="w-full md:w-2/5 mt-1 sm:mt-10">
    <div className="flex flex-wrap bg-white dark:bg-gray-800 shadow-md justify-center">
      <h2 className="font-bold text-3xl text-center p-3 md:p-6 xl:p-10 dark:text-white">{languange(lang, 'Tentang Saya')}</h2>
      <div className="sm:w-full p-3 md:p-6 xl:p-10 pt-0 text-center">
        <Tooltip title={"Photo from Ferdiansyah"}>
          <img width="auto" height="350px" onContextMenu={(e) => e.preventDefault()} src="/me-img.jpg" className="w-auto transform hover:scale-90 transition 1000s" alt="profile"/>
        </Tooltip>
      </div>
      <div className="sm:w-full p-3 md:p-6 xl:p-10 pt-0 text-center dark:text-white">
        <p className="font-light">
          {languange(lang, 'tentang-description')}
        </p>
      </div>
    </div>
  </section>
)

export default AboutHash