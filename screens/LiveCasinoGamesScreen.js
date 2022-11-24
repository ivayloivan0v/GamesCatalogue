import React, { useContext } from "react";
import { FlatList } from "react-native";
import { CategoryGridTile } from "../components/CategoryGridTile";
import { GameCategoriesContext } from "../services/Games/gameCategories.context";
import { Loading } from "../components/Loading";

export const LiveCasinoGamesScreen = ({ navigation }) => {
  const { liveCasino, isLoading } = useContext(GameCategoriesContext);

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
    <>
      {isLoading && <Loading />}
      <FlatList
        data={liveCasino}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={3}
      />
    </>
  );
};
