import React, { useEffect } from "react";
import database from "./database";
import Router from "./router";
import { StoreProvider } from "./store";

export default AppRouter = () => {
  useEffect(() => {
    (async () => await database.connect())();
    return () => database.close();
  }, []);

  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
};
