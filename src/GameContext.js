import React, { createContext } from "react";

const GameContext = createContext({
  gameAuth: {}, //game data
  signGame: () => {}, //signIn
  signOutGame: () => {}, //signOut
});

export const GameProvider = ({ children }) => {
  const storedData = localStorage.getItem("game");
  const gameAuth = storedData ? JSON.parse(storedData) : null;

  const signGame = (gameInfo) => {
    const json = JSON.stringify(gameInfo);
    localStorage.setItem("game", json);
  };

  const signOutGame = () => {
    localStorage.clear();
  };

  const contextData = {
    gameAuth,
    signGame,
    signOutGame,
  };

  return (
    <GameContext.Provider value={contextData}>{children}</GameContext.Provider>
  );
};

export default GameContext;
