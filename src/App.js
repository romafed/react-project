import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Navbar from './components/navbar/navbar';
import Someapp from './components/someapp/someapp';
import Todoapp from './components/todoapp/todoapp';
import mainTable from './components/tableapp/containers/mainTabe';
import './App.css';

class App extends Component {

  render() {
    const { location } = this.props;
    return (
      <React.Fragment>
        <header>
          <Navbar />
        </header>
        <section>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={400}
              classNames='fade'
            >
              <Switch location={{ ...location }}>
                <Route strict path={['/todo', '/']} exact component={Todoapp} />
                <Route path='/some' component={Someapp} />
                <Route path='/table' component={mainTable} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </section>

      </React.Fragment>
    )
  }
}

export default App;
