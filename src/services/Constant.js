const request = {
  featured: "https://fakestoreapi.com/users",
  top9: "https://fakestoreapi.com/users",
  moviecategory: "https://fakestoreapi.com/products?limit=5",
  top5: "https://fakestoreapi.com/products?limit=5",
  newTest: "https://fakestoreapi.com/users",
};

export default request;

//Variables
const api_key = "dfb344f3f9585097be2a2eb4f165cc02";
const VITE_APP_DOMAIN = import.meta.env.VITE_APP_DOMAIN;
const api_l = `?api_key=${api_key}&language=en-US`;

//Movies APIS
export const Movies_Gernes_API = `${VITE_APP_DOMAIN}genre/movie/list${api_l}`;

export const Movie_Detail_API = (movie_id) => `${VITE_APP_DOMAIN}movie/${movie_id}${api_l}`;

export const Movie_Image_API = (movie_id) => `${VITE_APP_DOMAIN}movie/${movie_id}/images${api_l}`;

export const Movie_Lists_API = (movie_id) => `${VITE_APP_DOMAIN}movie/${movie_id}/lists${api_l}`;

export const Movie_Release_Date_API = (movie_id) =>
  `${VITE_APP_DOMAIN}movie/${movie_id}/release_dates${api_l}`;

export const Similar_Movie_API = (movie_id) =>
  `${VITE_APP_DOMAIN}/movie/${movie_id}/similar${api_l}`;

export const Get_Videos_API = (movie_id) => `${VITE_APP_DOMAIN}movie/${movie_id}/videos${api_l}`;

export const Latest_Movies_API = `${VITE_APP_DOMAIN}movie/latest${api_l}`;

export const Popular_Movies_API = `${VITE_APP_DOMAIN}movie/popular${api_l}`;

export const Upcoming_Movies_API = `${VITE_APP_DOMAIN}movie/upcoming${api_l}`;

//TV APIS
export const TV_Genres_API = `${VITE_APP_DOMAIN}genre/tv/list${api_l}`;

export const TV_Detail_API = (tv_id) => `${VITE_APP_DOMAIN}tv/${tv_id}${api_l}`;

export const TV_Images_API = (tv_id) => `${VITE_APP_DOMAIN}tv/${tv_id}/images${api_l}`;

export const Similar_TV_Show_API = (tv_id) => `${VITE_APP_DOMAIN}tv/{tv_id}/similar${api_l}`;

export const TV_Videos_API = (tv_id) => `${VITE_APP_DOMAIN}tv/${tv_id}/videos${api_l}`;

export const Latest_TV_API = `${VITE_APP_DOMAIN}tv/latest${api_l}`;

export const Popular_TV_API = `${VITE_APP_DOMAIN}tv/popular${api_l}`;

export const Top_Rated_TV_API = `${VITE_APP_DOMAIN}tv/top_rated${api_l}`;
