import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Paper } from '@material-ui/core'
import { CssBaseline } from '@mui/material'

import theme from './components/Theme/Theme'
import Layout from './components/Layout'
import Home from './pages/Home'
import Resume from './pages/Resume'

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={{height: '100vh', width: '100%'}}>
        <Layout />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
      </Paper>
    </ThemeProvider>
    </>
  )
}
