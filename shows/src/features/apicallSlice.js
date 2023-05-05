import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios"

//getalldata

export const getAllShows = createAsyncThunk("getallshows", async () => {
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=all`)
    console.log("it is a", response.data);
    return response.data
})
// &i=${id}

// get selected show
export const getSelectShowData = createAsyncThunk('selectShow', async (id) => {
    const response = await axios.get(` https://api.tvmaze.com/lookup/shows?imdb=${id}`)

    return response.data;
})
export const shows = createSlice({
    name: "allshows",
    initialState: {
        loading: false,
        initialshows: [],
        selectshows: []
    },
    reducers: {},
    extraReducers: {
        [getAllShows.pending]: (initialState) => {
            initialState.loading = true
        },
        [getAllShows.fulfilled]: (initialState, action) => {
            initialState.initialshows = action.payload;
            initialState.loading = false
        },
        [getSelectShowData.fulfilled]: (initialState, action) => {
            initialState.selectshows = action.payload;
            initialState.loading = false
        }
    }
})

export default shows.reducer;