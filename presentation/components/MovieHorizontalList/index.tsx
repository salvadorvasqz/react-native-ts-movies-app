import React from "react";
import { FlatList, Text, View } from "react-native";

import { MoviePoster } from "../MoviePoster";
import { IMovieHorizontalListProps } from "./Types";

export const MovieHorizontalList = ({
  movies,
  title,
  className,
}: IMovieHorizontalListProps) => {
  return (
    <View className={`${className}`}>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster poster={item.poster} id={item.id} smallPoster />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
