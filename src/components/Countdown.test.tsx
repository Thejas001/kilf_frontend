import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import Countdown from "./Countdown";

describe("Countdown", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2027-01-13T09:00:00+05:30"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("exposes an accessible timer with the days remaining", () => {
    render(<Countdown />);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    const timer = screen.getByRole("timer");
    expect(timer.getAttribute("aria-label")).toMatch(/2 days/);
    expect(timer.getAttribute("aria-label")).toMatch(/until the festival opens/);
  });

  it("ticks the visible seconds digit forward", () => {
    render(<Countdown />);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    const before = screen.getByRole("timer").getAttribute("aria-label");
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    const after = screen.getByRole("timer").getAttribute("aria-label");
    expect(after).not.toBe(before);
  });
});
