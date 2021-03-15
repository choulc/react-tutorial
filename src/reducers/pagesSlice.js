import { createSlice } from '@reduxjs/toolkit'

const initialPage = {
    currentPage: 1,
    maxPage: 1,
    showPerPage: 9,
}

export const pagesSlice = createSlice({
    name: 'pages',
    initialState: initialPage,
    reducers: {
        previousPage: (state) => {
            if (state.currentPage > 1) {
                state.currentPage -= 1;
            }
            console.log('click previous page')
        },
        nextPage: (state) => {
            if (state.maxPage > state.currentPage) {
                state.currentPage += 1;
            }
            console.log('click next page')
        },
        updateMaxPage: (state, action) => {
            state.maxPage = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    }
});

export const { nextPage, previousPage, updateMaxPage, setCurrentPage } = pagesSlice.actions;

export default pagesSlice.reducer;