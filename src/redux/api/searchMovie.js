import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AUTH_HEADERS } from "../../assets/constants";

export const searchMovie = createAsyncThunk("searchMovie", async (value) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      headers: AUTH_HEADERS,
      params: {
        query: value,
        page: 1,
      },
    }
  );
  return response.data;
});
