import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import App from './App';
import AppViewer from './AppViewer';
import SignInSide from './SignInSide';
import WaitingRoom from './WaitingRoom';
import {ChangeThemeApp} from './App';
import {ChangeThemeAppViewer} from './AppViewer';
import {ChangeThemeSign} from './SignInSide';
import {ChangeThemeWaiting} from './WaitingRoom';
import {Getetat, SetSignInSide, SetWaiting, SetJeu} from './index';

var theme = "dark";

export function setTheme(){
  var etatjeu = Getetat();
  if(theme == "light"){
    theme = "dark";
    if(etatjeu == "sign"){
      ChangeThemeSign();
      SetSignInSide();
    }
    if(etatjeu == "WaitingRoom"){
      ChangeThemeWaiting();
      SetWaiting();
    }
    if(etatjeu == "Jeu"){
      ChangeThemeApp();
      ReactDOM.render(
      <React.StrictMode>
      <App/>
      </React.StrictMode>,
      document.getElementById('root'),
      );
    }
    if(etatjeu == "JeuViewer"){
      ChangeThemeAppViewer();
      ReactDOM.render(
      <React.StrictMode>
      <AppViewer/>
      </React.StrictMode>,
      document.getElementById('root'),
      );
    }
  }
  else {
    theme = "light";
    if(etatjeu == "sign"){
      ChangeThemeSign();
      SetSignInSide();
    }
    if(etatjeu == "WaitingRoom"){
      ChangeThemeWaiting();
      SetWaiting();
    }
    if(etatjeu == "Jeu"){
      ChangeThemeApp();
      ReactDOM.render(
      <React.StrictMode>
      <App/>
      </React.StrictMode>,
      document.getElementById('root'),
      );
    }
    if(etatjeu == "JeuViewer"){
      ChangeThemeAppViewer();
      ReactDOM.render(
      <React.StrictMode>
      <AppViewer/>
      </React.StrictMode>,
      document.getElementById('root'),
      );
    }
  }
}

export function getTheme(){
  return theme;
}
