import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		marginBottom: '1rem'
	},
	subHeader: {
		display: 'inline-flex',
		'& > svg' : {
			marginRight: '10px'
		}
	}
})

const PageHeader = ({ title, subtitle, icon }) => {
	const { subHeader, root } = useStyles();

	return (
		<div className={root}>
			<Typography variant='h3' color='primary'>
					{ title }
			</Typography>	

			<div className={subHeader}>
				{icon}
				<Typography variant='subtitle1' color='secondary'>
					{subtitle}
				</Typography>
			</div>
		</div>
	)
}

PageHeader.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired
}

export default PageHeader