import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { persistor, store } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const RouteLayout = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />

          <main>
            <Outlet />
          </main>
        </PersistGate>
      </Provider>
    </>
  );
};

export default RouteLayout;
