//Variables
const VITE_APP_DOMAIN = import.meta.env.VITE_APP_DOMAIN;

//Movies APIS
export const Movies_list_API = `${VITE_APP_DOMAIN}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

export const TV_list_API = `${VITE_APP_DOMAIN}discover/tv?include_adult=false&include_null_first_air_dat=false&language=en-US&page=1&sort_by=popularity.desc`;

export const Genre_Movies_list_API = `${VITE_APP_DOMAIN}genre/movie/list?language=en`;

export const Genre_TV_list_API = `${VITE_APP_DOMAIN}genre/tv/list?language=en`;

export const Movie_Detail_Recommend_API = (id) =>
  `${VITE_APP_DOMAIN}movie/${id}/recommendations?language=en-US`;

export const Popular_Movies_API = `${VITE_APP_DOMAIN}movie/popular?language=en-US&page=1`;

export const Upcoming_Movies_API = `${VITE_APP_DOMAIN}movie/upcoming?language=en-US&page=1`;

export const Similar_Movies_API = (id) =>
  `${VITE_APP_DOMAIN}movie/${id}/similar?language=en-US&page=1`;

export const Search_Movie_API = (query) =>
  `${VITE_APP_DOMAIN}search/movie?query=${query}?language=en-US&include_adult=false&page=1`; // query required

export const Movie_Detail_API = (id) =>
  `${VITE_APP_DOMAIN}movie/${id}?language=en-US`;
