import React, {useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { Public, Twitter, Facebook, Linkedin, Intragram } from '@material-ui/icons';
import { loadCSS } from 'fg-loadcss';

const useStyles = makeStyles(theme => ({
	card: {
		width: '100%',
		background: '#17a2b8',
		color: 'white',
		marginBottom: '2rem'	
	},
	img: {
		borderRadius: '50%'
	},
	container: {
		margin: '3rem 0',

		'& h4, h6': {
			margin: '.5rem 0'
		}
	},
	icon: {
		color: 'white'
	},
	btn: {
		marginBottom: 30
	}

}));

const DeveloperHeader = () => {
	const classes = useStyles();

	useEffect(() => {
	    const node = loadCSS(
	      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
	      document.querySelector('#font-awesome-css'),
	    );

	    return () => {
	      node.parentNode.removeChild(node);
	    };
  	}, []);

	return (
		<React.Fragment>
			<Button 
				href='/developers' 
				size='large' 
				variant='contained'
				className={classes.btn}
				> Back to profiles 
			</Button>

			<Card raised className={classes.card}>
				<Grid
					container
					justify='center'
					alignItems='center'
					direction='column'
					className={classes.container}
				>
					<img 
						src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" 
						className={classes.img} 
						/>
						<Typography variant='h3'> John Doe </Typography>
						<Typography variant='subtitle1'>Developer at Microsoft </Typography>
						<Typography variant='subtitle1'> Seattle, WA </Typography>

						<div>
							{
								['globe-asia', 'twitter', 'facebook', 'linkedin', 'instagram'].map((icon, index) =>
										(
											<IconButton key={index} className={classes.icon}>
												{ index === 0 
													? ( <Icon className={`fas fa-${icon}`} /> )
													: ( <Icon className={`fab fa-${icon}`} /> )
												}
											</IconButton>	
										)
									)
							}
						</div>
					</Grid>
			</Card>
		</React.Fragment>
	)
}

export default DeveloperHeader