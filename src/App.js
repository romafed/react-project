import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Navbar from './components/navbar/navbar';
import Someapp from './components/someapp/someapp';
import Tableapp from './components/tableapp/tableapp';
import Todoapp from './components/todoapp/todoapp';
import './App.css';

function App({ location }) {
  return (
    <React.Fragment>

      <header>
        <Navbar />
      </header>

      <section>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={1000}
            classNames='fade'
          >
            <Switch location={{ ...location }}>
              <Route strict path={['/todo', '/']} exact component={Todoapp} />
              <Route path='/some' component={Someapp} />
              <Route path='/table' component={Tableapp} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </section>

    </React.Fragment>
  );
}

export default App;
