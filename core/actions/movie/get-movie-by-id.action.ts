import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  id: string | number;
}

export const getMovieByIdAction = async ({
  id,
}: Options): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`/movie/${id}`);
    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.log({ error });
    throw new Error("Cannot load movie");
  }
};
