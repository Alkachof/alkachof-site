import { renderHook, act } from "@testing-library/react";
import useInput from "./useInput";

describe("UseInput hook", () => {
  test("hook returns initial value, changes value, resets", () => {
    const { result } = renderHook(() => useInput(""));

    expect(result.current.value).toBe("");

    act(() => {
      result.current.onChange({ target: { value: "First value" } });
    });
    expect(result.current.value).toBe("First value");

    act(() => {
      result.current.onChange({ target: { value: "Second value" } });
    });
    expect(result.current.value).toBe("Second value");

    act(() => {
      result.current.reset();
    });
    expect(result.current.value).toBe("");
  });
});
