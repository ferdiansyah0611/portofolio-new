import React, {
  useState,
  useEffect,
  useRef,
  useContext
} from 'react'
import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import Translate from '@mui/icons-material/Translate'
import {
  Button
} from '@mui/material'

import WriterIntro from '@component/WriterIntro'
import {
  AboutHash,
  CertificateHash,
  IntroductionHash,
  ProjectHash,
  StudyHash,
  ContactHash,
  FigmaHash
} from '@component/hash'
import Footer from '@component/Footer'
import HeadingMenu from '@component/HeadingMenu'

function Home() {
  // state
  const [statusMenu, setstatusMenu] = useState(false)
  // gsap
  const btncontact = useRef(null)
  const navRef = useRef(null)
  const projectRef = React.useRef(null)
  useEffect(() => {
    AOS.init()
    let lastScroll = 0,
      scrollFunc = (e) => {
        if (!statusMenu) {
          var curr = navRef.current
          if (window.scrollY >= 80) {
            curr.classList.add('on-scroll')
            curr.classList.remove('off-scroll')
            if (lastScroll < window.scrollY) {
              lastScroll = window.scrollY
              curr.classList.add('-mt-20')
            } else {
              lastScroll = window.scrollY
              curr.classList.remove('-mt-20')
            }
          } else {
            curr.classList.remove('on-scroll')
            curr.classList.add('off-scroll')
            lastScroll = window.scrollY
            curr.classList.remove('-mt-20')
          }
        }
      }
    window.addEventListener('scroll', scrollFunc)
    return () => {
      window.removeEventListener('scroll', scrollFunc)
    }
  }, [])
  return (
    <div>
      <HeadingMenu {...{setstatusMenu, statusMenu, navRef}} />
      <div id="body">
        <IntroductionHash projectRef={projectRef} btncontact={btncontact}/>
        <AboutHash />
        <StudyHash />
        <ProjectHash projectRef={projectRef} />
        <FigmaHash/>
        <CertificateHash />
        <ContactHash />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
