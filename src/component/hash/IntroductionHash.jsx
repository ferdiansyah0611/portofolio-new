import React, {useState} from 'react'
import {
  Tooltip, Button
} from '@mui/material'
import WriterIntro from '../WriterIntro'

const IntroductionHash = ({lang, btncontact}) => {
  const [cv, setcv] = useState('/ferdiansyah-cv.pdf')

  return(
    <section className="w-full">
      <div id="container-img" className="pt-20 sm:pt-0 sm:mt-16 sm:flex bg-white shadow-md dark:bg-gray-800">
        <div id="intro" className="w-2/2 sm:w-1/2 md:mt-20 md:ml-10 mb-5 sm:mb-0 dark:text-white p-3">
          <WriterIntro lang={lang}/>
          <Button ref={btncontact} onClick={() => window.open(cv)} color="primary" variant="contained">Download CV</Button>
        </div>
        <Tooltip title={"Image from unsplash"} placement="bottom">
          <img
            onContextMenu={(e) => e.preventDefault()}
            srcSet="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60 100w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60 200w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60 300w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60 400w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 500w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60 600w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60 700w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60 800w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60 900w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60 1000w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60 1100w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60 1200w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60 1296w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60 1400w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60 1600w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=60 1800w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60 2000w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=60 2200w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=60 2400w, 
            https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2592&q=60 2592w"
            className="sm:w-1/2 transform hover:scale-90 transition 1000s"
            alt="pc"
          />
        </Tooltip>
      </div>
    </section>
  )
}

export default IntroductionHash