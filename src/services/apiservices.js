import axios from "axios";

export const fetchData = async (api) => {
  const response = await fetch(api);
  if (!response.ok) {
    throw new Error("Data coud not be fetched!");
  } else {
    return response.json();
  }
};

export const fetchWithAxios = (url) => {
  return axios.get(url, {
    headers: {
      accept: "applictaion/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmIzNDRmM2Y5NTg1MDk3YmUyYTJlYjRmMTY1Y2MwMiIsInN1YiI6IjY0MzdmZWNmMzdiM2E5MDBkNGZkYjhkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Ywz0IpsJsXdJ5eX22GYP5dlxJMNAbR3fUlCTcQKHgY",
    },
  });
};
