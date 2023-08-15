import React, { useEffect } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieById } from "../../redux/api/fetchMovieById";
import { useParams } from "react-router-dom";
import Header from "../header";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const data = useSelector((state) => state?.data?.movieDetail);
  const isLoading = useSelector((state) => state?.data?.loading || false);

  useEffect(() => {
    dispatch(fetchMovieById(movieId));
  }, []);

  console.log({ data });
  return (
    <div className="movie-detail">
      <Header title={"Movie Details"} />
      {isLoading || !data ? (
        <div className="list-page-loader">Loading...</div>
      ) : (
        <div className="md-wrapper">
          <div className="md-image-wrapper">
            <img
              className="md-img"
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt={data.title}
            />
          </div>
          <div className="md-right-pane">
            <div className="md-title-wrapper">
              <div className="md-title">{data.title}</div>
              <div className="md-rating">({data.popularity})</div>
            </div>
            <div className="md-sub-wrapper">
              {data.release_date.slice(0, 4)} | {data.runtime} mins |{" "}
              {data.production_companies[0].name}
            </div>
            <div className="md-description">Description : {data.overview}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
