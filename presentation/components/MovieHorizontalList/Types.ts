import { Movie } from "@/infrastructure/interfaces/movie.interface";

export interface IMovieHorizontalListProps {
  movies: Movie[];
  title?: string;
  className?: string;
  loadNextPage?(): void;
}
