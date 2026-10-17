const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer YOUR_TMDB_ACCESS_TOKEN",
  },
};

let topRatedContainer = document.querySelector(".topRatedContainer");

async function fetchMoives() {
  let res = await fetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    options,
  )}
