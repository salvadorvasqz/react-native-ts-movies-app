import React from "react";
import { Image, Pressable } from "react-native";

import { IMoviePosterProps } from "./Types";

export const MoviePoster = ({
  poster,
  id,
  smallPoster = false,className
}: IMoviePosterProps) => {
  return (
    <Pressable className={`${className} active:opacity-90 px-2`}>
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
