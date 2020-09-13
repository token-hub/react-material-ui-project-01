import React from 'react'
import Grid from '@material-ui/core/Grid';
import DeveloperHeader from './DeveloperHeader';
import DeveloperBioSkillSet from './DeveloperBioSkillSet';
import DeveloperExpEdu from './DeveloperExpEdu';
import DeveloperGithub from './DeveloperGithub';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		width: '100%',
		margin: '2rem 0'
	},
	container: {
		margin: '2rem'
	}
})

const Developer = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<Grid item xs={1} />
			<Grid item container xs={10}>
				<DeveloperHeader />
				<DeveloperBioSkillSet />
				<DeveloperExpEdu />
				<DeveloperGithub />
			</Grid>
			<Grid item xs={1} />
		</Grid>
	)
}

export default Developer