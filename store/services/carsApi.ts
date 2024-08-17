import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: string;
  transmission: string;
  engine: string;
  horsepower: number;
  features: string[];
  owners: number;
  image: string;
}

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://freetestapi.com/api/v1/" }),
  endpoints: (builder) => ({
    getCars: builder.query<Car[], number | void>({
      query: (limit) =>limit? `cars?limit=${limit}`:'cars', 

    }),
  
  }),
});

export const { useGetCarsQuery } = carsApi;
