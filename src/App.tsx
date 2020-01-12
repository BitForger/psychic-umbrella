import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Box, Grommet} from "grommet";
import {Table} from "./components/Table";

const theme = require('./theme.json');

const App: React.FC = () => {
    return (
        <div className="App">
            <Grommet theme={theme}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <Box
                    direction="row"
                    pad="medium"
                >
                    <Table />
                </Box>
            </Grommet>
        </div>
    );
}

export default App;
