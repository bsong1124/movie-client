import * as movieApi from "./movie-api";

export async function getMovies() {
  try {
    const data = await movieApi.index();
    console.log("service data", data);
    return data.data.results;
  } catch (err) {
    console.log(err.message);
  }
}

// export async function getMovie(id) {
//   try {
//     const foundMovie = await movieApi.show(id);
//     if (foundMovie) {
//       return foundMovie;
//     } else {
//       console.log("no movie found for", id);
//     }
//   } catch (err) {
//     console.log(err.message);
//   }
// }
