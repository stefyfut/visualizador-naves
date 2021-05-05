import axios from 'axios'

export const MOSTRAR_NAVES='MOSTRAR_NAVES'

export function mostrarNaves(){
    return (dispatch, getState) => {
        axios.get('https://swapi.dev/api/starships/')
            .then((response) => {
                dispatch( { type: MOSTRAR_NAVES, payload: response.data } ) 
            }) 
    }
}