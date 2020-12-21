import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { Addproperty } from './components/Data/Addproperty';
import { Editproperty } from './components/Data/Editproperty';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={Addproperty} exact />
        <Route path="/edit/:id" component={Editproperty} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
