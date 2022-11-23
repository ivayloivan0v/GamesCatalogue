import React, { useContext, useEffect } from "react";
import { FlatList } from "react-native";
import { CategoryGridTile } from "../components/CategoryGridTile";
import { ApiContext } from "../context/ApiContext";

export const SlotsGamesScreen = ({ navigation }) => {
  const { data } = useContext(ApiContext);

  useEffect(() => {}, [data]);

  const renderCategoryItem = ({ item }) => {
    const pressedHandler = () => {
      navigation.navigate("SlotsGames", {
        categoryId: item.id,
      });
    };
    return (
      <CategoryGridTile
        title={item.name}
        thumbnail={item.img_square}
        onPress={pressedHandler}
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={3}
    />
  );
};