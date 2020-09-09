import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/Theme';

render(
	<Router>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Router>
	, document.getElementById('root')
)