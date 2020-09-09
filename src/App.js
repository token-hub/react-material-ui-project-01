import React, {useState} from 'react';
import Header from './components/common/Header';
import { Route, Switch, withRouter } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Login from './components/Login';
import Register from './components/Register';
import PageNotPage from './components/common/PageNotFound';
import Developers from './components/Developers';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

export const RouterContext = React.createContext();

const useStyles = makeStyles({
	root: {
		height: '100vh'
	}
})

const App = ({ history }) => {

	const classes = useStyles();
	const [collapse, setCollapse] = useState(false);
	const [openDrawer, setOpenDrawer] = useState(false);

	const handleRoute = route => () => {
		setCollapse(!collapse);
		setOpenDrawer(!openDrawer);
		history.push(`/${route}`); 
	}

	const handleCollapse = () => {
		setCollapse(!collapse);
	}

	const handleDrawer = () => () =>{
		setOpenDrawer(!openDrawer);
	}

	const context = {
		routeHandler: handleRoute,
		collapse: collapse,
		handleCollapse: handleCollapse,
		drawer: openDrawer,
		handleDrawer: handleDrawer
	}

	return (
		<div className={classes.root} >
		<CssBaseline />
			<RouterContext.Provider value={context}>
				<Header />
				<Switch>
					<Route path='/landing' exact component={Landing} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/developers' component={Developers} />
					<Route component={PageNotPage} />
				</Switch>
			</RouterContext.Provider>
		</div>
	)
}

export default withRouter(App)