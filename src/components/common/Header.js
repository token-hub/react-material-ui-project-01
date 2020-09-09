import React, {useState, useContext} from 'react';
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

const useStyles = makeStyles({
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
		flex: 1
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
})

const Header = ({ history }) => {
	const router = useContext(RouterContext);
	const classes = useStyles();

	return (
		<React.Fragment>
			<AppBar position='static' color='secondary' className={classes.root}>
				<Toolbar className={classes.toolBar}>
					<IconButton onClick={router.handleDrawer()} >
						<MenuIcon style={{ color: 'white' }} />
					</IconButton>
						<DrawerComp />
						<Typography variant='h5' className={classes.brand}>
							DevConnector
						</Typography>

						<Hidden xsDown>
							<div className={classes.headerClickable}>
							{
								['Landing' ,'Developers', 'Register', 'Login'].map((header, index) => 
									(
										<Typography key={index}>
											<Link 
												href="#" 
												className={classes.link}
												onClick={ router.routeHandler(`${header.toLowerCase()}`)  }
												> {header}
											</Link>
										</Typography>
									)
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