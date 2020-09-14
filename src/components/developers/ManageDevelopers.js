import React, {useState, useEffect} from 'react';
import DeveloperCreate from './DeveloperCreate';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { processCreateDeveloper as createDeveloper } from '../../redux';
import { processGetDevelopers as getDevelopers } from '../../redux';
import { processUpdateDeveloper as updateDeveloper } from '../../redux';

const initial = [{
	developer: '',
	description: '',
	company: '',
	website: '',
	location: '',
	skills: '',
	github: '',
	bio: '',
}]

const ManageDevelopers = (props) => {
		
	const { 
		createDeveloper,
		history,
		getDevelopers,
		developers,
		developer,
		updateDeveloper 
	} = props;

	const [dev, setDev] = useState({...developer});

	useEffect( () => {
		if (developers.length < 1) {
			getDevelopers();
		} else {
			setDev({...developer})
		}
	}, [developer] )

	const handleChange = e => {
		const { value, name } = e.target;

		setDev( prevDev => ({
			...prevDev,
			[name]: name === 'skills' ? value.split(',') : value
		}))
	}

	const onSubmit = e => {
		e.preventDefault();

		if (dev.id == undefined) {
			dev.id = developers.length + 1
			createDeveloper(dev);
		} else {
			updateDeveloper(dev);
		}
		
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
		<React.Fragment>
			{	
				dev !== undefined &&
					<DeveloperCreate
						fields={fields}
						values={dev}
						handleChange={handleChange}
						onSubmit={onSubmit}
					/>
			}
		</React.Fragment>
	)
} 

const mapStateToProps = (state, ownProps) => {
	const slug = ownProps.match.params.slug;
	const filtered = state.developers.find( dev => dev.id === parseInt(slug));

	const developer = slug !== undefined && state.developers.length > 0
						? filtered !== undefined
							? filtered
							: initial
						: initial

						// console.log(slug !== undefined && state.developers.length > 0)
						// console.log(filtered)

	return {
		developers: state.developers,
		developer
	}
}

const mapDispatchToProps = {
	createDeveloper,
	getDevelopers,
	updateDeveloper
}

ManageDevelopers.propTypes = {
	createDeveloper: PropTypes.func.isRequired,
	getDevelopers: PropTypes.func.isRequired,
	updateDeveloper: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageDevelopers)