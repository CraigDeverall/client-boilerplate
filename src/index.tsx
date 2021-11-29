import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

const applicationRoot = document.createElement('div');
applicationRoot.id = "application-root";
document.body.appendChild(applicationRoot)
ReactDOM.render(<App/>, applicationRoot)