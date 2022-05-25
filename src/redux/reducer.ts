import { combineReducers } from "redux";
import getGuestBook from "./modules/getGuestBook";
import setStart from "./modules/setStart";

const reducer = combineReducers({ getGuestBook, setStart });

export default reducer;
