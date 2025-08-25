import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
    Image,
    Pressable,
    Text,
    useWindowDimensions,
    View,
} from "react-native";

import { MovieHeaderProps } from "./Types";

export const MovieHeader = ({
  title,
  poster,
  originalTitle,
}: MovieHeaderProps) => {
  const { height } = useWindowDimensions();

  return (
    <>
      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "transparent"]}
        start={{ x: 0, y: 0 }}
        style={{
          position: "absolute",
          zIndex: 1,
          height: height * 0.4,
          width: "100%",
        }}
      />
      <View className="absolute top-[40px] left-[10px] z-10">
        <Pressable
          onPress={() => router.dismiss()}
          className="active:opacity-80"
        >
          <Ionicons
            name="arrow-back"
            size={30}
            color="white"
            className="shadow"
          />
        </Pressable>
      </View>
      <View
        className="shadow-xl shadow-black/20"
        style={{ height: height * 0.7 }}
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image
            source={{ uri: poster }}
            className="flex-1"
            resizeMode="cover"
          />
        </View>
      </View>
      <View className="px-5 mt-5">
        <Text className="font-normal">{originalTitle}</Text>
        <Text className="font-semibold text-2xl">{title}</Text>
      </View>
    </>
  );
};
