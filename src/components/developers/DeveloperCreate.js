import React from 'react'
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

const DeveloperCreate = ({ fields, values, handleChange, onSubmit }) => {
	const {root, form} = useStyles();

	const title = 'Create new developer';
	const subtitle = 'Make your profile stand out';

	return (
		<Grid container>
			<Grid item xs={1}/>
			<Grid container item xs={10} className={root}>

				<PageHeader
					title={title}
					subtitle={subtitle}
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

export default DeveloperCreate