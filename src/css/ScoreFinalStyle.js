import { makeStyles } from '@material-ui/core/styles';
/*
███████ ████████ ██    ██ ██      ███████ 
██         ██     ██  ██  ██      ██      
███████    ██      ████   ██      █████ 
     ██    ██       ██    ██      ██    
███████    ██       ██    ███████ ███████ */

export const useStylesLight = makeStyles((theme) => ({
  root: {
    height:'100vh',
    backgroundImage: 'url(https://source.unsplash.com/collection/24051068/)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: theme.spacing('auto', 'auto'),
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
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
    height:'100vh',
    backgroundImage: 'url(https://source.unsplash.com/collection/31854366/)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: theme.spacing('auto', 'auto'),
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
  },
}));
