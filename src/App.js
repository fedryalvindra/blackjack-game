import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { lazy, Suspense } from "react";

import store from "./store";
import SpinnerFullPage from "./features/components/SpinnerFullPage";
import ProtectedRoute from "./pages/ProtectedRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const FillName = lazy(() =>
  import("./features/components/fillname-component/FillName")
);
const Game = lazy(() => import("./features/game/Game"));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route index element={<Navigate to="/blackjack-game" />} />
            <Route path="/blackjack-game" element={<HomePage />} />
            <Route path="/app" element={<AppLayout />}>
              <Route index element={<FillName />} />
              <Route
                path=":name"
                element={
                  <ProtectedRoute>
                    <Game />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
