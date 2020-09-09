import React from 'react';
import Typography from '@material-ui/core/Typography';

const PageNotFound = () => {
	
	const style = {
		display: 'flex',
		height: '100vh',
		justifyContent: 'center',
		alignItems: 'center'
	}

	return (
		<React.Fragment>
			<Typography variant='h2' style={style}> Opps! Page not found! </Typography>
		</React.Fragment>
	) 
}

export default PageNotFound