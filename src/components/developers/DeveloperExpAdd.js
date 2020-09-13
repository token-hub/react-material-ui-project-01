import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextFields from '../common/TextFields'
import PageHeader from '../common/PageHeader';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles(theme => ({
	root: {
		padding: '2rem 1rem',
		flexDirection: 'column',
		[theme.breakpoints.only('xs')]: {
			padding: '2rem 1rem',
		},
		'& > h3' : {
			[theme.breakpoints.only('xs')]: {
				fontSize: '2rem',
			},
		}
	},
	form: {
		display: 'flex',
		flexDirection: 'column'
	}
}))

const DeveloperExpAdd = () => {
	const {root, form} = useStyles();

	const [values, setValues] = useState({
		position: '',
		company: '',
		location: '',
		fromDate: '2020-09-04',
		toDate: '00-00-0000',
		currentJob: false,
		jobDescription: '',
	});

	const handleChange = e => {
		const { value, name } = e.target;
		setValues({
			...values,
			[name]: value
		})
	}

	const textField = (name, fieldType, placeholder = null) => {
		return {name, placeholder, fieldType}
	}

	const fields = [
		textField('position', 'select'),
		textField('company', 'text'),
		textField('location', 'text'),
		textField('fromDate', 'date', 'From Date'),
		textField('toDate', 'date', 'From Data'),
		textField('currentJob', 'checkbox', 'Current Job'),
		textField('jobDescription', 'textarea', 'Job description'),
	];

	return (
		<Grid container>
			<Grid item xs={1}/>
			<Grid container item xs={10} className={root}>

				<PageHeader
					title='Add an experience'
					subtitle='Add any developer/programming positions that you have had in the past'
					icon={<CodeIcon color='secondary' />}
				/>

				<form action="" className={form}>

					<TextFields 
						fields={fields}
						values={values}
						handleChange={handleChange}
					/>

					<Button color='primary' margin='normal' variant='contained' href='#'>Submit</Button>
				</form>
			</Grid>		
			<Grid item xs={1}/>	
		</Grid>	
	)
}

export default DeveloperExpAdd