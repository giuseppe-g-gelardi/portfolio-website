import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


export default function Layout() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography>
            Toolbar
          </Typography>
        </Toolbar>
      </AppBar>
      <h1>Layout component</h1>
    </div>
  )
}
