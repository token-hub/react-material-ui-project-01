import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Inbox from '@material-ui/icons/Inbox';
import Drafts from '@material-ui/icons/Drafts';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import { RouterContext } from '../../App';
import { withRouter} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		[theme.breakpoints.only('xs')]: {
	     width: '200px'
	    },
	    width: '250px'
	},
	button: {
		display: 'flex',
		width: '100%'
	},
	collapse: {
		paddingLeft: '20px'
	}
}))

const DrawerComp = ({ location }) => {

	const { handleDrawer, routeHandler, drawer, isLanding, routes } = useContext(RouterContext);
	const [collapse, setCollapse] = useState(false);
	const classes = useStyles();

	return (
		<React.Fragment>
			<Drawer  
				open={drawer}
				variant='temporary'
			>

				<List className={classes.root}>
					<Button 
						color='inherit' 
						className={classes.button}
						onClick={handleDrawer(false)}
						>Close
						</Button>
					<ListItem divider />
					{	
						routes.filter( ({title, route}) => isLanding ? title === 'Register' || title === 'Login' : title !== 'Register' && title !== 'Login' )
						.map( ({title, route}, index) => (

							<ListItem 
								key={index} 
								button
								onClick={routeHandler(route ? route : `${title.toLowerCase()}`)  }
							>
								<ListItemIcon> 
								 	{ index %  2 ==  0 ? <Inbox /> : <Drafts /> }
								</ListItemIcon>
								<ListItemText primary={title} />
							</ListItem>
						) )
					}

					<ListItem divider />
					<ListItem button onClick={ () => setCollapse(!collapse) }>
						<ListItemIcon> 
						 	<Inbox />
						</ListItemIcon> 
						<ListItemText primary='Inbox' />
							{ collapse ? <ExpandLess /> : <ExpandMore /> }
					</ListItem>
					<Collapse 
						in={collapse} 
						className={classes.collapse}
						>
						{
							['Inbox', 'Drafts', 'Inbox', 'Drafts'].map( (list, index) => (
								<ListItem key={index} button>
									<ListItemIcon> 
									 	{ list == 'Inbox' ? <Inbox /> : <Drafts /> }
									</ListItemIcon>
									<ListItemText primary={list} />
								</ListItem>
							) )
						}
					</Collapse>
				</List>
			</Drawer>
			
		</React.Fragment>
	)
}

export default withRouter(DrawerComp)


/*
					<div className={classes.headerClickable}>
						{
							['Landing' ,'Developers', 'Register', 'Login'].map((header, index) => 
								(
									<Typography key={index}>
										<Link 
											href="#" 
											className={classes.link}
											onClick={ router(`${header.toLowerCase()}`)  }
											> {header}
										</Link>
									</Typography>
								)
							)
						}
					</div>

 */