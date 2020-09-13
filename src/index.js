import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import './App.css';
import Store from './redux/Store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/Theme';

render(
	<Router>
		<Provider store={Store} >
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</Router>
	, document.getElementById('root')
)