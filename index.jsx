import 'typeface-roboto';

import './index.css';

import {
  Box, CssBaseline, ThemeProvider, createMuiTheme,
} from '@material-ui/core';
import { amber, cyan } from '@material-ui/core/colors';
import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line sort-imports
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';


const pages = {
  AboutMe,
  Home,
};

const light = createMuiTheme({
  palette: {
    primary: { main: cyan[600] },
    secondary: { main: amber[600] },
  },
});

const dark = createMuiTheme({
  palette: {
    primary: { main: cyan[200] },
    secondary: { main: amber[200] },
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Home',
      theme: dark,
    };
  }

  invertTheme = () => this.setState((prevState) => ({
    theme: prevState.theme === light ? dark : light,
  }));

  render = () => (
    <Box className={this.state.theme === light ? 'light' : 'dark'}>
      <CssBaseline />
      <ThemeProvider theme={this.state.theme}>
        <Header
          invertTheme={this.invertTheme}
          page={this.state.page}
          theme={this.state.theme}
          updateState={(key, value) => this.setState({ [key]: value })}
        />
        {Object.entries(pages).map(([pageName, PageComponent]) => this.state.page === pageName && (
          <PageComponent key={pageName} theme={this.state.theme} />
        ))}
        <Footer theme={this.state.theme} />
      </ThemeProvider>
    </Box>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
