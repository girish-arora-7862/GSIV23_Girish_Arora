import { createSlice } from "@reduxjs/toolkit";
import { fetchUpcomingMoviesData } from "../api/fetchUpcomingMovies";
import { searchMovie } from "../api/searchMovie";
import { fetchMovieById } from "../api/fetchMovieById";

const initialState = {
  value: 0,
  loading: false,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    clearSearchMovie: (state) => {
      state.searchMovieData = { results: [] };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpcomingMoviesData.pending, (state) => {
        if (!(state?.upcomingMoviesData?.results?.length > 0)) {
          state.loading = true;
        }
      })
      .addCase(fetchUpcomingMoviesData.fulfilled, (state, action) => {
        state.loading = false;
        if (state?.upcomingMoviesData?.results?.length > 0) {
          state.upcomingMoviesData.results = [
            ...state.upcomingMoviesData.results,
            ...action.payload.results,
          ];
        } else {
          state.upcomingMoviesData = action.payload;
        }
      })
      .addCase(searchMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.searchMovieData = action.payload;
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.movieDetail = action.payload;
      });
  },
});

export const { clearSearchMovie } = dataSlice.actions;

export default dataSlice.reducer;
