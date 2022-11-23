import React, { useContext, useEffect } from "react";
import { FlatList } from "react-native";
import { CategoryGridTile } from "../components/CategoryGridTile";
import { ApiContext } from "../context/ApiContext";

export const SlotsGamesScreen = ({ navigation }) => {
  const { data } = useContext(ApiContext);

  useEffect(() => {}, [data]);

  const renderCategoryItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.name}
        thumbnail={item.img_square}
        image={item.img}
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