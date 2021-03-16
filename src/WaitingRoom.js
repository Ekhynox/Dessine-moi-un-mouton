import React from 'react';
import './WaitingRoom.css';
//import Material-ui from '@material-ui';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './Mylogo.jpg';
import cx from 'clsx';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';

export default function SignInSide() {
  const classes = useStyles();
  const styles = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
         <Column p={0} gap={0} className={styles.card}>
           <Row wrap p={2} alignItems={'baseline'} className={styles.header}>
             <Item stretched className={styles.headline}>Participant.e.s</Item>
             <Item className={styles.actions}>
               <Link className={styles.link}>Refresh</Link> •{' '}
               <Link className={styles.link}>See all</Link>
             </Item>
           </Row>
           <PersonItem name={'Amber Matthews'} src={'https://i.pravatar.cc/300?img=10'} />
           <Divider variant={'middle'} className={styles.divider} />
           <PersonItem name={'Russel Robertson'} src={'https://i.pravatar.cc/300?img=20'} />
           <Divider variant={'middle'} className={styles.divider} />
           <PersonItem name={'Kathleen Ellis'} src={'https://i.pravatar.cc/300?img=30'} />
         </Column>
        </div>
      </Grid>
     <Grid item xs={false} sm={4} md={7} className={classes.image}/>
  </Grid>
  );
}


const PersonItem = ({ src, name, friendCount }) => {
  const avatarStyles = useDynamicAvatarStyles({ size: 56 });
  return (
    <Row gap={2} p={2.5}>
      <Item>
        <Avatar src={src} />
      </Item>
      <Row wrap grow gap={0.5} minWidth={0}>
        <Item grow minWidth={0}>
          <div>{name}</div>
        </Item>
      </Row>
    </Row>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  card: {
    width: '100%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    fontSize: '1.25rem',
    fontWeight: 600,
  },
  
  headline: {
    color: '#122740',
    fontSize: '1.25rem',
    fontWeight: 600,
  },

  header: {
    fontFamily: 'Barlow, san-serif',
    backgroundColor: '#fff',
  },

}));
