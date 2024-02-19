import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import brewerySlice from "./slices/brewerySlice";

const rootReducer = combineReducers({
    // Add your reducers here
    brewery: brewerySlice,
});


const stores = configureStore({
    reducer: rootReducer,
});

export default stores;
