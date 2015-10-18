'use strict';

import React from 'react';
import Main from 'components/Main';
import {Route, DefaultRoute, RouteHandler} from 'react-router';

const routes = (
  <Route name='root' path='/' handler={Main}>
  </Route>
);
export default routes;
