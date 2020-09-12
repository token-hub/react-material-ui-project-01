import React from 'react'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		margin: '2rem 0',
	}
})

const TemplateExpEdu = ({data : {title, header, body} }) => {
	const classes = useStyles()
	return (
		<Grid container className={classes.root}>
			<Typography variant='h5' color='secondary'>{title}</Typography>

			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							{
								header.map((val, index) => (
									<TableCell key={index}>{val}</TableCell>
								))
							}
							</TableRow>
					</TableHead>
					<TableBody>
						{
							body.map((val, index) => (
								<TableRow key={index}>
									<TableCell>{val.title}</TableCell>
									<TableCell>{val.position}</TableCell>
									<TableCell>{val.date}</TableCell>
									<TableCell>{val.action}</TableCell>
								</TableRow>
							))
						}
					</TableBody>
				</Table>
			</TableContainer>
		</Grid>
	)
}

TemplateExpEdu.propTypes = {
	data: PropTypes.object.isRequired
}

export default TemplateExpEdu