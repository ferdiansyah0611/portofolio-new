import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { purple, red, blue, green, grey } from '@mui/material/colors'

import Home from './pages/home'

import project from './context/project'
import figma from './context/figma'
import Context from './context'

var theme = createTheme({
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
})

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
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Context.Provider value={this.state}>
            <Context.Consumer>
              {
                ctx => (
                  <React.Fragment>
                    <Home ctx={ctx} />
                  </React.Fragment>
                )
              }
            </Context.Consumer>
          </Context.Provider>
        </ThemeProvider>
      </div>
    )
  }
}

export default App