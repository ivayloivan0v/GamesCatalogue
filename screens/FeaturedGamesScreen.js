import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import { CategoryGridTile } from "../components/CategoryGridTile";
import { GameCategoriesContext } from "../services/Games/gameCategories.context";
import { Loading } from "../components/Loading";

export const FeaturedGamesScreen = ({ navigation }) => {
  const { isLoading, featured } = useContext(GameCategoriesContext);

  const renderCategoryItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.name}
        thumbnail={item.img_square}
        image={item.img}
      />
    );
  };
  if (featured.length == 0) {
    return (
      <>
        {isLoading && <Loading />}
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>There are no featured games</Text>
        </View>
      </>
    );
  }
  return (
    <>
      {isLoading && <Loading />}
      <FlatList
        data={featured}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={3}
      />
    </>
  );
};
