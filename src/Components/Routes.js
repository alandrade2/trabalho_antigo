import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Trabalhos/Geral'
import Routes1 from '../Trabalhos/T1/Rotas/Routes_T1';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Routes1 />    

            </Switch>
        </BrowserRouter>


    );
}

