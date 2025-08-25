import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedAction = async ({
  page = 1,
  limit = 10,
}: Options = {}) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>(
      "/movie/top_rated",
      {
        params: {
          page,
          total_results: limit,
        },
      }
    );
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    return movies;
  } catch (error) {
    console.log({ error });
    throw new Error("Cannot load top rated movies");
  }
};
