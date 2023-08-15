import React from "react";
import "./index.css";
import HomeIcon from "../../assets/icons/home.svg";
import SearchIcon from "../../assets/icons/search.svg";
import { searchMovie } from "../../redux/api/searchMovie";
import { useDispatch } from "react-redux";
import { clearSearchMovie } from "../../redux/slices/dataSlice";
import { useNavigate } from "react-router-dom";

const Header = ({
  searchValue = "",
  setSearchValue = () => {},
  title = "",
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    dispatch(searchMovie(e.target.value));
  };

  const handleHome = () => {
    if (title) {
      navigate("/");
    } else {
      setSearchValue("");
    }
    dispatch(clearSearchMovie());
  };

  return (
    <div className="header-wrapper">
      <div className="header-input-wrapper">
        {title ? (
          <div>{title}</div>
        ) : (
          <>
            <input
              className="header-search"
              onChange={handleSearch}
              value={searchValue}
            />
            <img className="header-search-icon" src={SearchIcon} alt="search" />
          </>
        )}
      </div>
      <div className="header-home-wrapper">
        <img
          className="header-home"
          src={HomeIcon}
          alt="home"
          onClick={handleHome}
        />
      </div>
    </div>
  );
};

export default Header;
