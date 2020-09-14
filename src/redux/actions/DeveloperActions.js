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
	return dispatch => {
		return  dispatch(createDeveloper(data)) 
	}
}

export const processUpdateDeveloper = (data) => {
	return dispatch => {
		return dispatch(updateDeveloper(data)) 
	}
}
