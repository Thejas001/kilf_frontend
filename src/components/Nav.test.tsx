import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  usePathname: () => "/programme",
}));

import Nav from "./Nav";
import { NAV } from "@/data/festival";

describe("Nav", () => {
  it("renders the wordmark and every nav link", () => {
    render(<Nav />);
    expect(screen.getByText("KILF")).toBeInTheDocument();
    for (const n of NAV) {
      expect(screen.getAllByText(n.label).length).toBeGreaterThan(0);
    }
  });

  it("marks the current route as the active page", () => {
    render(<Nav />);
    const activeLinks = screen.getAllByText("/programme").map((el) => el.closest("a"));
    expect(activeLinks.some((a) => a?.getAttribute("aria-current") === "page")).toBe(true);
  });

  it("opens and closes the mobile menu from the burger button", async () => {
    const user = userEvent.setup();
    render(<Nav />);
    const burger = screen.getByRole("button", { name: /open menu/i });
    expect(burger).toHaveAttribute("aria-expanded", "false");

    await user.click(burger);
    expect(burger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /close menu/i }));
    expect(screen.getByRole("button", { name: /open menu/i })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  it("closes the mobile menu when Escape is pressed", async () => {
    const user = userEvent.setup();
    render(<Nav />);
    await user.click(screen.getByRole("button", { name: /open menu/i }));
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.getByRole("button", { name: /open menu/i })).toBeInTheDocument();
  });
});
