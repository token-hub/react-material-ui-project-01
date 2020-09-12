import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DeveloperCard from './DeveloperCard';
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code';
import PageHeader from '../common/PageHeader';

const useStyles = makeStyles(theme => ({
	root: {
		padding: '4rem 2rem',
		flexDirection: 'column',
		[theme.breakpoints.only('xs')]: {
			padding: '2rem',
		},
		'& > h3' : {
			[theme.breakpoints.only('xs')]: {
				fontSize: '2rem',
			},
		}
	},
}))

const Developers = () => {
	const classes = useStyles();
	
	const createData = (name, description, location, skills = []) => {
		return { name, description, location, skills }
	}

	const developers = [
		createData('John Doe', 'Developer at Microsoft', 'Seattle, WA', ['HTML', 'Javascript', 'CSS', 'PYTON']),
		createData('John Doe', 'Developer at Microsoft', 'Seattle, WA', ['HTML', 'Javascript', 'CSS', 'PYTON'])
	]

	return (
		<div>
			<Grid container >
				<Grid item sm={2} />
				<Grid item sm={8} container className={classes.root}>

					<PageHeader
						title='Add An Experience'
						subtitle='Add any developer/programming positions that you have had in the past'
						icon={<AccountCircle color='secondary' />}
					/>

					<Button
						href='/developer/create' 
						variant='contained' 
						size='large'>
						Add developer
					</Button>

					{
						developers.map( ({name, description, location, skills}, index) => 
							(
								<DeveloperCard
									name={name}
									description={description}
									location={location}
									skils={skills}
									key={index}
								/>
							) 
						)
					}

				</Grid>
				<Grid item sm={2} />
			</Grid>
		</div>
	)
}

export default Developers