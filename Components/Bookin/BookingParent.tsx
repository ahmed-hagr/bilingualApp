import React, { Fragment, useEffect, useCallback,useMemo ,useState} from "react";
import Filter from "./Filter";
import Car from "../Reusable/Car";
import { useDispatch } from "react-redux";
import { setCars } from "@/store/slices/carsSlice";
import { useGetCarsQuery } from "@/store/services/carsApi";
import LoadingSpinner from "../Reusable/LoadingSpinner";
import ErrorSnackbar from "../Reusable/ErrorSnackbar";
const BookingParent: React.FC = () => {
  const dispatch = useDispatch();
  const [filterCriteria, setFilterCriteria] = useState<{
    status: string;
    make: string;
    color: string;
  }>({ status: "All", make: "All", color: "All" });

  const handleSetFilterCriteria = useCallback(
    (criteria: { status: string; make: string; color: string }) => {
      setFilterCriteria(criteria);
    },
    []
  );
  const { data: cars, error, isLoading } = useGetCarsQuery(0);
  useEffect(() => {
    if (cars) {
      dispatch(setCars(cars));
    }
  }, [cars, dispatch]);

  const filteredCars = useMemo(() => {
    return cars?.filter((car) => {
      const matchesMake =
        filterCriteria.make === "All" || car.make === filterCriteria.make;
      const matchesColor =
        filterCriteria.color === "All" || car.color === filterCriteria.color;
      return matchesMake && matchesColor;
    });
  }, [cars, filterCriteria]);
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorSnackbar message={error.toString()} />;

  return (
    <Fragment>
      <Filter setFilterCriteria={handleSetFilterCriteria} />
      <Car cars={filteredCars} />
    </Fragment>
  );
};

export default BookingParent;
