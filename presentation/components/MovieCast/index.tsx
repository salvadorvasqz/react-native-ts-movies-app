import React from "react";
import { FlatList, Text, View } from "react-native";

import { ActorCard } from "../ActorCard";
import { IMovieCastProps } from "./Types";

export const MovieCast = ({ cast }: IMovieCastProps) => {
  return (
    <View className="mt-5 mb-10">
      <Text className="font-bold text-2xl px-5">Actors</Text>
      <FlatList
        data={cast}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};
