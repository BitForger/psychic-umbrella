import React, {Component} from 'react';
import './App.scss';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {Home} from "./routes/Home";
import {Details} from "./routes/Details";
import {Grommet} from "grommet";

const theme = require('./theme.json');


export class App extends Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Router>
            <Grommet theme={theme} className={'application-base'}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path="/:id" component={Details} />
                </Switch>
            </Grommet>
        </Router>
    }
}
