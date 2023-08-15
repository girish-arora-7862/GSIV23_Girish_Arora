import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AUTH_HEADERS } from "../../assets/constants";

export const fetchMovieById = createAsyncThunk("fetchMovieById", async (id) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: AUTH_HEADERS,
  });
  return response.data;
});
