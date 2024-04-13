import { legacy_createStore, combineReducers } from 'redux';
import numerosReducer from './reducers/numeros';

const reducers = combineReducers({
	numeros: numerosReducer,
});

function storeConfig() {
	return legacy_createStore(reducers);
}

export default storeConfig;
