import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import BookDetails from './components/details/bookDetails';

const routes = (
    <Route path="/">
        <IndexRoute component={App} />
        <Route path="/book/:bookId" component={BookDetails} />
    </Route>
);

export default routes;
