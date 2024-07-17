import { createSlice } from "@reduxjs/toolkit";
import { drawCard } from "./drawCard";
import { getCard } from "./getCard";

const initialState = {
  player1: null,
  player2: null,
  bet: 0,
  money: 1000,
  error: "",
  isLoading: false,
  isDeal: false,
  is2x: false,
  isPopup: false,
  isAuthenticated: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    authentication(state) {
      state.isAuthenticated = true;
    },
    addBet(state, action) {
      state.bet =
        action.payload >= 0 && action.payload <= state.money
          ? action.payload
          : state.bet;
    },
    add2x(state) {
      state.bet = state.bet * 2 < state.money ? state.bet * 2 : state.bet;
      state.is2x = true;
    },
    betDeal: {
      prepare(player1Data, player2Data) {
        return {
          payload: {
            player1Data,
            player2Data,
          },
        };
      },
      reducer(state, action) {
        state.isDeal = true;
        state.player1 = action.payload.player1Data;
        state.player2 = action.payload.player2Data;
        state.isLoading = false;
        state.is2x = state.bet * 2 > state.money ? true : false;
      },
    },
    drawPlayerCard(state, action) {
      state.player1 = {
        ...state.player1,
        cards: [...state.player1.cards, ...action.payload.cards],
      };
      state.isLoading = false;
    },
    errorMessage(state, action) {
      state.error = action.payload;
    },
    getPlayerData(state) {
      state.isLoading = true;
    },
    popUpAppear(state) {
      state.isPopup = true;
    },
    result: {
      prepare(player1Point, player2Point) {
        return {
          payload: {
            player1Point,
            player2Point,
          },
        };
      },
      reducer(state, action) {
        const win = "YOU WIN!";
        const lose = "YOU LOSE!";

        const pointValidate = (player, host) => {
          if (player === 21) return win;
          if (player > 21) return lose;
          if (player === host) return win;
          if (host > 21 || player > host) return win;
        };

        pointValidate(
          action.payload.player1Point,
          action.payload.player2Point
        ) === win
          ? (state.money = state.money + state.bet)
          : (state.money = state.money - state.bet);

        state.isPopup = false;
        state.player1 = null;
        state.player2 = null;
        state.isDeal = false;
        state.is2x = false;
        state.bet = 0;
      },
    },
    stand(state, action) {
      state.player2 = action.payload
        ? {
            ...state.player2,
            cards: [...state.player2.cards, ...action?.payload?.cards],
          }
        : state.player2;
      state.isLoading = false;
      state.isPopup = true;
    },
  },
});

export function stand(host, point) {
  if (point > 17) return { type: "game/stand", payload: null };

  return async function (dispatch, getState) {
    try {
      dispatch({ type: "game/getPlayerData" });
      let hostCard;
      if (point < 9)
        hostCard = await drawCard(host, Math.floor(Math.random() * 3) + 1);
      if (point < 17)
        hostCard = await drawCard(host, Math.floor(Math.random() * 2) + 1);
      dispatch({ type: "game/stand", payload: hostCard });
    } catch (e) {
      dispatch({ type: "game/errorMessage", payload: e.message });
    }
  };
}

export function drawPlayerCard(player) {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "game/getPlayerData" });
      const playerCard = await drawCard(player);
      dispatch({ type: "game/drawPlayerCard", payload: playerCard });
    } catch (e) {
      dispatch({ type: "game/errorMessage", payload: e.message });
    }
  };
}

export function betDeal() {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "game/getPlayerData" });
      const player1Data = await getCard();
      const player2Data = await getCard();
      dispatch({
        type: "game/betDeal",
        payload: { player1Data, player2Data },
      });
    } catch (e) {
      dispatch({ type: "game/errorMessage", payload: e.message });
    }
  };
}

export const {
  authentication,
  addBet,
  add2x,
  loading,
  errorMessage,
  result,
  popUpAppear,
} = gameSlice.actions;
export default gameSlice.reducer;
