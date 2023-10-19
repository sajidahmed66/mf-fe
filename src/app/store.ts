import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import apiSlice from "@/features/api/apiSlice";
import authSliceReducer from "@/features/auth/authSlice";

const logger = createLogger();

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger, apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
