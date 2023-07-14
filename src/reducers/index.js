import { combineReducers } from "redux";
import contacts from "./contact";
import user from "./user";

/**
 * Combine multiple reducers into a single reducer function
 */
export default combineReducers({ 
    contacts, 
    user 
});
