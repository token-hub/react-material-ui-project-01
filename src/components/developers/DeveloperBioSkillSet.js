import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		padding: '2rem',
		marginBottom: '2rem'
	},
	divider: {
		height: 1,
		width: '100%',
		margin: '2rem 0'
	},
	skills: {
		justifyContent: 'center',
		[theme.breakpoints.only('xs')] : {
			display: 'block',
		}
	},
	skill: {
		display: 'flex',
		margin: '1rem',
	}
}))

const DeveloperBioSkillSet = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Card 
				raised 
				className={classes.root}>
				<Grid 
					container 
					alignItems='center'
					direction='column'
					style={{ textAlign: 'center' }}
					>
					<Typography variant='h4' color='primary'>John's Bio</Typography>
					<Typography>
						Lorem, ipsum dolor sit, amet consectetur adipisicing elit.
						Quisquam nulla consectetur nihil placeat, cumque possimus 
						debitis iste ea non quidem, modi dolorem delectus nesciunt
						adipisci aliquid ipsa asperiores commodi voluptatibus.
					</Typography>
					
					<Divider className={classes.divider} />
					<Typography variant='h4' color='primary'>Skill Set</Typography>
					<Grid container className={classes.skills}>
					{
						['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON'].map((skill, index) => 
							(
								<div className={classes.skill} key={index}>
									<DoneIcon color='primary' />
									<Typography>{skill}</Typography>
								</div>
							)
						)
					}
					</Grid>
				</Grid>
			</Card>
		</React.Fragment>
	)
}

export default DeveloperBioSkillSet