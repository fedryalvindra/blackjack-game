import { configureStore } from "@reduxjs/toolkit";

import gameReducer from "./features/game/redux/gameSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export default store;
