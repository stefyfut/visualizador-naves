import { combineReducers } from 'redux';
import { mostrarNaves } from './naves';

const rootReducer=combineReducers({
    nave:mostrarNaves
});

export default rootReducer;