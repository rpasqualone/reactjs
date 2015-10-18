'use strict';

import React from 'react';
import routes from 'routes';
import { default as Router, Link, Route, RouteHandler, Redirect } from 'react-router';

import Main from 'components/Main';

Router.run(routes, function(Handler){
  React.render(<Main />, document.body);
});
