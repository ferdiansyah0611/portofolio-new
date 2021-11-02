import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { purple, red, blue, green } from '@mui/material/colors'

import Home from './pages/home'

import project from './context/project'
import Context from './context'

var theme = createTheme({
  palette: {
    primary: {
      main: '#1e3a8a'
    },
    secondary: {
      main: red[500]
    },
    blue: {
      main: blue[600]
    },
    green: {
      main: green[500]
    },
  }
})

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      project: project,
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