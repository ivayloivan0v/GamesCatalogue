export const GameCategoriesRequest = async () => {
  try {
    const response = await fetch(
      "https://api.casino.com/lobby/gamefeeds/au/native/notflix/"
    );
    const result = await response.json();
    const category = result.feed.category
    return category
  } catch (error) {
    console.log(error)
  }
};