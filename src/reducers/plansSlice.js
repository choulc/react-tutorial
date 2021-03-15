import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialPlans = {
    planItems: [],
    filteredPlans: [],
    planLookupTable: {},
    status: 'idle',
    error: null,
}

export const fetchPlans = createAsyncThunk('plans/fetchPlans', async () => {
    const result = await axios.get('../lesson-plans.json');
    return result.data;
})

const plansSlice = createSlice({
    name: 'plans',
    initialState: initialPlans,
    reducers: {
        updateFilteredPlans: (state, action) => {
            state.filteredPlans = [].concat(action.payload);
        },
    },
    extraReducers: {
        [fetchPlans.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchPlans.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            // Add any fetched posts to the array
            state.planItems = state.planItems.concat(action.payload)
            state.filteredPlans = state.filteredPlans.concat(action.payload)

            const tempLookupTable = {};
            action.payload.forEach(plan => { tempLookupTable[plan.id] = plan });
            state.planLookupTable = tempLookupTable;
        },
        [fetchPlans.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
    }
});

export const { updateFilteredPlans } = plansSlice.actions;

export default plansSlice.reducer