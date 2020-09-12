import React from 'react'
import Grid from '@material-ui/core/grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import HistoryIcon from '@material-ui/icons/History';
import CredentialExpEdu from './CredentialExpEdu';
import PageHeader from '../common/PageHeader';

const useStyles = makeStyles({
	root: {
		margin: '2rem 0',
		height: '90%',
		width: '100%'
	},
	subHeader: {
		display: 'flex',
		'& > svg' : {
			marginRight: '10px'
		}
	},
	margin: {
		marginTop: '1rem'
	},
	width: {
		width: '100%',
		marginBottom: '3rem'
	},
	button: {
		backgroundColor: '#f50057',
		color: 'white',
		'&:hover': {
			backgroundColor: '#c51162'
		}
	}
})

const Home = () => {
	const classes = useStyles()

	const createData = (title, icon, href = '#') => {
		return { title, icon, href };
	}

	const data = [
		createData('Edit Profile', <AccountCircle color='primary'/>, '/developer/create'),
		createData('Add Experience', <HistoryIcon color='primary'/>, '/developer/experience/add'),
		createData('Edit Education', <ImportContactsIcon color='primary'/>, '/developer/education/add'),
	]

	return (
		<Grid container className={classes.root}>
			<Grid item xs={1} />
			<Grid item xs={10} className={classes.width}>

				<PageHeader
					title='Dashboard'
					subtitle='Welcome John Doe'
					icon={<AccountCircle color='secondary' />}
				/>

				<Grid container className={classes.width}>
					<Grid item xs={12} sm={8} className={classes.margin} >
						{
							data.map( ({ title, icon, href }, index) => (
								<Button
									key={index}
									variant='contained'
									color='default'
									startIcon={icon}
									style={{ margin: '.5rem' }}
									href={href}
								> {title}
								</Button>
							) )
						}	
					</Grid>
				</Grid>

				<CredentialExpEdu  />
				
				<Button className={classes.button} variant='contained'> Delete my account </Button>
			</Grid>
			<Grid item xs={1} />
		</Grid>
	)
}

export default Home