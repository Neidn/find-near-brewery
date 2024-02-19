import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    brewery: [],
};

const brewerySlice = createSlice({
    name: "brewery",
    initialState: initialState,
    reducers: {
        setBreweries(state, action) {
            state.brewery = action.payload;
        },
        addBrewery(state, action) {
            state.brewery.push(action.payload);
        },
        removeBrewery(state, action) {
            state.brewery = state.brewery.filter((brewery) => brewery.id !== action.payload);
        },
        resetBreweries(state) {
            state = initialState;
        },
    },
});

export const breweryActions = brewerySlice.actions;

export default brewerySlice.reducer;
