import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    headlines: [],
    status:"idle"
    
}

const headlinesSlice = createSlice({
    name: "headlines", initialState, reducers: {
        loadingHeadlinesSuccess(state,action) {
            state.headlines = action.payload
            state.status="ready"
        },
        dataHeadlinesFailure(state, action) {
            state.status="error"
            
        },
        dataHeadlinesLoading(state, action) {
            state.status="loading"
            
        }
    }
})

export const { loadingHeadlinesSuccess, dataHeadlinesFailure, dataHeadlinesLoading } =
  headlinesSlice.actions;
export default headlinesSlice.reducer