import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextFields from '../common/TextFields'
import AccountCircle from '@material-ui/icons/AccountCircle';
import PageHeader from '../common/PageHeader';

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
	subHeader: {
		display: 'inline-flex',
		'& > svg' : {
			marginRight: '10px'
		}
	},
	field: {
		margin: '.5rem 0'
	},
	form: {
		display: 'flex',
		flexDirection: 'column'
	}
}))

const DeveloperCreate = () => {
	const {subHeader, root, field, form} = useStyles();

	const [values, setValues] = useState({
		position: '',
		company: '',
		website: '',
		location: '',
		skills: '',
		github: '',
		bio: '',
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
		textField('website', 'text'),
		textField('location', 'text'),
		textField('skills', 'text'),
		textField('github', 'text'),
		textField('bio', 'textArea', 'Tell us a little about yourself'),
	];

	return (
		<Grid container>
			<Grid item xs={1}/>
			<Grid container item xs={10} className={root}>

				<PageHeader
					title='Create new developer'
					subtitle='Make your profile stand out'
					icon={<AccountCircle color='secondary' />}
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

export default DeveloperCreate