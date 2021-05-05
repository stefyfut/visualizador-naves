import { MOSTRAR_NAVES } from '../actions/index';

const initialState={
    list:[],
}

export function mostrarNaves(state=initialState,action){

    switch (action.type) {
        case MOSTRAR_NAVES:
            
            return Object.assign({},state,{list:action.payload});
    
        default:
            return state;
    }
}