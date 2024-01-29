import { combineReducers } from "redux";
import { SpinnerReducer } from "./utils-reducers/SpinnerReducer";

const rootReducer = combineReducers({
    spinner: SpinnerReducer,
});

export default rootReducer;