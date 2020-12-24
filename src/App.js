import React from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';

import Page1 from './Routs/page1';
import Page2 from './Routs/page2';



export default () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component = {Page1}/>
      <Route exact path='/page2' component = {Page2}/>
    </Switch>
  </HashRouter>
);