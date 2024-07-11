import React, { useEffect, useState } from "react";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";
import { useNavigate, useParams } from "react-router-dom";

function SearchPage() {
  const navigate = useNavigate();

  let { text } = useParams();
  // eslint-disable-next-line
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiService.get(
        `/search/movie?query=${text}&api_key=${API_KEY}`
      );

      setMovie(data.data.results);
    };
    fetchData();
    // eslint-disable-next-line
  }, [text]);

  return (
    <div className="detailMovie">
      <h2 className="text-search">Search Infomation</h2>
      <div className="column">
        {movie?.length > 0 &&
          movie?.map((movie) => (
            <div
              className="movie"
              onClick={() => navigate(`/detail/${movie.id}`)}
            >
              {movie.poster_path ? (
                <img
                  className="image"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt="Movie 1"
                />
              ) : (
                <img
                  className="image"
                  src={`https://i.ibb.co/BtBHsYf/Screenshot-2024-07-11-at-13-18-52.png`}
                  alt="Movie 1"
                />
              )}
              <h3 className="moviesName">{`${movie.title}`}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchPage;
