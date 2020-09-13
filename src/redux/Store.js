import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './reducers/RootReducer';
import ReduxThunk from 'redux-thunk';

const Store = createStore(RootReducer, 
	composeWithDevTools(applyMiddleware(ReduxThunk))
)

export default Store