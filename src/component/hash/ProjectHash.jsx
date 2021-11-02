import React, {useState, useEffect} from 'react'
import {
  Tooltip, ButtonGroup, Button,
  Dialog,
  DialogContent,
  Typography,
  DialogActions, useMediaQuery,
  AppBar, Toolbar
} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import Scroll from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import languange from '../../resource/languange'

const ProjectHash = ({lang, project}) => {
  const [countproject, setcountproject] = useState(3)
  const [listproject, setlistproject] = useState([])
  useEffect(() => {
    setlistproject(project.filter((d, i) => i <= countproject))
  }, [countproject])
  const moreproject = () => {
    setcountproject(countproject + 4)
  }
  const lessproject = () => {
    setcountproject(countproject - 4)
  }

  const [openproject, setopenproject] = useState(null)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return(
    <>
      <Dialog maxWidth="sm" fullScreen={fullScreen} fullWidth open={Boolean(openproject)}>
        <AppBar className="z-20" color="blue" position="static">
          <Toolbar>
            <Typography variant="h6" className="text-white">{openproject ? openproject.name: ''}</Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
        {
          openproject ?
          <>
            <img width="100%" src={openproject.img} className="w-full mb-4" alt="img-project" title="img-project"/>
            <Typography variant="h6">Technology</Typography>
            <div className="py-1 flex flex-wrap">
              {
                openproject.des.map((d,i) => <div className="ml-1 mt-1 text-sm border border-blue-500 p-1 rounded-lg" key={i} color="primary">{d}</div>)
              }
            </div>
            <Typography variant="h6">Description</Typography>
            <Typography variant="p">{openproject.description[lang]}</Typography>
            <Typography variant="h6">Link & Repository</Typography>
            <Tooltip title={"Go " + openproject.github} placement="top">
              <a
                onClick={() => openproject.github !== '#' ? window.open(openproject.github): false}
                className="font-bold cursor-pointer text-sm bg-black text-white block p-3 shadow-md text-center mt-3"
              >View On Github</a>
            </Tooltip>
            <Tooltip title={"Go " + openproject.web}>
              <a
                onClick={() => openproject.web !== '#' ? window.open(openproject.web): false}
                className="font-bold cursor-pointer text-sm bg-green-500 dark:bg-green-600 hover:bg-green-400 dark:hover:bg-green-700 text-white block p-3 shadow-md text-center"
              >Open Web</a>
            </Tooltip>
          </>
          : false
        }
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setopenproject(null)}>close</Button>
        </DialogActions>
      </Dialog>
      <section id="project" className="w-full mt-1 sm:mt-10 bg-white dark:bg-gray-800 shadow-md">
        <h2 className="font-bold text-3xl text-center sm:text-left p-5 sm:mt-0 dark:text-white">{languange(lang, 'Projek Saya')}</h2>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row dark:text-white p-5 pt-0">
        {
          listproject.map((data, key) => (
            <Scroll key={key} delay={100} animateIn="fadeIn" animateOut="fadeOut">
              <div className="sm:p-1 mt-1 mb-5 sm:mb-5">
                <h5 className="font-bold text-1xl block p-4 dark:text-white text-center">{data.name}</h5>
                <img width="100%" height="200px" src={data.img} className="w-full" alt="img-project" title="img-project"/>
                <button onClick={() => setopenproject(data)} className="!rounded-none text-white w-full p-2 text-sm bg-blue-600 uppercase">detail</button>
              </div>
            </Scroll>
          ))
        }
        </div>
        <ButtonGroup className="m-5" variant="contained" color="primary">
          <Button onClick={() => countproject !== 3 ? lessproject(): false}>Load Less</Button>
          <Button onClick={() => countproject <= project.length ? moreproject(): false}>Load more</Button>
        </ButtonGroup>
      </section>
    </>
  )
}

export default ProjectHash