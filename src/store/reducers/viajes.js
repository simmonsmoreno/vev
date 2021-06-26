import {
    GET_VIAJES,
    GET_VIAJE
} from "../constant"

const initialState = {
    viajes: [],
    viaje: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_VIAJES:
            return {
                ...state,
                viajes: action.payload,
            };

        case GET_VIAJE:
            return {
                ...state,
                viaje: action.payload
            };

        default:
            return state;
    }
}
