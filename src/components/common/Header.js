import React, {useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerComp from './DrawerComp';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/link';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { RouterContext } from '../../App';

const useStyles = makeStyles(theme => ({
	root: {
		borderBottom: '1px solid #17a2b8',
		opacity: '0.9',
		zIndex: '100',
		position: 'static',
		height: '10%',
		justifyContent: 'center'
	},
	brand: {
		color: 'white',
		flex: 1,
		'&:hover': {
			textDecoration: 'none',
			color: theme.palette.primary.main
		}
	},
	headerClickable: {
		display: 'flex',
	},
	link: {
		color: 'white',
		textDecoration: 'none',
		padding: '0 10px',

		'&:hover': {
			textDecoration: 'none',
			color: '#17a2b8'
		}
	}
}))

const Header = ({ location }) => {

	const { routes, handleDrawer, routeHandler, isLanding } = useContext(RouterContext);
	const classes = useStyles();

	return (
		<React.Fragment>
			<AppBar position='static' color='secondary' className={classes.root}>
				<Toolbar className={classes.toolBar}>
					<Hidden smUp>
						<IconButton onClick={handleDrawer(true)} >
							<MenuIcon style={{ color: 'white' }} />
						</IconButton>
						<DrawerComp />
					</Hidden>
					<Link 
						variant='h5'
						href='/home' 
						className={classes.brand}>
						DevConnector
					</Link>

					<Hidden xsDown>
						<div className={classes.headerClickable}>
						{
							routes.filter( ({title, route}) => isLanding ? title === 'Register' || title === 'Login' : title !== 'Register' && title !== 'Login' )
							.map(({title, route}, index) => 
								{
									return (
											<Typography key={index}>
												<Link 
													href="#" 
													className={classes.link}
													onClick={routeHandler(route ? route : `${title.toLowerCase()}`)  }
													> {title}
												</Link>
											</Typography>
										)
								}
							)
						}
						</div>
					</Hidden>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	)
}

export default withRouter(Header) 