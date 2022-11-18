import plannedFlightReducer from "./plannedFlightReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    plannedFlightReducer: plannedFlightReducer
})

export default rootReducer