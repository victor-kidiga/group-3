import { expect, test, vi } from "vitest";
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

test("renders car name correctly", () => {
  renderCarCard();
  expect(screen.getByText("Toyota Corolla")).toBeInTheDocument();
});

test("renders car price formatted with KSh", () => {
  renderCarCard();
  expect(screen.getByText(/KSh/)).toBeInTheDocument();
});

test("renders transmission type", () => {
  renderCarCard();
  expect(screen.getByText("Automatic")).toBeInTheDocument();
});

test("renders fuel type", () => {
  renderCarCard();
  expect(screen.getByText("Petrol")).toBeInTheDocument();
});

test("renders model year", () => {
  renderCarCard();
  expect(screen.getByText("2022")).toBeInTheDocument();
});

test("renders car image with correct alt text", () => {
  renderCarCard();
  const image = screen.getByAltText("Toyota Corolla");
  expect(image).toBeInTheDocument();
});

test("renders Buy button", () => {
  renderCarCard();
  expect(screen.getByText("Buy")).toBeInTheDocument();
});

test("calls onBuy when Buy button is clicked", () => {
  const mockBuy = vi.fn();
  renderCarCard({ onBuy: mockBuy });
  fireEvent.click(screen.getByText("Buy"));
  expect(mockBuy).toHaveBeenCalledTimes(1);
});

test("does not show Edit and Remove buttons for non-admin", () => {
  renderCarCard({ isAdmin: false });
  expect(screen.queryByText("Edit")).not.toBeInTheDocument();
  expect(screen.queryByText("Remove")).not.toBeInTheDocument();
});

test("shows Edit and Remove buttons for admin", () => {
  renderCarCard({ isAdmin: true });
  expect(screen.getByText("Edit")).toBeInTheDocument();
  expect(screen.getByText("Remove")).toBeInTheDocument();
});

test("calls onDelete when Remove button is clicked", () => {
  const mockDelete = vi.fn();
  renderCarCard({ isAdmin: true, onDelete: mockDelete });
  fireEvent.click(screen.getByText("Remove"));
  expect(mockDelete).toHaveBeenCalledTimes(1);
});

test("calls onEdit when Edit button is clicked", () => {
  const mockEdit = vi.fn();
  renderCarCard({ isAdmin: true, onEdit: mockEdit });
  fireEvent.click(screen.getByText("Edit"));
  expect(mockEdit).toHaveBeenCalledTimes(1);
});
