import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextFields from '../common/TextFields'
import AccountCircle from '@material-ui/icons/AccountCircle';
import PageHeader from '../common/PageHeader';
import { processCreateDeveloper as createDeveloper } from '../../redux';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { processGetDevelopers as getDevelopers } from '../../redux';

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

const DeveloperCreate = ({ createDeveloper, history, getDevelopers }) => {
	const {root, form} = useStyles();

	useEffect( () => {
		getDevelopers();
	}, [] )

	const [values, setValues] = useState({
		developer: '',
		description: 'Developer',
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
			[name]: name === 'skills' ? value.split(',') : value
		})
	}

	const onSubmit = e => {
		e.preventDefault();
		createDeveloper(values);
		history.push('/developers')
	}

	const textField = (name, fieldType, placeholder = null) => {
		return {name, placeholder, fieldType}
	}

	const fields = [
		textField('developer', 'text', 'Name'),
		textField('description', 'select'),
		textField('company', 'text'),
		textField('website', 'text'),
		textField('location', 'text'),
		textField('skills', 'text'),
		textField('github', 'text'),
		textField('bio', 'textarea', 'Tell us a little about yourself'),
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

				<form 
					action="" 
					className={form}
					>

					<TextFields 
						fields={fields}
						values={values}
						handleChange={handleChange}
					/>

					<Button type='submit' onClick={onSubmit} color='primary' margin='normal' variant='contained' href='#'>Submit</Button>
				</form>
			</Grid>		
			<Grid item xs={1}/>	
		</Grid>	
	)
}

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = {
	createDeveloper,
	getDevelopers
}

DeveloperCreate.propTypes = {
	createDeveloper: PropTypes.func.isRequired,
	getDevelopers: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(DeveloperCreate)