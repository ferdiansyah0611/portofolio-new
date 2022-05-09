import React, { useMemo, useCallback } from 'react'
import {
  Tooltip, Button, Box
} from '@mui/material'
import WriterIntro from '@component/WriterIntro'
import styled from '@style/introduction.module.sass'
import devsvg from '@media/dev.svg'

const IntroductionHash = ({ btncontact, projectRef }) => {
  const heightBox = useMemo(() => ({
    minHeight: {
      xs: '100vh',
      md: 'auto'
    }
  }), [])
  const viewProject = useCallback(() => window.scrollTo(0, projectRef?.current?.offsetTop), [projectRef.current])
  return(
    <section className="w-full">
      <Box id="container-img" sx={heightBox} className={styled.box}>
        <div id="intro" className={styled.intro}>
          <WriterIntro/>
          <Button disableElevation ref={btncontact} onClick={viewProject} color="primary" variant="contained">View Project</Button>
        </div>
        <Tooltip title="Illustration from undraw" placement="bottom">
          <img onContextMenu={(e) => e.preventDefault()} src={devsvg} alt="pc" />
        </Tooltip>
      </Box>
    </section>
  )
}

export default IntroductionHash