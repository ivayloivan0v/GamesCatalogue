import { Navigation } from "./infrastructure/navigation";
import { GameCategoriesContextProvider } from "./services/Games/gameCategories.context";

export default function App() {
  return (
    <GameCategoriesContextProvider>
      <Navigation />
    </GameCategoriesContextProvider>
  );
}
