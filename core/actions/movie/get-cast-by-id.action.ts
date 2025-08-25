import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { MovieDBCreditsResponse } from "@/infrastructure/interfaces/moviedb-credits-response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

interface Options {
  id: string | number;
}

export const getMovieCastByIdAction = async ({
  id,
}: Options): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<MovieDBCreditsResponse>(
      `/movie/${id}/credits`
    );
    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log({ error });
    throw new Error("Cannot load cast");
  }
};
