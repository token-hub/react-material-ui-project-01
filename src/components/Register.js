import React from 'react';
import Grid from '@material-ui/core/grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import PageHeader from './common/PageHeader';

const useStyles = makeStyles({
	root: {
		padding: '2rem 0',
		height: '90%',
		margin: '30px 0'
	},
	subHeader: {
		display: 'flex',
		'& > svg' : {
			marginRight: '10px'
		}
	},
	form: {
		margin: '1rem 0',
		width: '100%',

		'& > div': {
			margin: '0.8rem 0'
		},
	},
	link: {
		'&:hover': {
			textDecoration: 'none'
		} 
	}
})

const createInput = (type, label) => {
	return {type, label}
}

const data = [
	createInput('text', 'Name'),
	createInput('email', 'Email'),
	createInput('password', 'Password'),
	createInput('password', 'Confirm Password')
]

const Register = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<Grid item xs={2}  />
			<Grid item xs={8} >

				<PageHeader
					title='Sign Up'
					subtitle='Sign in to your account'
					icon={<AccountCircle color='secondary' />}
				/>

				<form className={classes.form} noValidate autoComplete="off">
					{
						data.map( ({ type, label }, index) => 
							(
								<TextField 
									type={type} 
									label={label} 
									variant="outlined" 
									fullWidth 
									key={index}
								/>
							)
						)
					}
					<Button color='primary' variant='contained' size='large'> Register </Button>
				</form>
				<Typography variant='body1' color='secondary' >
				 	Already have an account? 
				 	<Link 
				 		href='/login' 
				 		color='primary' 
				 		className={classes.link}>
				 		{" "}Sign in 
				 	</Link>
				</Typography>
			</Grid>
			<Grid item xs={2} />
		</Grid>
	)
}

export default Register