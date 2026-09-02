import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PassCard from "./PassCard";
import type { Pass } from "@/data/festival";

const basePass: Pass = {
  name: "Day pass",
  price: "₹499",
  detail: "Any single day, all six stages.",
  feature: false,
};

describe("PassCard", () => {
  it("renders the pass name, price and detail", () => {
    render(<PassCard pass={basePass} />);
    expect(screen.getByText("Day pass")).toBeInTheDocument();
    expect(screen.getByText("₹499")).toBeInTheDocument();
    expect(screen.getByText(/all six stages/i)).toBeInTheDocument();
  });

  it("exposes an accessible, labelled book button", () => {
    render(<PassCard pass={basePass} />);
    expect(
      screen.getByRole("button", { name: "Book the Day pass" })
    ).toBeInTheDocument();
  });

  it("gives the featured pass the accent treatment", () => {
    render(<PassCard pass={{ ...basePass, name: "Festival pass", feature: true }} />);
    const button = screen.getByRole("button", { name: "Book the Festival pass" });
    expect(button.className).toContain("bg-accent");
  });
});
