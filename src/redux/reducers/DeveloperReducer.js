import * as types from '../actions/ActionTypes';

export default (state = [], { type, payload }) => {
	switch (type) {

	case types.GET_DEVELOPERS:
		return payload

	case types.CREATE_DEVELOPER: 
		return [
			...state,
			{...payload}
		]

	case types.UPDATE_DEVELOPER:
		return state.map( dev => dev.id == payload.id ? payload : dev )

	case types.DELETE_DEVELOPER:
		return state.filter(dev => dev.id !== payload)

	default:
		return state
	}
}