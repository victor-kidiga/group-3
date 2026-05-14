
test("renders car name correctly", () => {
  renderCarCard();
  expect(screen.getByText("Toyota Corolla")).toBeInTheDocument();
});

test("renders car price formatted with KSh", () => {
  renderCarCard();
  expect(screen.getByText(/KSh/)).toBeInTheDocument();
});
