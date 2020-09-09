import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		paddingTop: '6rem'
	},
})

const Developers = () => {
	const classes = useStyles();
	return (
		<div>
			<Grid container >
				<Grid item sm={2} />
				<Grid item sm={8} className={classes.root}>
				
				</Grid>
				<Grid item sm={2} />
			</Grid>
		</div>
	)
}

export default Developers