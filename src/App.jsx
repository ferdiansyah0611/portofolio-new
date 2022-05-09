import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { purple, red, blue, green, grey } from '@mui/material/colors'

import Home from './pages/home'

import project from './context/project'
import figma from './context/figma'
import Context from './context'

const ConfigTheme = (props) => {
  const theme = React.useMemo(() => createTheme({
    palette: {
      primary: {
        main: '#2563eb'
      },
      secondary: {
        main: red[500]
      },
      blue: {
        main: blue[600]
      },
      green: {
        main: green[500],
        contrastText: 'white'
      },
      linkedin: {
        main: blue[300],
        contrastText: 'white'
      },
      github: {
        main: grey[500],
        contrastText: 'white'
      },
    }
  }), [])
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {props.children}
    </ThemeProvider>
  )
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      project: project,
      figma: figma,
      languange: 'en',
      app: () => this
    }
  }
  render(){
    return(
      <div className="App">
        <ConfigTheme>
          <Context.Provider value={this.state}>
            <Home />
          </Context.Provider>
        </ConfigTheme>
      </div>
    )
  }
}

export default App