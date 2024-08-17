import React from "react";
import Image from "next/image";
import DummyImage from "../../public/assets/eba393b0768f90bf83a5f0c68504268b.png";

interface CarType {
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

interface CarProps {
  cars: CarType[] | undefined; // Allow undefined here
}

const Car: React.FC<CarProps> = ({ cars }) => {
  if (!cars) {
    return <div>No cars available.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cars.map((car) => (
        <div key={car.id} className="bg-white rounded-lg p-4 shadow-lg">
          <h3 className="text-lg font-semibold">
            {car.make} {car.model}
          </h3>
          <Image
            width={200}
            height={200}
            loading="eager"
            priority
            src={DummyImage}
            alt={car.model}
            layout="responsive"
          />
          <div className="flex justify-between items-center mt-2">
            <div className="text-gray-500 text-sm">
              <span>{car.color}</span>
            </div>
            <div className="text-gray-500 text-sm">{car.fuelType}</div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-gray-500 text-sm">
              <span>{car.transmission} </span>
            </div>
            <div className="text-gray-500 text-sm">${car.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Car;
