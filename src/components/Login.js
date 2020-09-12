import React from 'react';
import Grid from '@material-ui/core/grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Alert from '@material-ui/lab/Alert';
import PageHeader from './common/PageHeader';

const useStyles = makeStyles({
	root: {
		padding: '3rem 0',
		height: '90%'
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
	createInput('email', 'Email'),
	createInput('password', 'Password'),
]

const Login = () => {
	const classes = useStyles()
	return (
		<Grid container className={classes.root}>
			<Grid item xs={2} />
			<Grid item xs={8}>
				<Alert severity="error" variant='filled'>This is an error alert — check it out!</Alert>

				<PageHeader
					title='Sign In'
					subtitle='Create your profile'
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
					<Button color='primary' variant='contained' size='large'> Login </Button>
				</form>
				<Typography variant='body1' color='secondary' >
				 	Dont have an account? 
				 	<Link 
				 		href='/register' 
				 		color='primary' 
				 		className={classes.link}>
				 		{" "} Register 
				 	</Link>
				</Typography>
			</Grid>
			<Grid item xs={2} />
		</Grid>
	)
}

export default Login