import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import DropDown from "../Reusable/DropDown";
import { useRouter } from "next/router";
import FilterIcon from "../../public/assets/filterIcon.svg";
import ExitIcon from "../../public/assets/ExitIcon.svg";

interface FilterProps {
  setFilterCriteria: (criteria: {
    status: string;
    make: string;
    color: string;
  }) => void;
}

const Filter: React.FC<FilterProps> = ({ setFilterCriteria }) => {
  const { locale } = useRouter();
  const isRTL = locale === "ar";
  const cars = useSelector((state: RootState) => state.cars.cars);

  const uniqueMakes = Array.from(new Set(cars.map((car) => car.make)));
  const uniqueColors = Array.from(new Set(cars.map((car) => car.color)));

  const [showDropdowns, setShowDropdowns] = useState(true);
  const [status, setStatus] = useState("All");
  const [make, setMake] = useState("All");
  const [color, setColor] = useState("All");

  const toggleDropdowns = () => {
    setShowDropdowns((prev) => !prev);
  };

  const handleMakeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMake = event.target.value;
    setMake(newMake);
    setFilterCriteria({ status, make: newMake, color });
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newColor = event.target.value;
    setColor(newColor);
    setFilterCriteria({ status, make, color: newColor });
  };

  return (
    <div className="flex items-center mb-5">
      {showDropdowns && (
        <>
          <DropDown
            id="make"
            label="Select Make"
            value={make}
            options={uniqueMakes}
            onChange={handleMakeChange}
          />

          <div className="mx-2"></div>

          <DropDown
            id="color"
            label="Select Color"
            value={color}
            options={uniqueColors}
            onChange={handleColorChange}
          />
        </>
      )}

      <div
        className={`${
          isRTL ? "mr-auto" : "ml-auto"
        }  hidden sm:flex   items-center`}
      >
        <button
          className="p-2 text-white bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none"
          onClick={toggleDropdowns}
        >
          {showDropdowns ? (
            <ExitIcon className="w-5 h-5" />
          ) : (
            <FilterIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default React.memo(Filter);
