import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import img from '../../img/coding.jpeg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { RouterContext } from '../../App';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	overlay: {
		height: '100%',
	    width: '100%',
	    top: 0,
	    left: 0,
	    background: `rgba(0, 0, 0, 0.7)`,
	},
	landing: {
		height: '90%',
		position: 'relative',
		background: `url(${img}) no-repeat center center/cover`,
		overflow: 'hidden',
	},
	container: {
		color: '#ffffff',
		height: '90%',
		weight: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		flexDirection: 'column',
		padding: '0 20px',
		'& h1' : {
			padding: '10px 0',
			[theme.breakpoints.down('sm')] : {
				fontSize: '3rem',
			}
		},

		'& h6' : {
			[theme.breakpoints.down('sm')] : {
				fontSize: '1rem',
				textAlign: 'center'
			}
		}


		
	},
	button: {
		display: 'flex',
		margin: '10px 0',

		'& button': {
			margin: '0 5px'
		}
	}  
}))

const Landing = () => {
	const router = useContext(RouterContext);
	const classes = useStyles();

	return (
		<Grid container className={classes.landing}>
			<Grid container className={classes.overlay}>
				<Grid item sm={12} >
					<div className={classes.container}>
						<Typography variant='h1'> Developer Connector </Typography>
						<Typography variant='h6'> Create developer profile/porfolio, share posts and get help from other developers </Typography>
						<div className={classes.button}>
							<Button 
								variant='contained' 
								color='primary' 
								onClick={router.routeHandler('register')}
								> Sign Up
							</Button>
							<Button 
								variant='contained' 
								color='default'
								onClick={router.routeHandler('login')}
								> Login 
							</Button>
						</div>
					</div>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Landing