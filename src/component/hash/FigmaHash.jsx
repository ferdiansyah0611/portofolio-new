import React, { useState, useEffect, useCallback, useContext, useRef } from 'react'
import {
	Tooltip,
	ButtonGroup,
	Button,
	Typography,
	DialogActions,
	useMediaQuery,
	AppBar,
	Toolbar,
	Chip,
	Stack,
	Select,
	MenuItem
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ctx from '../../context'
import useLanguange from '@hook/useLanguange'

const FigmaHash = () => {
  const languange = useLanguange()
  const [paginate, setpaginate] = useState(0)
  const [now, setnow] = useState(0)
  const [list, setlist] = useState([])
  const context = useContext(ctx)
  const figmaRef = useRef(null)
  useEffect(() => {
   var data
   data = context.figma.filter((d, i) => now > 0 ? i >= (4 * now) : i <= 4)
   setpaginate(Math.round(context.figma.length / 4))
   data = data.slice(0, 4)
   setlist(data)
  }, [now, context.figma])
  const changepaginate = useCallback((i) => {
   setnow(i)
   window.scrollTo(0, figmaRef?.current?.offsetTop - 100)
  }, [figmaRef])

  const [openproject, setopenproject] = useState({
   open: false,
   data: {}
  })
  const openedproject = (data) => {
   setopenproject({
    data: data,
    open: true
   })
  }
  const closedproject = () => {
   setopenproject({
    ...openproject,
    open: false
   })
  }
  const changefilter = (e) => {
   setnow(0)
   setfilter(e.target.value)
  }
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
	return(
		<>
			<section ref={figmaRef} id="figma">
				<h2 className="p-5">{languange('Figma Saya')}</h2>
				<div className="grid-list p-5">
				{
					list.map(({url, img}, key) => (
						<div key={url} data-aos="fade-up">
							<a href={url} target="_blank">
								<img width="100%" src={img} alt={img}/>
							</a>
						</div>
					))
				}
				</div>
				<ButtonGroup size="small" disableElevation className="m-5" variant="contained" color="primary">
					{Array.from(new Array(paginate)).map((v, i) => (
						<Button key={i} onClick={() => changepaginate(i)}>{i + 1}</Button>
					))}
				</ButtonGroup>
			</section>
		</>
	)
}

export default FigmaHash