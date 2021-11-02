import React from 'react'

import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'

import languange from '../../resource/languange'

const StudyHash = ({lang}) => {
  return(
    <section id="study" className="w-full md:w-3/5 mt-1 sm:mt-10 md:pl-6 flex flex-wrap">
      <div className="w-full flex flex-wrap bg-white dark:bg-gray-800 shadow-md justify-center">
        <h2 className="font-bold text-3xl text-center p-3 sm:p-6 xl:p-10 dark:text-white">{languange(lang, 'Pendidikan')}</h2>
        <div className="w-full pb-3">
          <Timeline align="alternate">
          {
            languange(lang, 'list-sekolah').map((school, key) => (
              <TimelineItem position={key % 2 ? 'right': 'left'} key={key}>
                <TimelineSeparator>
                  <TimelineDot color={school.color}/>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="dark:text-white">{school.name}<br/>({school.year})</TimelineContent>
              </TimelineItem>
            ))
          }
          </Timeline>
        </div>
      </div>
      <div id="experience" className="w-full mt-1 sm:mt-10 md:mt-6 flex flex-wrap bg-white dark:bg-gray-800 shadow-md justify-center">
        <h2 className="font-bold w-full text-3xl text-center p-3 sm:p-6 xl:p-10 dark:text-white">{languange(lang, 'Keahlian')}</h2>
        <div className="p-3 w-full sm:p-6 xl:p-10 pt-0">
        {
          languange(lang, 'list-keahlian').map((d,i) => (
            <p key={i} className="p-2 w-full font-light mt-2 border-l-4 border-blue-500 text-left dark:text-gray-200 text-sm">{d}</p>
          ))
        }
        </div>
      </div>
    </section>
  )
}

export default StudyHash