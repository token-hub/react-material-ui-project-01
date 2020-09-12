import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
	card: {
		width: '100%',
		padding: '2rem',
		marginBottom: '1rem'
	},
	list: {
		display: 'block',
		width: '100%'
	}
}))

const TemplateGithub = ({ githubData: { title, description, stars, watchers, forks } }) => {
	
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Card className={classes.card}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={8}>
					<Typography color='primary' variant='h5'>
						{title}
					</Typography>
					<Typography variant='body1'>
						{description}
					</Typography>
				</Grid>
				<Grid item container direction='column' xs={12} sm={4}>
					<List dense>
						<ListItem 
							style={{
								background: theme.palette.primary.main,
								color: 'white'
							}}
							>Stars: {stars}
						</ListItem>
						<ListItem 
							style={{
								background: theme.palette.secondary.main,
								color: 'white'
							}}
							>Watchers: {watchers}
						</ListItem>
						<ListItem 
							style={{background: theme.palette.primary.contrastText}}>
							Froks: {forks}
						</ListItem>
					</List>
				</Grid>
			</Grid>	
		</Card>
	)
}

export default TemplateGithub