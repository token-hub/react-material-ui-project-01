import React from 'react'
import TemplateExpEdu from './TemplateExpEdu';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	button: {
		backgroundColor: '#f50057',
		color: 'white',
		'&:hover': {
			backgroundColor: '#c51162'
		}
	}
})

const CredentialExpEdu = () => {
	
	const {button} = useStyles();

	const data = {
		title: 'Experience Credentials',
		header: ['Company', 'Position', 'Years', ''],
		body: [ 
				{
					title: 'Microsoft',
					position: 'Senior Developer',
					date: 'Oct 2011 - Current',
					action: <Button className={button} variant='contained'>Delete</Button>
				},
				{
					title: 'Microsoft',
					position: 'Senior Developer',
					date: 'Oct 2011 - Current',
					action: <Button className={button} variant='contained'>Delete</Button>
				}
			 ]
	}

	const data2 = {
		title: 'Experience Credentials',
		header: ['School', 'Degree', 'Years', ''],
		body: [ 
				{
					title: 'University of washington',
					position: 'Masters',
					date: 'Oct 1999 - Nov 2010',
					action: <Button className={button} variant='contained'>Delete</Button>
				}
			 ]
	}

	return (
		<div>
			<TemplateExpEdu data={data} />
			<TemplateExpEdu data={data2} />
		</div>
	)
}

export default CredentialExpEdu