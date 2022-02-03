import React, {
  useState, useEffect, useRef
} from 'react'

import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import Translate from '@mui/icons-material/Translate'

import {
  Button
} from '@mui/material'

import { gsap } from "gsap"

import WriterIntro from '../component/WriterIntro'

import languange from '../resource/languange'

import {
  AboutHash,
  CertificateHash,
  IntroductionHash,
  ProjectHash,
  StudyHash,
  ContactHash
} from '../component/hash'
import Footer from '../component/Footer'
import HeadingMenu from '../component/HeadingMenu'

function Home({ctx}) {
  // state
  const [statusMenu, setstatusMenu] = useState(false)
  const [lang, setlang] = useState('en')
  // gsap
  const btncontact = useRef(null)
  var navRef = useRef(null)
  var projectRef = React.useRef(null)
  useEffect(() => {
    // gsap
    gsap.from(btncontact.current, {
      duration: 2.5,
      ease: "bounce.out",
      x: 100
    });
    // scroll nav animation
    let lastScroll = 0,
    scrollFunc = (e) => {
      if(!statusMenu){
        var curr = navRef.current
        if(window.scrollY >= 80){
          curr.classList.add('on-scroll')
          curr.classList.remove('off-scroll')
          if(lastScroll < window.scrollY){
            lastScroll = window.scrollY
            curr.classList.add('-mt-20')
          }else{
            lastScroll = window.scrollY
            curr.classList.remove('-mt-20')
          }
        }else{
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
  // action
  const handlemenu = (e) => {
    const container = document.querySelector('#container-menu');
    // style container menu
    e.preventDefault()
    // opened
    if(statusMenu)
    {
      setstatusMenu(false)
      container.classList.add('ml-300-')
      document.body.classList.remove('overflow-hidden')
      return true;
    }
    else{
      setstatusMenu(true)
      container.classList.remove('ml-300-')
      document.body.classList.add('overflow-hidden')
      return true;
    }
  }
  // if dark theme class
  const handletheme = (e) => {
    if(localStorage.theme === 'dark'){
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark:bg-gray-800')
      localStorage.theme = 'light'
    }
    else{
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark:bg-gray-800')
      localStorage.theme = 'dark'
    }
  }
  let changeHash = (e, to) => {
    e.preventDefault()
    if(!to){
      window.scrollTo(0, 0)
    }else{
      window.scrollTo(0, document.querySelector(`#${to}`).offsetTop - 80)
    }
  }
  return (
    <div>
      <HeadingMenu lang={lang} changeHash={changeHash} navRef={navRef} handlemenu={handlemenu} statusMenu={statusMenu} setlang={setlang} />
      <div id="body">
        <IntroductionHash projectRef={projectRef} lang={lang} btncontact={btncontact}/>
        <AboutHash lang={lang} />
        <StudyHash lang={lang} />
        <ProjectHash lang={lang} project={ctx.project} projectRef={projectRef} />
        <CertificateHash lang={lang} />
        <ContactHash lang={lang} />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
