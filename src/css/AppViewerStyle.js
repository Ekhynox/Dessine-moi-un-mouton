import {makeStyles} from '@material-ui/core/styles';
    /*
    ███████ ████████ ██    ██ ██      ███████ 
    ██         ██     ██  ██  ██      ██      
    ███████    ██      ████   ██      █████ 
         ██    ██       ██    ██      ██    
    ███████    ██       ██    ███████ ███████ */

  export const useStylesLight = makeStyles((theme) => ({
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
    margin: theme.spacing(10, 2),
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
  type_msg : {
      borderRadius: 16,
      background:'#222',
      color: "white",
      width : "90%",
      height: "4vh",
  },

  send_btn : {
      borderRadius: 16,
      background:'#222',
      color: "white",
      width : "4vh",
  },

}));


export const useStylesDark = makeStyles((theme) => ({
root: {
  height: '100vh',
  backgroundImage: 'url(https://source.unsplash.com/collection/31854366/)',
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
  margin: theme.spacing(10, 2),
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
type_msg : {
    borderRadius: 16,
    background:'#222',
    color: "white",
    width : "90%",
    height: "4vh",
},

send_btn : {
    borderRadius: 16,
    background:'#222',
    color: "white",
    width : "4vh",
},

}));
