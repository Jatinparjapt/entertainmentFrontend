import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    tvDetails: null,
    oneTvDetails : null,
    loading : false
}
// get full details for single tvSeries
export const getTvDetails = createAsyncThunk("details", async (movieId)=>{
    try {
            const options = {
              method: "GET",
              url: `https://api.themoviedb.org/3/tv/${movieId}`,
              params: { language: "en-US" },
              headers: {
                accept: "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmI3YmM0NjhlZDg0YmE2NGVjMTNlMzViZmUxMjI1ZiIsInN1YiI6IjY1ZDhjNmZjMTQ5NTY1MDE3YmY2N2Q5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wbUnxNfU9lOdqtQzy0lNL-8MR28pUG5TgVvHzefb60A",
              },
            };
          const moviedata = await axios(options)
          console.log(moviedata , "reducer")
         return moviedata.data
          // console.log(moviesData.data.results)
          } catch (error) {
            console.log(error);
          }
  })


  const tvDataSlice = createSlice({
    name : "tvSeriesDetails",
    initialState,
    reducers : {
      // set tvSeries data in initialState
        setTvData : (state ,action )=>{
          
            // console.log(action.payload , "from tvseries")
          state.tvDetails = action.payload
        }
        },
        // handle async function
        extraReducers: (builder)=>{
          builder.addCase(getTvDetails.fulfilled , (state, action )=>{
            state.oneTvDetails = action.payload
            state.loading = false
          }).addCase(getTvDetails.pending , (state )=>{
            state.loading = true
          }).addCase(getTvDetails.rejected , (state )=>{
            state.loading = false
          })
        }
})
export const {setTvData } = tvDataSlice.actions;
export default tvDataSlice.reducer