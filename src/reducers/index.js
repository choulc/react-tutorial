import { configureStore } from '@reduxjs/toolkit';
import pagesReducer from './pagesSlice';
import plansReducer from './plansSlice';
import searchReducer from './searchSlice';


export default configureStore({
    reducer: {
        pages: pagesReducer,
        plans: plansReducer,
        search: searchReducer,
    }
})