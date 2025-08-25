import React, { useCallback, useEffect, useRef } from "react";
import {
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    Text,
    View,
} from "react-native";

import { MoviePoster } from "../MoviePoster";
import { IMovieHorizontalListProps } from "./Types";

export const MovieHorizontalList = ({
  movies,
  title,
  className,
  loadNextPage,
}: IMovieHorizontalListProps) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (isLoading.current) return;
      const {
        nativeEvent: { contentOffset, layoutMeasurement, contentSize },
      } = event;

      const isEndReached =
        contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

      if (!isEndReached) return;

      isLoading.current = true;

      loadNextPage && loadNextPage();
    },
    [isLoading, loadNextPage]
  );

  return (
    <View className={`${className}`}>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster poster={item.poster} id={item.id} smallPoster />
        )}
        keyExtractor={(item, index) =>  `${title}-${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};
