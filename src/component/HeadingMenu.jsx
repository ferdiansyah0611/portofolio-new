import React from 'react'
import {
  Tooltip
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import Cancel from '@mui/icons-material/Cancel'
import Refresh from '@mui/icons-material/Refresh'
import Translate from '@mui/icons-material/Translate'

import DialogLanguange from './DialogLanguange'
import useLanguange from '@hook/useLanguange'

const HeadingMenu = ({ navRef, statusMenu, setstatusMenu }) => {
  const languange = useLanguange()
  const [openDialogLanguange, setopenDialogLanguange] = React.useState(false)
  const toTop = React.useCallback((e) => {
    e.preventDefault()
    window.scrollTo(0, 0)
  }, [])
  const changeHash = React.useCallback((e, to) => {
    e.preventDefault()
    if (!to) {
      window.scrollTo(0, 0)
    } else {
      window.scrollTo(0, document.querySelector(`#${to}`).offsetTop - 80)
    }
  }, [])
  const handlemenu = React.useCallback((e) => {
    const container = document.querySelector('#container-menu');
    // style container menu
    e.preventDefault()
    // opened
    if (statusMenu) {
      setstatusMenu(false)
      container.classList.add('ml-300-')
      document.body.classList.remove('overflow-hidden')
      return true;
    } else {
      setstatusMenu(true)
      container.classList.remove('ml-300-')
      document.body.classList.add('overflow-hidden')
      return true;
    }
  }, [statusMenu])
  return(
    <>
      <DialogLanguange open={openDialogLanguange} close={() => setopenDialogLanguange(false)} />
      <div id="container-menu" className="ml-300- w-300">
        <div id="header-menu">
          <h5><br/>{"{'Ferdiansyah': 'Developer'}"}</h5>
        </div>
        <ul className="border-b dark:border-gray-400">
        {
          languange('arrayMenu').map((menu, key) => (
            <li key={key} className="flex w-full">
            {
              !menu.link ?
                <a href="/" onClick={(e) => changeHash(e, menu.hash)} className="nav-mobile-link">
                  {menu.icon}
                  <span className="mt-1">{menu.text}</span>
                </a>
              :
                <a className="nav-mobile-link" target="_blank" rel="noreferrer" href={menu.link}>
                  {menu.icon}
                  <span className="mt-1">{"<" + menu.text + "/>"}</span>
                </a>
            }
            </li>
          ))
        }
        </ul>
      </div>
      <nav ref={navRef} className="nav-mobile off-scroll">
        <div className="hidden sm:flex ml-3 mr-3">
        {
          languange('arrayMenu').map((menu, key) => (
            <React.Fragment key={key}>
            {
              !menu.link ?
                <a href="/" className="nav-desktop-link"
                  onClick={(e) => changeHash(e, menu.hash)}
                >{menu.text}</a>
              :
                <a className="nav-desktop-link" href={menu.link} target="_blank" rel="noreferrer">{"<" + menu.text + "/>"}</a>   
            }
            </React.Fragment>
          ))
        }
        <Tooltip title="Switch Languange">
          <a
            href="/"
            className="nav-desktop-link"
            onClick={(e) => {
              e.preventDefault()
              setopenDialogLanguange(true)
            }}
          >
            <Translate className="h-6"/>
          </a>
        </Tooltip>
        </div>
        <div className="flex sm:hidden ml-3 mr-3 float-left p-1">
          <a href="/" onClick={handlemenu} id="menu-icon" className="p-5 rounded-full dark:text-white">
            <MenuIcon className="h-6"/>
          </a>
        </div>
        <div className="flex sm:hidden ml-3 mr-3 float-right p-1">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              setopenDialogLanguange(true)
            }}
            className="p-5 rounded-full dark:text-white hover:bg-gray-200 transition-all duration-300 dark:hover:bg-gray-800"
          >
            <Translate className="h-6"/>
          </a>
          <a href="/" onClick={toTop} className="p-5 rounded-full dark:text-white hover:bg-gray-200 transition-all duration-300 dark:hover:bg-gray-800">
            <HomeIcon className="h-6"/>
          </a>
        </div>
      </nav>
      <div onClick={handlemenu} className={statusMenu ? 'fixed left-0 top-0 h-screen w-full z-30': ''} id="opacity-menu"></div>
    </>
  )
}

export default HeadingMenu