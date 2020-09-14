import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
	field: {
		margin: '.5rem 0'
	}
}))

const TextFields = ({ fields = [], values, handleChange }) => {
	const {field} = useStyles();	

	const textToPascal = text => {
		return text.[0].toUpperCase() + text.slice(1)
	}

	return (
		<React.Fragment>
			{
				fields.length > 0 && fields.map(({name, fieldType, placeholder}, index) => {
				// text, select, date, checkbox, textArea
				const extraProps = {};
				const inputProps = {};

				if (fieldType === 'select') extraProps.select = true;
				if (fieldType === 'checkbox') inputProps.checkbox = 'checkbox';
				if (fieldType === 'date') {
					Object.assign(inputProps, {date: "date"}, {shrink: true});
				}

				if (fieldType === 'textarea') {
					Object.assign(extraProps, {multiline: true}, {rows: 4});
				}

				return	fieldType === 'checkbox' ? (
					<FormControlLabel
			            control={
			            	<Checkbox
						        checked={values.name}
						        color="primary"
					   		/>
			            }
			            label={placeholder}
			          />
						
						) : (
							<TextField 
								type={fieldType}
								variant='outlined' 
								key={index}
								name={name}
								value={values[name] || ''}
								onChange={handleChange}
								label={`${textToPascal(placeholder?placeholder:name)}`}
								className={field}
								margin='normal'
								required
								InputLabelProps={inputProps}
								{...extraProps}
							>
								{
									fieldType == 'select'  
										?	['Developer', 'Junior Developer', 'Senior Developer', 'Manager'].map((position, index) => (
												<MenuItem key={index} value={position}>
													{position}
												</MenuItem>
											))
										: ''
								}
							</TextField>
						)
								
				})
			}
		</React.Fragment>		
	)
}

TextFields.propTypes = {
	fields: PropTypes.array.isRequired,
	values: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
}

export default TextFields