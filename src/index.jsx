import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

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
      <body className={`parent ${isDarkTheme ? 'dark' : 'light'}`}>
        <Header invertTheme={invertTheme} />
        <nav className="side-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
          </ul>
        </nav>
        <main className="center">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <Footer />
      </body>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
