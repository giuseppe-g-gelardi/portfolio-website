import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Routes, Route } from 'react-router-dom'
import { Paper, StylesProvider } from '@material-ui/core'
import { CssBaseline } from '@mui/material'

import MainAppBar from './components/MainAppbar'
import { lightTheme, darkTheme } from './components/Theme/Theme'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

export default function App() {

  const [darkMode, setDarkMode] = useState(false)

  const theme = (darkMode ? darkTheme : lightTheme)

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper style={{height: '100vh', width: '100%', borderRadius: '0'}}>
          <MainAppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/projects' element={<Projects />} />
            </Routes>
        </Paper>
      </ThemeProvider>
    </StylesProvider>
  )
}
