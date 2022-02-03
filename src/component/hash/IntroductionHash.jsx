import React, {useState} from 'react'
import {
  Tooltip, Button, Box
} from '@mui/material'
import WriterIntro from '../WriterIntro'
import devsvg from '../../media/dev.svg'

const IntroductionHash = ({lang, btncontact, projectRef}) => {
  const [cv, setcv] = useState('/ferdiansyah-cv.pdf')

  return(
    <section className="w-full">
      <Box id="container-img" sx={{
        height: {
          xs: '100vh',
          md: 'auto'
        }
      }} className="pt-20 sm:pt-0 sm:mt-16 sm:flex bg-white shadow-md dark:bg-gray-800">
        <div id="intro" className="w-2/2 sm:flex-1 md:mt-20 md:ml-10 mb-5 sm:mb-0 dark:text-white p-3">
          <WriterIntro lang={lang}/>
          <Button disableElevation ref={btncontact} onClick={() => window.scrollTo(0, projectRef?.current?.offsetTop)} color="primary" variant="contained">View Project</Button>
        </div>
        <Tooltip title={"Illustration from undraw"} placement="bottom">
          <img
            onContextMenu={(e) => e.preventDefault()}
            src={devsvg}
            className="sm:w-1/3 transform hover:scale-90 transition 1000s"
            alt="pc"
          />
        </Tooltip>
      </Box>
    </section>
  )
}

export default IntroductionHash