import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../Geral'
import Trab1 from '../Principais/Pagina1'
import Trab13 from '../Principais/Pagina2'
import Trab134 from '../Principais/Pagina3'
import Trab1343 from '../Principais/Pagina4'


function RoutesTrab() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/T1" component={Trab1} />
                <Route exact path="/T1/3" component={Trab13} />
                <Route exact path="/T1/3/4" component={Trab134} />
                <Route exact path="/T1/3/4/3" component={Trab1343} />
            </Switch>
        </BrowserRouter>


    );
}

export default RoutesTrab;