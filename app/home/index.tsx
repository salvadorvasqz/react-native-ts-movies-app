import { MainSlideshow, MovieHorizontalList } from "@/presentation/components";
import { useMovies } from "@/presentation/hooks";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();
  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading)
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size={40} />
      </View>
    );

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movies</Text>
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />
        <MovieHorizontalList
          movies={popularQuery.data ?? []}
          title="Popular"
          className="mb-5"
        />
        <MovieHorizontalList
          movies={topRatedQuery.data ?? []}
          title="Top Rated"
          className="mb-5"
        />
        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          title="Upcoming"
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
