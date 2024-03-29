import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import movieDataSlice from "./allMovieReducer"
import tvDataSlice from "./tvSeriesReducer"
import loginUserSlice from "./loginReducer"
import bookmarkSlice from "./bookMarks"
// root redcuer 
const rootReducer = combineReducers({
    addMoviesDetails : movieDataSlice,
    addTvSeriesDetails : tvDataSlice,
    userLoginDetails : loginUserSlice,
    bookmarkDetails : bookmarkSlice
  })
 export const store = configureStore({
    reducer : rootReducer
  })

