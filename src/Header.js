import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { FiSun, FiMoon } from "react-icons/fi";
import {AppBar, Button, ButtonGroup, IconButton, FormControlLabel, FormGroup, Grid, Menu, MenuItem, Switch, Toolbar, Typography} from '@material-ui/core';
import sheep from './img/sheep.png';
import {Help} from './Help';

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

  Button:{
    fontFamily: 'Barlow, san-serif',
    fontSize: '200%',
    fontWeight: 'bold',
    width: '40%',
    height: '15%',
    padding: '0 30px',
    margin : theme.spacing ('auto', 'auto'),
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
      <AppBar position="relative" style={{backgroundColor: '#000051'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={sheep} />
          <ButtonGroup variant="text"  aria-label="text primary button group" aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
          className={classes.Button}>
          <Button> About Us </Button>
          <Button onClick={Help}> Help </Button>
          </ButtonGroup>
          <Grid container justify="flex-end">
           <FormGroup>
             <FormControlLabel edge = "end"
               control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" style={{color: '#ffffcf'}} />}
               label={auth ? <FiSun /> : <FiMoon/>}
             />
           </FormGroup>
           </Grid>
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
