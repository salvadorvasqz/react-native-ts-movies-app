import React, { useCallback } from "react";
import { Image, Pressable } from "react-native";

import { router } from "expo-router";
import { IMoviePosterProps } from "./Types";

export const MoviePoster = ({
  poster,
  id,
  smallPoster = false,
  className,
}: IMoviePosterProps) => {
  const showDetails = useCallback(() => {
    router.push(`/movie/${id}`);
  }, [id]);

  return (
    <Pressable
      onPress={showDetails}
      className={`${className} active:opacity-90 px-2`}
    >
      <Image
        source={{ uri: poster }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};
