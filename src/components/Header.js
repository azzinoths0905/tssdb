import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'

class Header extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}></IconButton>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header