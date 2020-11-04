import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SiteHome from './pages/SiteHome';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SiteHome} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;