import express from "express";
import React from "react";
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import App from './client/App';
import Html from './client/Html';


const PORT = 3001;
const server = express();
const sheet = new ServerStyleSheet();

server.get('/', (req, res) => {
    const body = renderToString(<App />);
    const styles = sheet.getStyleTags();
    const title = 'Server side Rendering with Styled Components';
    
    res.send(Html({
        body,
        styles,
        title
    }));
});

server.listen(PORT);