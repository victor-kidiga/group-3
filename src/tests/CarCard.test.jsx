import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CarCard from "../components/CarCard";

test("renders car name", () => {
  const car = {
    id: "1",
    name: "Mercedes GLE",
    brand: "Mercedes",
    price: 9500000,
    year: 2023,
    image: "https://example.com/car.jpg",
    description: "Luxury SUV",
  };

  render(
    <BrowserRouter>
      <CarCard car={car} onDelete={() => {}} />
    </BrowserRouter>
  );

  expect(screen.getByText("Mercedes GLE")).toBeInTheDocument();
});