import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { FiSun, FiMoon } from "react-icons/fi";
import {AppBar, Button, ButtonGroup, IconButton, FormControlLabel, FormGroup, Menu, MenuItem, Switch, Toolbar, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  menuButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  title: {
    flexGrow: 1,
  },
}));

function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <ButtonGroup variant="text"  aria-label="text primary button group" aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit">
          <Button> About Us </Button>
          <Button> Help </Button>
          </ButtonGroup>
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
              label={auth ? <FiSun /> : <FiMoon/>}
            />
          </FormGroup>
          {auth && (
            <div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );

}

export default MenuAppBar;
