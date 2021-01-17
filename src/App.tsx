import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './assets/sass/main.scss';

import SearchEngine from './pages/SearchEngine/SearchEngine'
import SearchResults from './pages/SearchResults/SearchResults'

const App: React.FC = () => {
  return (
    <div className="app">
      <Switch>
          <Route component={SearchEngine} exact path='/'></Route>
          <Route component={SearchResults} exact path='/photos/:name'></Route>
          <Redirect from="*" to="/" />
      </Switch>
    </div>
  )
}

export default App;