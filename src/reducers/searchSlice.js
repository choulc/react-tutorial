import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initalSearch = {
    eduStatus: 'idle',
    eduError: null,
    subjectsStatus: 'idle',
    subjectsError: null,
    countiesStatus: 'idle',
    countyError: null,
    eduLevel: [],
    subjects: {},
    counties: [],
    selectedEduLevel: '',
    selectedSubjects: [],
    selectedSubject: '',
    selectedCounty: '',
    selectedKeyword: '',
    searchResult: { selectedEduLevel: '', selectedSubject: '', selectedCounty: '', selectedKeyword: '' },
}

export const fetchEdu = createAsyncThunk('search/fetchEdu', async () => {
    const result = await axios.get('../education-levels.json');
    return result.data;
})

export const fetchSubjects = createAsyncThunk('search/fetchSubjects', async () => {
    const result = await axios.get('../subjects.json');
    return result.data;
})

export const fetchCounties = createAsyncThunk('search/fetchCounties', async () => {
    const result = await axios.get('../counties.json');
    return result.data;
})

const searchSlice = createSlice({
    name: 'search',
    initialState: initalSearch,
    reducers: {
        updateSelectedEduLevel: (state, action) => {
            state.selectedEduLevel = action.payload
        },
        updateSelectedSubjects: (state, action) => {
            state.selectedSubjects = action.payload;
        },
        updateSelectedSubject: (state, action) => {
            state.selectedSubject = action.payload;
        },
        updateSelectedCounty: (state, action) => {
            state.selectedCounty = action.payload;
        },
        updateSelectedKeyword: (state, action) => {
            state.selectedKeyword = action.payload;
        },
        updateSearchResult: (state, action) => {
            state.searchResult = action.payload;
        }
    },
    extraReducers: {
        [fetchEdu.pending]: state => {
            state.eduStatus = 'loading'
        },
        [fetchEdu.fulfilled]: (state, action) => {
            state.eduStatus = 'succeeded';
            state.eduLevel = action.payload
        },
        [fetchEdu.rejected]: (state, action) => {
            state.eduStatus = 'failed';
            state.error = action.error.message
        },
        [fetchSubjects.pending]: state => {
            state.subjectsStatus = 'loading'
        },
        [fetchSubjects.fulfilled]: (state, action) => {
            state.subjectsStatus = 'succeeded';
            state.subjects = action.payload;
        },
        [fetchSubjects.rejected]: (state, action) => {
            state.subjectsStatus = 'failed';
            state.subjectsError = action.error.message;
        },
        [fetchCounties.pending]: state => {
            state.countiesStatus = 'loading';
        },
        [fetchCounties.fulfilled]: (state, action) => {
            state.countiesStatus = 'succeeded';
            state.counties = action.payload;
        },
        [fetchCounties.rejected]: (state, action) => {
            state.countiesStatus = 'failed';
            state.countyError = action.error.message;
        }
    }
})

export const {
    updateSelectedEduLevel,
    updateSelectedSubjects,
    updateSelectedSubject,
    updateSelectedCounty,
    updateSelectedKeyword,
    updateSearchResult,
} = searchSlice.actions;

export default searchSlice.reducer;
