import React from 'react';
import ReactDOM from 'react-dom';
import { UseStyles } from './css/AboutUsStyle';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography} from '@material-ui/core';
import MenuAppBar from './Header';
import { AboutUs } from './index';

export function AboutUsView() {

  const classes = UseStyles();

  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={true} sm={12}>
        <MenuAppBar/>
      </Grid>
      <Grid container xs={5} className={classes.paper}>
        <Typography variant="h3" className={classes.tool}>
          Membres :
        </Typography>
        <Box border={1} borderRadius={4} className={classes.box}>
            <Grid container>
              <Grid item xs={2} container alignItems="center">
                <Avatar alt="avatar1" className={classes.avatar} src={"https://avatars.githubusercontent.com/u/47141502"}/>
              </Grid>
              <Grid container item xs={9} direction="column" className={classes.tool} >
                <Typography variant="h5" gutterBottom >
                  COUTURIER-PETRASSON Claire
                </Typography>
                <Typography variant="h5" gutterBottom >
                <a href="https://github.com/Chocoluna">Github: Chocoluna</a>
                </Typography>
              </Grid>
            </Grid>
        </Box>
        <Box border={1} borderRadius={4} className={classes.box}>
            <Grid container>
              <Grid item xs={2} container alignItems="center">
                <Avatar alt="avatar1" className={classes.avatar} src={"https://avatars.githubusercontent.com/u/79450794"}/>
              </Grid>
              <Grid container item xs={9} direction="column" className={classes.tool} >
                <Typography variant="h5" gutterBottom >
                  DOMINGUES Kévin
                </Typography>
                <Typography variant="h5" gutterBottom >
                  <a href="https://github.com/D32mond">Github: D32mond</a>
                </Typography>
              </Grid>
            </Grid>
        </Box>
        <Box border={1} borderRadius={4} className={classes.box}>
            <Grid container>
              <Grid item xs={2} container alignItems="center">
                <Avatar alt="avatar1" className={classes.avatar} src={"https://avatars.githubusercontent.com/u/60545676"}/>
              </Grid>
              <Grid container item xs={9} direction="column" className={classes.tool} >
                <Typography variant="h5" gutterBottom >
                  UCAR Ibrahim
                </Typography>
                <Typography variant="h5" gutterBottom >
                  <a href="https://github.com/Ekhynox">Github: Ekhynox</a>
                </Typography>
              </Grid>
            </Grid>
        </Box>
        <Typography variant="h4" className={classes.tool}>
          Sous la supervision de :
        </Typography>
        <Box border={1} borderRadius={4} className={classes.box}>
          <Grid container>
              <Grid item xs={2} container alignItems="center">
                <Avatar alt="avatar1" className={classes.avatar} src={"https://avatars.githubusercontent.com/u/801124"}/>
              </Grid>
              <Grid container item xs={9} direction="column" className={classes.tool} >
                <Typography variant="h5" gutterBottom >
                  RADANNE Gabriel
                </Typography>
                <Typography variant="h5" gutterBottom >
                  <a href="https://github.com/Drup">GitHub : Drup</a>
                </Typography>
                <Typography variant="h5" gutterBottom >
                  <a href="https://gabriel.radanne.net"> page personelle</a>
                </Typography>
              </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid container xs={6} className={classes.paper}>
        <Typography variant="h3" className={classes.tool}>
          Composants utilisé :
        </Typography>
        <Box border={1} borderRadius={4} className={classes.box}>
            <Grid container>
              <Grid item xs={2} container alignItems="center">
                <Avatar alt="avatar1" className={classes.avatar} src={"https://material-ui.com/static/logo_raw.svg"}/>
              </Grid>
              <Grid container item xs={9} direction="column" className={classes.tool} >
                <Typography variant="h5" gutterBottom >
                  Material-UI est une bibliothèque de composants simple et personnalisable pour créer des applications React plus rapides, plus belles et plus accessibles.
                </Typography>
              </Grid>
            </Grid>
        </Box>
        <Box border={1} borderRadius={4} className={classes.box}>
            <Grid container>
              <Grid item xs={2} container alignItems="center">
                <Avatar alt="avatar1" className={classes.avatar} src={"https://avatars.githubusercontent.com/u/54058136"}/>
              </Grid>
              <Grid container item xs={9} direction="column" className={classes.tool} >
                <Typography variant="h5" gutterBottom >
                  Mui-Treasury est une collection de composants prêts à l'emploi basés sur Material-UI
                </Typography>
              </Grid>
            </Grid>
        </Box>
        <Box border={1} borderRadius={4} className={classes.box}>
            <Grid container>
              <Grid item xs={2} container alignItems="center">
                <Avatar alt="avatar1" className={classes.avatar} src={"https://avatars.githubusercontent.com/u/3409784"}/>
              </Grid>
              <Grid container item xs={9} direction="column" className={classes.tool} >
                <Typography variant="h5" gutterBottom >
                  PeerJS fournit une API peer-to-peer complète, configurable et facile à utiliser, construite sur WebRTC, prenant en charge à la fois les canaux de données et les flux multimédias.
                </Typography>
              </Grid>
            </Grid>
        </Box>
        <Box border={1} borderRadius={4} className={classes.box}>
            <Grid container>
              <Grid item xs={2} container alignItems="center">
                <Avatar alt="avatar1" className={classes.avatar} src={"https://raw.githubusercontent.com/facebook/react/master/packages/react-devtools/icons/icon128.png"}/>
              </Grid>
              <Grid container item xs={9} direction="column" className={classes.tool} >
                <Typography variant="h5" gutterBottom >
                  React est une bibliothèque JavaScript libre développée par Facebook, nous avons utilisés en plus d'autres composants : Color, Icons, Hex-rgb.
                </Typography>
              </Grid>
            </Grid>
        </Box>
        <Box border={1} borderRadius={4} className={classes.box}>
            <Grid container>
              <Grid item xs={2} container alignItems="center">
                <Avatar alt="avatar1" className={classes.avatar} src={"https://placeit.net/uploads/stage/stage_image/68287/default_stage.jpg"}/>
              </Grid>
              <Grid container item xs={9} direction="column" className={classes.tool} >
                <Typography variant="h5" gutterBottom >
                  Nous avons créé nous-mêmes les Photo de profils / avatars créés via le site PlaceIt , qui est un site spécialisé dans la génération de logo et avatars personnalisés.
                </Typography>
              </Grid>
            </Grid>
        </Box>
        <Box border={1} borderRadius={4} className={classes.box}>
            <Grid container>
              <Grid item xs={2} container alignItems="center">
                <Avatar alt="avatar1" className={classes.avatar} src={"https://unsplash.com/apple-touch-icon.png"}/>
              </Grid>
              <Grid container item xs={9} direction="column" className={classes.tool} >
                <Typography variant="h5" gutterBottom >
                  Unsplash est un site web dédié au partage de photos sous licence libre.
                </Typography>
              </Grid>
            </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
