import React from 'react';
import './App.css';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import deepPurple from '@material-ui/core/colors/deepPurple';
import teal from '@material-ui/core/colors/teal';

import Drawers from './Componens/Drawers/Drawers';


const theme = createMuiTheme({
  palette: {
      primary: deepPurple,
      secondary: teal,
    },
})


function App() {  
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Drawers/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
