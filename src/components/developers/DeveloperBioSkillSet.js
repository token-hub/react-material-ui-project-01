import React, {useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider';
import DoneIcon from '@material-ui/icons/Done';
import { DevContext } from './ManageDevelopers';

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
	const {developer, bio, skills} = useContext(DevContext);

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
					<Typography variant='h4' color='primary'>{`${developer}'s Bio`}</Typography>
					<Typography>
						{bio}
					</Typography>
					
					<Divider className={classes.divider} />
					<Typography variant='h4' color='primary'>Skill Set</Typography>
					<Grid container className={classes.skills}>
					{
						skills !== undefined && skills.map((skill, index) => 
							(
								<div className={classes.skill} key={index}>
									<DoneIcon color='primary' />
									<Typography>{skill[0].toUpperCase()+skill.slice(1)}</Typography>
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