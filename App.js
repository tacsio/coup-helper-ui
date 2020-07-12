import React from "react";

import Routes from "./src/Routes";
import { GameProvider } from "./src/GameContext";

export default function App() {
  return (
    <GameProvider>
      <Routes />
    </GameProvider>
  );
}
