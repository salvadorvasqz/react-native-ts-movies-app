import React from "react";
import { useWindowDimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { MoviePoster } from "../MoviePoster";
import { IMainSlideshowProps } from "./Types";

export const MainSlideshow = ({ movies }: IMainSlideshowProps) => {
  const width = useWindowDimensions().width;
  return (
    <View className="h-[250px] w-full">
      <Carousel
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster poster={item.poster} id={item.id} />
        )}
        width={200}
        height={350}
        style={{
          width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  );
};
