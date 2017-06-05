'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute,hashHistory as history} from 'react-router';

import App                        from './container/App';
import Home                        from './container/Home';
import NotFound                        from './container/NotFound';

export default (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/" component={Home} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);

