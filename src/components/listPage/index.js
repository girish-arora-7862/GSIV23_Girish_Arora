import React, { useEffect, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMoviesData } from "../../redux/api/fetchUpcomingMovies";
import Header from "../header";
import MovieGrid from "../movieGrid";

const ListPage = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const upcomingMoviesData = useSelector(
    (state) => state?.data?.upcomingMoviesData?.results || []
  );
  const upcomingTotalCount = useSelector(
    (state) => state?.data?.upcomingMoviesData?.total_results || 0
  );
  const searchMovieData = useSelector(
    (state) => state?.data?.searchMovieData?.results || []
  );
  const isLoading = useSelector((state) => state?.data?.loading || false);

  useEffect(() => {
    dispatch(fetchUpcomingMoviesData());
  }, []);

  return (
    <div className="list-page">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      {isLoading ? (
        <div className="list-page-loader">Loading...</div>
      ) : (
        <MovieGrid
          isSearch={searchValue}
          list={searchValue ? searchMovieData : upcomingMoviesData}
          upcomingTotalCount={upcomingTotalCount}
        />
      )}
    </div>
  );
};

export default ListPage;
