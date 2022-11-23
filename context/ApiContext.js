import React, { useState, useEffect, createContext } from "react";

export const ApiContext = createContext([]);

export const ApiContextProvider = ({ children }) => {
  const API_URL = "https://api.casino.com/lobby/gamefeeds/au/native/notflix/";

  let [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resp = await fetch(API_URL);
      const apiData = await resp.json();
      setData(apiData.feed.category[0].games);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ApiContext.Provider value={{data}}>
        {children}
    </ApiContext.Provider>
  )
};
