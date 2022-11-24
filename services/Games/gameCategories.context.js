import React, { useState, createContext, useEffect } from "react";
import { GameCategoriesRequest } from "./gameCategories.service";

export const GameCategoriesContext = createContext();

export const GameCategoriesContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [slots, setSlots] = useState([])
  const [jackpots, setJackpots] = useState([])
  const [liveCasino, setLiveCasino] = useState([])

  const retrieveGameCategories = () => {
    setIsLoading(true);
    GameCategoriesRequest()
      .then((results) => {
        setIsLoading(false);
        setJackpots(results[1]["games"])
        setSlots(results[2]["games"])
        setLiveCasino(results[0]["games"])
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    retrieveGameCategories();
  }, []);

  return (
    <GameCategoriesContext.Provider value={{slots, jackpots, liveCasino, isLoading}}>
      {children}
    </GameCategoriesContext.Provider>
  );
};
