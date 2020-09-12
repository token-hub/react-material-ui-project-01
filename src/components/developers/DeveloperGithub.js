import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import TemplateGithub from './TemplateGithub';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		margin: '2rem 0'
	},
	title: {
		color: theme.palette.primary.main
	}
}))

const githubData = {
	title : 'Repo One',
	description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique?',
	stars : '44',
	watchers : '20',
	forks : '25',
}

const DeveloperGithub = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Grid container className={classes.root}>
				<Grid container className={classes.title}>
					<GitHubIcon />
					<Typography variant='button' style={{ marginLeft: '5px' }}>Github</Typography>
				</Grid>
			</Grid>
			<TemplateGithub githubData={githubData} />
			<TemplateGithub githubData={githubData} />
			<TemplateGithub githubData={githubData} />
		</React.Fragment>
	)
}

export default DeveloperGithub