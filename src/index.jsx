import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  About, Footer, Header, Home, Resume,
} from './components';

import './index.css';

const App = () => {
  const [isDarkTheme, setDarkTheme] = useState(true);
  const invertTheme = () => setDarkTheme(!isDarkTheme);

  return (
    <Router>
      <main className={`parent ${isDarkTheme ? 'dark' : 'light'}`}>
        <Header invertTheme={invertTheme} />
        <article className="center">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/" component={Home} />
          </Switch>
        </article>
        <Footer />
      </main>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
