import { useQuery } from "@tanstack/react-query";

import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedAction } from "@/core/actions/movies/top-rated.actions";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { Movie } from "@/infrastructure/interfaces/movie.interface";

export const useMovies = () => {
  const nowPlayingQuery = useQuery<Movie[]>({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const popularQuery = useQuery<Movie[]>({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const topRatedQuery = useQuery<Movie[]>({
    queryKey: ["movies", "topRated"],
    queryFn: topRatedAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const upcomingQuery = useQuery<Movie[]>({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  return { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery };
};
