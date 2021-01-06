import React from 'react';
import './styles/index.scss';
import ReactGA from 'react-ga';
import { hydrate, render } from 'react-dom';
import App from './App';

ReactGA.initialize('UA-127488741-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
