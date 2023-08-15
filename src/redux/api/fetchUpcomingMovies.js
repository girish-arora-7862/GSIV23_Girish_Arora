import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AUTH_HEADERS } from "../../assets/constants";

export const fetchUpcomingMoviesData = createAsyncThunk(
  "upcomingMoviesData",
  async (page = 1) => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming",
      {
        headers: AUTH_HEADERS,
        params: {
          page,
        },
      }
    );
    return response.data;
  }
);
