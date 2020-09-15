import * as types from './ActionTypes';
import MockData  from '../../MockData';

export const getDevelopers = (payload = null) => ({
	type: types.GET_DEVELOPERS,
	payload
})

export const createDeveloper = (payload = null) => ({
	type: types.CREATE_DEVELOPER,
	payload
})

export const updateDeveloper = (payload = null) => ({
	type: types.UPDATE_DEVELOPER,
	payload
})

export const deleteDeveloper = (payload = null) => ({
	type: types.DELETE_DEVELOPER,
	payload
})

export const processGetDevelopers = () => {
	return dispatch => {
		return MockData() 
			.then( response => {
				dispatch( getDevelopers(response) );
			})
			.catch( error => {
				throw error
			} )
	}
}

export const processCreateDeveloper = (data) => {
	return dispatch => dispatch(createDeveloper(data)); 
}

export const processUpdateDeveloper = (data) => {
	return dispatch => dispatch(updateDeveloper(data)); 
}

export const processDeleteDeveloper = (data) => {
	return dispatch => dispatch(deleteDeveloper(data));
}