
import { combineReducers } from "redux";

import postReducer from "./PostReducer";

const rootReducer = combineReducers({
	 posts:postReducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>

