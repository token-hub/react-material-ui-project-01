import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextFields from '../common/TextFields'
import PageHeader from '../common/PageHeader';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

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

const DeveloperEduAdd = () => {
	const {root, form} = useStyles();

	const [values, setValues] = useState({
		school: '',
		degree: '',
		fieldOfStudy: '',
		fromDate: '2020-09-04',
		toDate: '00-00-0000',
		currentSchool: false,
		programDescription: '',
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
		textField('school', 'text'),
		textField('degree', 'text'),
		textField('fieldOfStudy', 'text', 'Field of study'),
		textField('fromDate', 'date', 'From Date'),
		textField('toDate', 'date', 'From Data'),
		textField('currentSchool', 'checkbox', 'Current school'),
		textField('programDescription', 'textarea', 'Program description'),
	];

	return (
		<Grid container>
			<Grid item xs={1}/>
			<Grid container item xs={10} className={root}>

				<PageHeader
					title='Add your education'
					subtitle='Add any school, bootcamp, etc that you have attended'
					icon={<ImportContactsIcon color='secondary' />}
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

export default DeveloperEduAdd