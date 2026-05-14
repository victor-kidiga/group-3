
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
