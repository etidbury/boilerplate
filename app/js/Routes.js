'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';

import App                        from './container/App';
import Home                        from './container/Home';
import NotFound                        from './container/NotFound';

export default (
    <Router history={CreateBrowserHistory()}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/" component={Home} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);