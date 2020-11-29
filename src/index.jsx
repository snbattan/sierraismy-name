import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

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
            <Route path="/" component={Home} />
          </Switch>
        </article>
        <Footer />
      </main>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
