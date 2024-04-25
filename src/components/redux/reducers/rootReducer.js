import { combineReducers } from "redux";
import { SpinnerReducer } from "./utils-reducers/SpinnerReducer";
import { ThemeModeReducer } from "./utils-reducers/ThemeModeReducer";

const rootReducer = combineReducers({
    spinner: SpinnerReducer,
    themeModeState: ThemeModeReducer
});

export default rootReducer;