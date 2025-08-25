import React from "react";
import { Text, View } from "react-native";

import { Formatter } from "@/config/helpers/formatter";
import { IMovieDescriptionProps } from "./Types";

export const MovieDescription = ({ movie }: IMovieDescriptionProps) => {
  return (
    <View className="mx-5 ">
      <View className="flex flex-row">
        <Text>{movie.rating}</Text>
        <Text> - {movie.genres.join(", ")}</Text>
      </View>
      <Text className="font-bold mt-5">Description</Text>
      <Text className="font-normal mt-2 text-justify">{movie.description}</Text>
      <Text className="font-bold mt-2 text-2xl">
        {Formatter.currency(movie.budget)}
      </Text>
    </View>
  );
};
