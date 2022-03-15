import React, {useState, useEffect, useCallback} from 'react'
import {
  Tooltip, ButtonGroup, Button,
  Dialog,
  DialogContent,
  Typography,
  DialogActions, useMediaQuery,
  AppBar, Toolbar, Chip, Stack,
  Select, MenuItem
} from '@mui/material'
import {useTheme} from '@mui/material/styles'
// import Scroll from 'react-animate-on-scroll'
// import 'animate.css/animate.min.css'

import languange from '../../resource/languange'

var skill = [
  'React Js',
  'Vue Js',
  'Express Js',
  'Sass',
  'Material UI',
  'Tailwind CSS',
  'Bootstrap',
  'Laravel 7',
  'Codeigniter 4',
  'Firebase',
  'Mysql',
  'Mongodb (Mongoose)'
]

const ProjectHash = ({lang, project, projectRef}) => {
  const [paginateproject, setpaginateproject] = useState(0)
  const [nowproject, setnowproject] = useState(0)
  const [listproject, setlistproject] = useState([])
  const [filter, setfilter] = useState('Choose Filter')

  useEffect(() => {
    var data
    if(!filter || filter == 'Choose Filter'){
      data = project.filter((d, i) => nowproject > 0 ? i >= (4 * nowproject) :i <= 4)
      setpaginateproject(Math.round(project.length / 4))
      data = data.slice(0, 4)
    }else{
      data = project.filter(v => v.des.find((des) => des == filter))
      setpaginateproject(Math.round(data.length / 4))
      data = data.filter((d, i) => nowproject > 0 ? i >= (4 * nowproject) :i <= 4).slice(0, 4)
    }
    setlistproject(data)
  }, [nowproject, filter])
  const changepaginate = useCallback((i) => {
    setnowproject(i)
    window.scrollTo(0, projectRef.current.offsetTop - 100)
  }, [projectRef.current])

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
  const changefilter = (e) => {
    setnowproject(0)
    setfilter(e.target.value)
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
            <Tooltip title={"Go " + (openproject.data.gitlab ? openproject.data.gitlab : openproject.data.github)} placement="top">
              <Button size="small" variant="contained" onClick={() => (openproject.data.gitlab ? openproject.data.gitlab : openproject.data.github) !== '#' ? window.open(openproject.data.gitlab ? openproject.data.gitlab : openproject.data.github): false}>
                {openproject.data.gitlab ? 'Gitlab':'Github'} {openproject.data.private ? "(Private)": false}
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
      <section ref={projectRef} id="project">
        <div className="title">
          <h2 className="flex-1">{languange(lang, 'Projek Saya')}</h2>
          <Select className="w-full md:w-auto mt-2 md:mt-0" size="small" onChange={changefilter} value={filter}>
            <MenuItem value="Choose Filter">Choose Filter</MenuItem>
            {skill.map((v) => (
              <MenuItem key={v} value={v}>{v}</MenuItem>
            ))}
          </Select>
        </div>
        <div className="grid-list">
        {
          listproject.map((data, key) => (
            <div key={data.name} data-aos="fade-up">
              <div className="sm:p-1 mt-1 mb-5 sm:mb-5">
                <h5>{data.name}</h5>
                <img
                  width="100%"
                  height="200px"
                  src={data.img}
                  className="w-full"
                  alt="img-project"
                  title="img-project"
                />
                <Button
                  size="small"
                  variant="contained"
                  disableElevation
                  sx={{borderRadius: 0}}
                  fullWidth
                  onClick={() => openedproject(data)}
                >detail</Button>
              </div>
            </div>
          ))
        }
        </div>
        <ButtonGroup size="small" disableElevation className="m-5" variant="contained" color="primary">
          {Array.from(new Array(paginateproject)).map((v, i) => (
            <Button onClick={() => changepaginate(i)}>{i + 1}</Button>
          ))}
        </ButtonGroup>
      </section>
    </>
  )
}

export default ProjectHash