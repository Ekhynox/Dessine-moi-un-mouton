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
  },

  cardjoueur: {
    width: '30%',
    height: '95%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    fontSize: '1.5rem',
    fontWeight: 600,
    flexWrap: 'wrap',
    background:'rgba(240, 160, 240, 0.30)',

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


  },

  cardjoueur: {
    width: '30%',
    height: '95%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    fontSize: '1.5rem',
    fontWeight: 600,
    flexWrap: 'wrap',
    background:'rgba(240, 160, 240, 0.30)',

  }
}));
