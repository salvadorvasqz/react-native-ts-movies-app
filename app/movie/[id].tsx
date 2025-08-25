import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";

import {
    MovieCast,
    MovieDescription,
    MovieHeader,
} from "@/presentation/components";
import { useMovie } from "@/presentation/hooks";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, castQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data)
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size={40} />
      </View>
    );

  return (
    <ScrollView>
      <View className="flex-col flex-1 w-full h-full pb-10">
        <MovieHeader
          title={movieQuery.data.title}
          originalTitle={movieQuery.data.originalTitle}
          poster={movieQuery.data.poster}
        />
        <MovieDescription movie={movieQuery.data} />
        <MovieCast cast={castQuery.data ?? []} />
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
