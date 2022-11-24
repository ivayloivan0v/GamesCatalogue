import React, { useState, createContext, useEffect } from "react";
import { GameCategoriesRequest } from "./gameCategories.service";

export const GameCategoriesContext = createContext();

export const GameCategoriesContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [slots, setSlots] = useState([])
  const [jackpots, setJackpots] = useState([])
  const [liveCasino, setLiveCasino] = useState([])
  const [featured, setFeatured] = useState([])

  const retrieveGameCategories = () => {
    setIsLoading(true);
    GameCategoriesRequest()
      .then((results) => {
        setIsLoading(false);
        setJackpots(results[1]["games"])
        setSlots(results[2]["games"])
        setLiveCasino(results[0]["games"])
        const games = results.map((result) => result.games[0].filter((game) => game.is_featured == true));
        const featuredGames = games[0].filter((game) => game.is_featured == true);
        setFeatured(featuredGames)

      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err)
      });
  };

  useEffect(() => {
    retrieveGameCategories();
  }, []);

  return (
    <GameCategoriesContext.Provider value={{slots, jackpots, liveCasino, featured, isLoading}}>
      {children}
    </GameCategoriesContext.Provider>
  );
};
