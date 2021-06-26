import { combineReducers } from "redux";

import viajesReducer from "./viajes";

export default combineReducers({
    viajes: viajesReducer
});
