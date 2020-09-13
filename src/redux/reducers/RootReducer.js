import { combineReducers } from 'redux';
import developers from './DeveloperReducer';

const rootReducer = combineReducers({
	developers
})

export default rootReducer