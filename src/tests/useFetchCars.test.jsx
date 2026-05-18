import { renderHook } from "@testing-library/react";
import useFetchCars from "../hooks/useFetchCars";

test("useFetchCars returns cars and loading state", () => {
  const { result } = renderHook(() => useFetchCars());
  expect(result.current.loading).toBe(true);
  expect(result.current.cars).toEqual([]);
});
