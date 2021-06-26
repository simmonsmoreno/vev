import axios from 'axios'

import {
    GET_VIAJES,
    GET_VIAJE
} from "../constant"

// get all viajes
export const getViajes = () => dispatch => {
    axios
        .get("https://adonisjs-api-vev.herokuapp.com/viajes")
        .then(res =>
            dispatch({
                type: GET_VIAJES,
                payload: res.data
            })
        )
        .catch(err => console.log(err));
};

// get specific viaje by id
export const getViaje = id => dispatch => {
    axios
        .get(`https://adonisjs-api-vev.herokuapp.com/viajes/${id}`)
        .then(res =>
            dispatch({
                type: GET_VIAJE,
                payload: res.data
            })
        )
        .catch(err => console.log(err));
};

// .get("https://adonisjs-api-vev.herokuapp.com/viajes")
