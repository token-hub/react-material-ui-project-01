import React from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';

const useStyles = makeStyles( theme => ({
	img: {
		borderRadius: '50%',
		height: '100%',
		width: '100%'
	},
	padding: {
		padding: '10px 30px',

		'& > p': {
			padding: '3px 0'
		}
	},
	card: {
		width: '100%',
		padding: '.8rem 0',
		margin: '2rem 0'
	},
	alignItems: {
		[theme.breakpoints.only('xs')]: {
			alignItems: 'center'
		},

		'& > p' : {
			[theme.breakpoints.only('xs')]: {
				fontSize: '0.8rem'
			},
		}

	}
}))

const DeveloperCamp = ({ developer, description, location, skils = [] }) => {

	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<Grid container>
				<Grid sm={3} 
					item 
					container 
					justify='center' 
					className={classes.padding}
					>
					<img 
						alt=''
						src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" 
						className={classes.img} 
					/>
				</Grid>
				<Grid sm={6} 
					item 
					container 
					justify='center' 
					alignItems='baseline' 
					direction='column' 
					className={clsx(classes.padding, classes.alignItems)}
					>
					<Typography variant='h4' color='secondary'> { developer } </Typography>
					<Typography variant='body1'>{ description } </Typography>
					<Typography variant='body1'> { location } </Typography>
					<Button
						href='/developer'
						variant='contained' 
						color='primary'
						> View profile 
					</Button>
				</Grid>
				<Grid sm={3} 
					item 
					container 
					justify='center' 
					direction='column' 
					alignItems='center'
					>
					<Hidden only='xs'>
					{
						skils.length > 0 && skils.map(skill =>
							(
								<Typography variant='body1' color='primary' key={skill}>
									<DoneIcon color='primary' />
								 	{skill[0].toUpperCase()+skill.slice(1)} 
								</Typography>
							)
						)
					}
					</Hidden>
				</Grid>
			</Grid>
		</Card>
	)
}

export default DeveloperCamp;