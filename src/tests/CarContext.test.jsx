import { render, screen } from "@testing-library/react";
import { CarProvider, useCarContext } from "../context/CarContext";

function TestComponent() {
  const { cars, loading } = useCarContext();
  return (
    <div>
      <p>Loading: {loading.toString()}</p>
      <p>Cars: {cars.length}</p>
    </div>
  );
}

test("CarContext provides cars and loading state", () => {
  render(
    <CarProvider>
      <TestComponent />
    </CarProvider>
  );
  expect(screen.getByText(/Loading/)).toBeInTheDocument();
});
