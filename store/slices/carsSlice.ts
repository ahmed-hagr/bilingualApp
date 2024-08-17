// carsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../services/carsApi";

interface CarsState {
    cars: Car[];
}

const initialState: CarsState = {
cars: [],

};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCars(state, action: PayloadAction<Car[]>) {
      state.cars = action.payload;
    },
    
    
  }
});

export const { setCars } = carsSlice.actions;

export default carsSlice.reducer;
