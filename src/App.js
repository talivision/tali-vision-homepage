import React from 'react';
import './App.css';
import TopBar from "./resources/pages/TopBar";

import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core";
import ContentProjects from "./resources/pages/ContentProject";
import ContentAbout from "./resources/pages/ContentAbout";
import ContentContact from "./resources/pages/ContentContact"
import { Paper } from "@material-ui/core";

import {deepOrange, green} from '@material-ui/core/colors';

const theme = createMuiTheme({ palette: {
    primary: {
      main: deepOrange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (

          <Router>
              <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <div className="App" color="primary">
                      <TopBar/>
                          <Switch>
                              <div className='routes'>
                                  <Route exact path='/' component={ContentAbout}/>
                                  <Route path='/projects' component={ContentProjects}/>, 
                                  <Route path='/contact' component={ContentContact}/>
                              </div>
                          </Switch>
                  </div>
              </ThemeProvider>
          </Router>
  );
}

export default App;
