// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { carsApi } from './services/carsApi';
import cars from "./slices/carsSlice"
export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
    cars:cars
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
