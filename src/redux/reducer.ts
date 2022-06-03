import { combineReducers } from "redux";
import getGuestBook from "./modules/getGuestBook";
import setAnimation from "./modules/setAnimation";

const reducer = combineReducers({ getGuestBook, setAnimation });

export default reducer;
