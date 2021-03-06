import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';
import App from './App';
import AppViewer from './AppViewer';
import SignInSide from './SignInSide';
import WaitingRoom from './WaitingRoom';
import {ChangeThemeUs} from './AboutUs';
import {ChangeThemeApp} from './App';
import {ChangeThemeAppViewer} from './AppViewer';
import {ChangeThemeSign} from './SignInSide';
import {ChangeThemeWaiting} from './WaitingRoom';
import {ChangeThemeScoreFinal} from './ScoreFinal';
import {ChangeThemeHelp} from './Help';
import {Click_choose_word} from './words';
import {GetTab, SetTab} from './index';
import {AboutUs, Getetat, Help, HelpEnd, SetSignInSide, SetWaiting, SetJeu, SetScoreFinal} from './index';

var theme = "dark";

export function setTheme(){
  var etatjeu = Getetat();

  ////////////////////////////////////////////////////////
  //                    LIGHT THEME
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
      Click_choose_word(GetTab()[0].mot);
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

    if(etatjeu == "ScoreFinal"){
      ChangeThemeScoreFinal();
      SetScoreFinal();
    }

    if(etatjeu == "Help"){
      ChangeThemeHelp();
      Help();
    }

    if(etatjeu == "HelpEnd"){
      ChangeThemeHelp();
      HelpEnd();
    }

    if(etatjeu == "AboutUs"){
      ChangeThemeUs();
      AboutUs();
    }

  }
  ////////////////////////////////////////////////////////
  //                  DARK THEME
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
      Click_choose_word(GetTab()[0].mot);
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

    if(etatjeu == "ScoreFinal"){
      ChangeThemeScoreFinal();
      SetScoreFinal();
    }

    if(etatjeu == "Help"){
      ChangeThemeHelp();
      Help();
    }

    if(etatjeu == "HelpEnd"){
      ChangeThemeHelp();
      HelpEnd();
    }

    if(etatjeu == "AboutUs"){
      ChangeThemeUs();
      AboutUs();
    }

  }
}

export function getTheme(){
  return theme;
}
