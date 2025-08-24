import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const upcomingMoviesAction = async () => {
  try {
    const { data } =
      await movieApi.get<MovieDBMoviesResponse>("/movie/upcoming");
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    return movies;
  } catch (error) {
    console.log({ error });
    throw new Error("Cannot load upcoming movies");
  }
};
