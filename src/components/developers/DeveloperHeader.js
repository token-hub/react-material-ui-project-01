import React, {useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { Public, Twitter, Facebook, LinkedIn, Instagram } from '@material-ui/icons';

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
		marginBottom: 20,
		margin: '0 5px'
	}
}));

const DeveloperHeader = () => {
	const {card, img, container, icon, btn} = useStyles();
	
	const component = { Public, Twitter, Facebook, LinkedIn, Instagram }

	function iconComponent(icon, style) {
		const Icon = component[icon];
	    return <Icon  className={style} />;
	}

	return (
		<React.Fragment>
			<Button 
				href='/developers' 
				size='large' 
				variant='contained'
				className={btn}
				> Back to profiles 
			</Button>

			<Card raised className={card}>
				<Grid
					container
					justify='center'
					alignItems='center'
					direction='column'
					className={container}
				>
					<img 
						src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" 
						className={img} 
						/>
						<Typography variant='h4'> John Doe </Typography>
						<Typography variant='subtitle1'>Developer at Microsoft </Typography>
						<Typography variant='subtitle1'> Seattle, WA </Typography>

						<div>
							{
								['Public', 'Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map( icon => {
									return iconComponent(icon, btn)
								} )
							}
						</div>
					</Grid>
			</Card>
		</React.Fragment>
	)
}

export default DeveloperHeader