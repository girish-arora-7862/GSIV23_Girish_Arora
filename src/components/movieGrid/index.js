import React from "react";
import "./index.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import { fetchUpcomingMoviesData } from "../../redux/api/fetchUpcomingMovies";
import { useNavigate } from "react-router-dom";

const MovieGrid = ({ list = [], isSearch = false, upcomingTotalCount = 0 }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchMoreData = () => {
    if (!isSearch && list.length < upcomingTotalCount) {
      dispatch(fetchUpcomingMoviesData(list.length / 20 + 1));
    }
  };

  const handleRedirect = (id) => {
    navigate(`movie/${id}`);
  };

  const renderList = () => {
    return list.map((data, index) => {
      return (
        <div
          className="mg-grid-tile"
          key={index}
          onClick={() => handleRedirect(data.id)}
        >
          <div className="mg-card">
            <div>
              <div className="mg-image-wrapper">
                <img
                  className="mg-image"
                  src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                  alt={data.original_title}
                />
              </div>
              <div className="mg-card-content">
                <div className="mg-title-wrapper">
                  <div className="mg-title">{data.original_title}</div>
                  <div className="mg-rating">({data.popularity})</div>
                </div>
                <div className="mg-description">{data.overview}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {isSearch ? (
        <div className="movie-grid-wrapper">{renderList()}</div>
      ) : (
        <InfiniteScroll
          dataLength={list.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        >
          <div className="movie-grid-wrapper">{renderList()}</div>
        </InfiniteScroll>
      )}
    </>
  );
};

export default MovieGrid;
