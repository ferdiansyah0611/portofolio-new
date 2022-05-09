import React from 'react'

import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'

import useLanguange from '@hook/useLanguange'
import styled from '@style/study.module.sass'

const StudyHash = () => {
  const languange = useLanguange()
  return(
    <section id="study" className={styled.study}>
      <div className={styled.studied}>
        <h2>{languange('Pendidikan')}</h2>
        <div className={styled.timeline}>
          <Timeline align="alternate">
          {
            languange('list-sekolah').map((school, key) => (
              <TimelineItem position={key % 2 ? 'right': 'left'} key={key}>
                <TimelineSeparator>
                  <TimelineDot color={school.color}/>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={styled.timelinecontent}>{school.name}<br/>({school.year})</TimelineContent>
              </TimelineItem>
            ))
          }
          </Timeline>
        </div>
      </div>
      <div id="experience" className={styled.experience}>
        <h2>{languange('Keahlian')}</h2>
        <div>
        {
          languange('list-keahlian').map((d,i) => (
            <p key={i}>{d}</p>
          ))
        }
        </div>
      </div>
    </section>
  )
}

export default StudyHash