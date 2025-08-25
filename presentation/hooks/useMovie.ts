import { useQuery } from "@tanstack/react-query";

import { getMovieCastByIdAction } from "@/core/actions/movie/get-cast-by-id.action";
import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";

export const useMovie = (id: number | string) => {
  const movieQuery = useQuery<CompleteMovie>({
    queryKey: ["movies", "movieById", id],
    queryFn: () => getMovieByIdAction({ id }),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const castQuery = useQuery<Cast[]>({
    queryKey: ["movies", "movieCast", id],
    queryFn: () => getMovieCastByIdAction({ id }),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
  return { movieQuery, castQuery };
};
