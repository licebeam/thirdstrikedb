import React from "react"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { Link } from "gatsby"

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        General Data
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/health/">
          <MenuItem onClick={handleClose}>Health Data</MenuItem>
        </Link>
        <Link to="/taunt/">
          <MenuItem onClick={handleClose}>Personal Action Data</MenuItem>
        </Link>
        <Link to="/dashdata/">
          <MenuItem onClick={handleClose}>Dash Data</MenuItem>
        </Link>
      </Menu>
    </div>
  )
}
