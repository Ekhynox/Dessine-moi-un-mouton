import { makeStyles } from '@material-ui/core/styles';
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
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  paper: {
    margin: theme.spacing(8, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  cardjoueur: {
    width: '100%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    fontSize: '1.5rem',
    fontWeight: 600,
    flexWrap: 'wrap',
  },

  card: {
    width: '92%',
    height : '92%',
    margin : theme.spacing (5, 5),
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    display : 'flex',
    background:'rgba(240, 160, 240, 0.30)',
    fontSize: '1.5rem',
    fontWeight: 600,
  },

  cardco: {
    width: '92%',
    height : '92%',
    margin : theme.spacing (5, 5),
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    display : 'flex',
    background:'rgba(240, 160, 240, 0.30)',
  },

  copyright: {
    fontFamily: 'Barlow, san-serif',
    color: 'grey',
    margin: theme.spacing (3, 2),
  },

  IDstyle: {
    margin : theme.spacing (2, 'auto'),
    fontSize: '1rem',
    fontWeight: 'bold',
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
    fontSize: '1.25rem',
    fontWeight: 400,
  },

  chatbox: {
    margin: theme.spacing(8, 2),
    width: '90%',
    height: '90%',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    background:'rgba(240, 160, 240, 0.30)',
    overflow: 'auto',
    fontSize: '1.25rem',
    fontWeight: 400,
  },

  chatbox: {
    margin: theme.spacing(1),
    width: '97%',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.25rem',
    fontWeight: 400,
    position: 'relative',
    overflow: 'auto',
    '&:hover': {
      overflowY: 'auto',
    },
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

  button : {
    fontFamily: 'Barlow, san-serif',
    fontSize: '100%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #f0a0f0, #e55be5, #8B00FF, #4a148c)',
    borderRadius: 6,
    border: 0,
    width: '40%',
    height: '15%',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin : theme.spacing ('auto', 'auto'),
  },

  slide: {
    width: '80%',
    margin : theme.spacing ('auto', 'auto'),
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#311b92',
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

/*
██████   █████  ██████  ██   ██     ████████ ██   ██ ███████ ███    ███ ███████ 
██   ██ ██   ██ ██   ██ ██  ██         ██    ██   ██ ██      ████  ████ ██      
██   ██ ███████ ██████  █████          ██    ███████ █████   ██ ████ ██ █████ 
██   ██ ██   ██ ██   ██ ██  ██         ██    ██   ██ ██      ██  ██  ██ ██    
██████  ██   ██ ██   ██ ██   ██        ██    ██   ██ ███████ ██      ██ ███████ */

export const useStylesDark = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: 'url(https://source.unsplash.com/collection/31854366/)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  paper: {
    margin: theme.spacing(8, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  cardjoueur: {
    width: '100%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    fontSize: '1.5rem',
    fontWeight: 600,
    flexWrap: 'wrap',
  },

  card: {
    width: '92%',
    height : '92%',
    margin : theme.spacing (5, 5),
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    display : 'flex',
    background:'rgba(74, 20, 140, 0.50)',
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#FFFFFF',
  },

  cardco: {
    width: '92%',
    height : '92%',
    margin : theme.spacing (5, 5),
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    display : 'flex',
    background:'rgba(74, 20, 140, 0.80)',
    color: '#FFFFFF',

  },

  copyright: {
    fontFamily: 'Barlow, san-serif',
    color: 'white',
    margin: theme.spacing (3, 2),
  },

  IDstyle: {
    margin : theme.spacing (2, 'auto'),
    fontSize: '1rem',
    fontWeight: 'bold',
  },

  cardchat: {
    margin: theme.spacing(8, 2),
    width: '90%',
    height: '80%',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 8px 16px 0 #BDC9D7',
    background:'rgba(74, 20, 140, 0.50)',
    fontSize: '1.25rem',
    fontWeight: 450,
    color: '#FFFFFF',
  },

  chatbox: {
    margin: theme.spacing(1),
    width: '97%',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.25rem',
    fontWeight: 400,
    position: 'relative',
    overflow: 'auto',

    '&:hover': {
      overflowY: 'auto',
    },
  },

  headline: {
    color: '#FFFFFF',
    fontSize: '1.25rem',
    fontWeight: 600,
  },

  header: {
    fontFamily: 'Barlow, san-serif',
    backgroundColor: '#12005e',
  },

  button : {
    fontFamily: 'Barlow, san-serif',
    fontSize: '100%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #f0a0f0, #e55be5, #8B00FF, #4a148c)',
    borderRadius: 6,
    border: 0,
    width: '40%',
    height: '15%',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin : theme.spacing ('auto', 'auto'),
  },

  slide: {
    width: '80%',
    margin : theme.spacing ('auto', 'auto'),
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#64b5f6',
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
