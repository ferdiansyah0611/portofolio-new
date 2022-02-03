import React, {useState, useEffect} from 'react'
import {
  Tooltip, ButtonGroup, Button,
  Dialog,
  DialogContent,
  Typography,
  DialogActions, useMediaQuery,
  AppBar, Toolbar, Chip, Stack
} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import Scroll from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import languange from '../../resource/languange'

const ProjectHash = ({lang, project, projectRef}) => {
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

  const [openproject, setopenproject] = useState({
    open: false, data: {}
  })
  const openedproject = (data) => {
    setopenproject({
      data: data, open: true
    })
  }
  const closedproject = () => {
    setopenproject({
      ...openproject, open: false
    })
  }
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return(
    <>
      <Dialog onClose={closedproject} maxWidth="sm" fullScreen={fullScreen} fullWidth open={openproject.open}>
        <AppBar className="z-20" color="blue" position="static">
          <Toolbar>
            <Typography variant="h6" className="text-white">{openproject ? openproject.data.name: ''}</Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
        {
          openproject.data.img && <>
            <img width="100%" src={openproject.data.img} className="w-full mb-4" alt="img-project" title="img-project"/>
            <Typography variant="h6" paragraph>Technology</Typography>
            <Stack direction={{ xs: 'column', sm: 'row', overflow: 'auto' }} spacing={1}>
              
              {
                openproject.data?.des?.map((d,i) => <Chip variant="outlined" key={i} label={d} />)
              }
            </Stack>
            <Typography sx={{mt: 2}} variant="h6" paragraph>Description</Typography>
            <Typography variant="p" paragraph>{openproject.data.description[lang]}</Typography>
            <Typography variant="h6" paragraph>Link & Repository</Typography>
            <Tooltip title={"Go " + openproject.data.github} placement="top">
              <Button size="small" variant="contained" onClick={() => openproject.data.github !== '#' ? window.open(openproject.data.github): false}>
                Github {openproject.data.private ? "(Private)": false}
              </Button>
            </Tooltip>
            <Tooltip title={"Go " + openproject.data.web}>
              <Button size="small" sx={{ml: 2}} color="green" variant="contained" onClick={() => openproject.data.web !== '#' ? window.open(openproject.data.web): false}>
                Web
              </Button>
            </Tooltip>
          </>
        }
        </DialogContent>
        <DialogActions>
          <Button onClick={closedproject}>close</Button>
        </DialogActions>
      </Dialog>
      <section ref={projectRef} id="project" className="w-full mt-1 sm:mt-10 bg-white dark:bg-gray-800 shadow-md">
        <h2 className="font-bold text-3xl text-center sm:text-left p-5 sm:mt-0 dark:text-white">{languange(lang, 'Projek Saya')}</h2>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row dark:text-white p-5 pt-0">
        {
          listproject.map((data, key) => (
            <Scroll key={key} delay={100} animateIn="fadeIn" animateOut="fadeOut">
              <div className="sm:p-1 mt-1 mb-5 sm:mb-5">
                <h5 className="font-bold text-1xl block p-4 dark:text-white text-center">{data.name}</h5>
                <img width="100%" height="200px" src={data.img} className="w-full" alt="img-project" title="img-project"/>
                <Button size="small" variant="contained" disableElevation sx={{borderRadius: 0}} fullWidth onClick={() => openedproject(data)}>detail</Button>
              </div>
            </Scroll>
          ))
        }
        </div>
        <ButtonGroup size="small" disableElevation className="m-5" variant="contained" color="primary">
          <Button onClick={() => countproject !== 3 ? lessproject(): false}>Load Less</Button>
          <Button onClick={() => countproject <= project.length ? moreproject(): false}>Load more</Button>
        </ButtonGroup>
      </section>
    </>
  )
}

export default ProjectHash