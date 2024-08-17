import React, { Fragment, useEffect } from 'react';
import Chart from './Chart';
import Points from './Points';
import Car from '../Reusable/Car';
import { setCars } from "@/store/slices/carsSlice";
import { useGetCarsQuery } from "@/store/services/carsApi"; 
import { useDispatch } from "react-redux";
import LoadingSpinner from "../Reusable/LoadingSpinner";
import ErrorSnackbar from "../Reusable/ErrorSnackbar";
const DashBordBarent = () => {
  const { data: cars = [], error, isLoading } = useGetCarsQuery(3); 
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (cars.length > 0) { 
      dispatch(setCars(cars));
    }
  }, [cars, dispatch]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorSnackbar message={error.toString()} />;

  return (
    <Fragment>
      <Chart />
      <Points />
      <Car cars={cars} />
    </Fragment>
  );
}

export default DashBordBarent;
