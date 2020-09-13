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

	default:
		return state
	}
}