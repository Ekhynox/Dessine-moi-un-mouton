//Page de dessin

import './css/App.css';
import React, {useState} from 'react';
import reactCSS from 'reactcss';
import 'bootstrap/dist/css/bootstrap.css';
// React Color
import {CirclePicker } from 'react-color';
// React Icons
import { BiSave, BiEraser, BiSend } from 'react-icons/bi';
import { FaPaintBrush, FaTrashAlt, FaCircle, FaSquare } from 'react-icons/fa';
import { BsCircle, BsSquare } from 'react-icons/bs';
import { SiCurl } from "react-icons/si";
import { VscPaintcan } from 'react-icons/vsc';
import { RiArrowGoBackFill } from "react-icons/ri";
//import Material-ui from '@material-ui';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import { makeStyles } from '@material-ui/core/styles';
// fonction
import {ColorChange, DownloadCanvas} from './canvas';
import {Connexion, SetCanvas, Send} from './connexion';
import {SetCanvasDraw} from './canvas';
import avatar1 from './img/1.jpg';
import avatar2 from './img/2.jpg';
import avatar3 from './img/3.jpg';
import avatar4 from './img/4.jpg';
import avatar5 from './img/5.jpg';
import avatar6 from './img/6.jpg';
import {verybigPen, bigPen, smallPen, verysmallPen, erase, pinceau, clear, rect, rectfull, circle, circlefull, line, fill, save, undo} from './canvas';
import cx from 'clsx';


    function App() {
      const classes = useStyles();
      //const colorChange = ({ hex }) => hex = ColorChange(hex); // fonction change la couleur du pinceau
      const colorChange = ({hex}) => {
        hex = ColorChange(hex); // fonction change la couleur du pinceau
      }
      const PersonItem = ({ src, name }) => {
        return (
          <Row gap={2} p={1}>
            <Item>
              <Avatar className="avatar" src={src} />
            </Item>
            <Row gap={15} p={2}>
              <Item><div>{name}</div></Item >
              <Item> 400</Item>
            </Row>
          </Row>
        );
      };

      return (
        <Grid container xs={12} component="main" className={classes.root}>
          <CssBaseline />
            <Grid item xs={false} sm={3} container direction="row" id="game">
              <Column p={1} gap={0} className={classes.cardjoueur}>
                <Row wrap p={2}>
                  <Item stretched>Participant.e.s</Item>
                  <Item>Score</Item>
                </Row>
                  <Divider variant={'middle'}/>
                  <PersonItem name={'Chocoluna'} src={avatar1}/>
              </Column>
            </Grid>
            <Grid item xs={false} sm={5} elevation={6} square className={classes.stream}>
              <video autoPlay id="Video"></video>
            </Grid>
            <Grid item xs={12} sm={3} elevation={6} square className={classes.cardchat}>
              <div id="chatBox" className="card-body"></div>
                <div className="card-footer input-group">
                    <input id="message" className="form-control type_msg" placeholder="Type your message..."></input>
                    <div className="input-group-append">
                        <button id="send" className="input-group-text send_btn" ><BiSend/></button>
                    </div>
              </div>
            </Grid>
        </Grid>
      )
    }

    /*
    ███████ ████████ ██    ██ ██      ███████ 
    ██         ██     ██  ██  ██      ██      
    ███████    ██      ████   ██      █████ 
         ██    ██       ██    ██      ██    
    ███████    ██       ██    ███████ ███████ */

    const useStyles = makeStyles((theme) => ({
      root: {
        height: '100vh',
        backgroundImage: 'url(https://source.unsplash.com/collection/24051068/)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },

      stream: {
        width:'60%',
        height:'60%',
        display: 'flex',
        borderRadius: 16,
        margin: theme.spacing(10, 3),
        backgroundColor: 'rgb(255, 255, 255)',
        background: 'white',
      },

      center:{
        margin: theme.spacing('auto', 'auto'),
      },

      paper: {
        margin: theme.spacing(7.5, 2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },

      canvas: {
        backgroundColor: 'rgb(255, 255, 255)',
        background: 'white',
        borderRadius: 15,
        display: 'flex',
        marginTop: '6vh',
      },

      couleurs: {
        margin: theme.spacing(8, 0),
        borderRadius: 15,
        width: '5.5vh',
        height:'65vh',
        border: '3px solid black',
        background:'#222',
        borderRadius: 5,
        padding:'1vh',
      },

      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },

      headline: {
        color: '#122740',
        fontSize: '2.5rem',
        fontWeight: 600,
        align: 'center',
      },

      header: {
        fontFamily: 'Barlow, san-serif',
        backgroundColor: '#fff',
      },

      cardjoueur: {
        width: '100%',
        height: '75%',
        borderRadius: 16,
        boxShadow: '0 8px 16px 0 #BDC9D7',
        overflow: 'hidden',
        fontSize: '1.25rem',
        fontWeight: 600,
        flexWrap: 'wrap',
        margin : theme.spacing (8, 2),
        background:'rgba(240, 160, 240, 0.30)',
      },

      cardchat: {
        margin: theme.spacing(8, 2),
        width: '90%',
        height: '80%',
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 8px 16px 0 #BDC9D7',
        overflow: 'hidden',
        background:'rgba(240, 160, 240, 0.30)',
        overflow: 'auto',
      },

      styleB: {
          color: 'white',
          fontSize: '150%',
          borderRadius: 15,
          textAlign: 'center',
          width: '5.5vh',
          height:'5.5vh',
          border: '3px solid black',
          background:'#222',
          borderRadius: 5,
          marginTop: '0.5vh',
          marginLeft: '1vh',
      },

      tresgrand: {
        fontSize: '150%',
      },
      grand: {
        fontSize: '100%',
      },
      moyen: {
        fontSize: '75%',
      },
      petit: {
        fontSize: '50%',
      },

      avatarchoice: {
          display: 'flex',
          '& > *': {
          margin: theme.spacing(1),
          },
        },
        medium: {
          width: '50%',
          height: '70%',
        },
        large: {
          width: '23%',
          height: '80%',
        },
    }));

export default App
