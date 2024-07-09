import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search';
// import {useSearchParams} from "react-router-dom";
import apiService from '../app/apiService';
import { API_KEY } from '../app/config';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function SearchMovies() {
  // let [searchParams, setSearchParams] = useSearchParams();

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   setSearchParams(event.target);
    
  // }


  const [movieSearch, setMovieSearch] = useState();

  // const handleSearch = async (seachValue) => {
  //     try {
  //         const url = `https://api.themoviedb.org/3/search/movie?query=${seachValue}&include_adult=false&language=en-US&page=1`; 
  //         const options = {
  //             method: 'GET',
  //             headers: {
  //                 accept: 'application/json',
  //                 Authorization: `Bearer &{import.meta.env.REACT_APP_API_KEY}`,
                  
  //             },              
  //         }
  //         const searchMovie = await fetch (url, options);
  //         const data = await searchMovie.json();
  //         console.log(data); 
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

      useEffect(() => {
        const fetchData = async () => {
            const data = await apiService.get(`/search/movie?api_key=${API_KEY}`);
            console.log(data);
            setMovieSearch(data.data.results);
        }
        fetchData();
    // eslint-disable-next-line    
    }, [])



  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'white', borderRadius: 2 }}>
   
 
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

    </Box>
  );
}