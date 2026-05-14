import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CarCard from "../components/CarCard";

const mockCar = {
  id: "1",
  name: "Toyota Corolla",
  image: "https://cdn.imagin.studio/getImage?customer=img&make=toyota&modelFamily=corolla&modelYear=2022&angle=23&zoomType=fullscreen&width=900",
  price: 2500000,
  modelYear: 2022,
  description: "A reliable and fuel-efficient sedan perfect for daily commuting.",
  transmission: "Automatic",
  fuelType: "Petrol",
  fuelConsumption: "16 km/l"
};

const renderCarCard = (props = {}) => {
  return render(
    <BrowserRouter>
      <CarCard
        car={mockCar}
        onDelete={() => {}}
        onEdit={() => {}}
        onBuy={() => {}}
        isAdmin={false}
        {...props}
      />
    </BrowserRouter>
  );
};
