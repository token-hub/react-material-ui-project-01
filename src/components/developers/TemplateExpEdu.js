import React, {useState} from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
	root: {
		padding: '2rem',
		marginBottom: '2rem',
		width: '100%',
		height: '100%'
	},
	bold: {
		fontWeight: 'bold',
		paddingRight: '5px'
	},
	dataContainer: {
		margin: '5px 0'
	},
	divider: {
		height: 1,
		width: '100%',
		margin: '2rem 0'
	},
})

const TemplateExpEdu = ({ title, exp }) => {

	const classes = useStyles();

	return (
		<Card
			raised
			className={classes.root}
			>
			<Grid 
				item 
				container 
				xs={12}
				>
				<Typography variant='h5' color='primary'>{title}</Typography>
				{
					exp.map( (val, index) => 
						{
							let data = Object.entries(val);
							return (
								<React.Fragment key={index}>
									{
										data.map( (val2, index2) => (
											<Grid 
												container 
												direction='row' 
												key={index2} 
												className={classes.dataContainer}
												>
												<Typography variant='body1' className={classes.bold} >{`${val2[0]}:`}</Typography>	
												<Typography variant='body1'>{val2[1]}</Typography>	
											</Grid>
										) )
									}
									{
										(index !== exp.length - 1 && exp.length > 1) && <Divider className={classes.divider} />
									}
								</React.Fragment>
							)
						}
					)
				}
			</Grid>
		</Card>
	)
}

export default TemplateExpEdu