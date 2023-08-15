import React, { useEffect } from "react";
import "./App.css";
import ListPage from "./components/listPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetail from "./components/movieDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <ListPage />,
  },
  {
    path: "movie/:movieId",
    element: <MovieDetail />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
