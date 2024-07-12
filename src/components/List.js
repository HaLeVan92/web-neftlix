import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

function List({ dataMovie, title }) {
  const [movies, setMovies] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiService.get(
        `/movie/${dataMovie}?api_key=${API_KEY}`
      );

      setMovies(data.data.results);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="list">
      <h2 className="text-genres">{title}</h2>
      <div className="row">
        <Carousel responsive={responsive} className="listMovies">
          {movies?.length > 0 &&
            movies?.map((movie) => (
              <div
                className="movie"
                onClick={() => navigate(`/detail/${movie.id}`)}
              >
                <img
                  className="image"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt="Movie 1"
                />
                <h3 className="moviesName">{`${movie.title}`}</h3>
              </div>
            ))}
        </Carousel>
        ;
      </div>
    </div>
  );
}

export default List;
