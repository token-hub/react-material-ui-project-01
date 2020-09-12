import React, {useState} from 'react';
import Header from './components/common/Header';
import { Route, Switch, withRouter } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Login from './components/Login';
import Register from './components/Register';
import PageNotPage from './components/common/PageNotFound';
import Developers from './components/developers/Developers';
import DeveloperCreate from './components/developers/DeveloperCreate';
import DeveloperExpAdd from './components/developers/DeveloperExpAdd';
import DeveloperEduAdd from './components/developers/DeveloperEduAdd';
import Developer from './components/developers/Developer';
import Home from './components/home/Home';
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
		setCollapse(false);
		setOpenDrawer(false);
		history.push(`/${route}`); 
	}

	const handleCollapse = (e) => {
		setCollapse(e);
	}

	const handleDrawer = (e) => () =>{
		setOpenDrawer(e);
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
					<Route path='/developer/create' component={DeveloperCreate} />
					<Route path='/developer/experience/add' component={DeveloperExpAdd} />
					<Route path='/developer/education/add' component={DeveloperEduAdd} />
					<Route path='/developer' component={Developer} />
					<Route path='/home' component={Home} />
					<Route component={PageNotPage} />
				</Switch>
			</RouterContext.Provider>
		</div>
	)
}

export default withRouter(App)