import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	subHeader: {
		display: 'inline-flex',
		'& > svg' : {
			marginRight: '10px'
		}
	}
})

const PageHeader = ({ title, subtitle, icon }) => {
	const { subHeader } = useStyles();

	return (
		<React.Fragment>
			<Typography variant='h3' color='primary'>
					{ title }
			</Typography>	

			<div className={subHeader}>
				{icon}
				<Typography variant='subtitle1' color='secondary'>
					{subtitle}
				</Typography>
			</div>
		</React.Fragment>
	)
}

PageHeader.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired
}

export default PageHeader