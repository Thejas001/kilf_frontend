import { describe, expect, it } from "vitest";
import {
  ALL_SESSIONS,
  DAY_TABS,
  EDITIONS,
  FEATURED_SESSIONS,
  JOURNAL,
  NAV,
  PASSES,
  SESSIONS,
  SPEAKERS,
} from "./festival";

describe("festival data", () => {
  it("every featured session id exists in the full session list", () => {
    const allIds = new Set(ALL_SESSIONS.map((s) => s.id));
    for (const s of FEATURED_SESSIONS) {
      expect(allIds.has(s.id)).toBe(true);
    }
  });

  it("ALL_SESSIONS is the concatenation of every day's sessions", () => {
    const total = Object.values(SESSIONS).reduce((n, day) => n + day.length, 0);
    expect(ALL_SESSIONS).toHaveLength(total);
  });

  it("has a session list for every day tab", () => {
    for (const tab of DAY_TABS) {
      expect(SESSIONS[tab.key]).toBeDefined();
      expect(SESSIONS[tab.key].length).toBeGreaterThan(0);
    }
  });

  it("has unique, non-empty speaker ids", () => {
    expect(SPEAKERS.length).toBeGreaterThan(0);
    const ids = SPEAKERS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("has unique session ids across all days", () => {
    const ids = ALL_SESSIONS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("marks exactly one pass as the featured tier", () => {
    expect(PASSES.filter((p) => p.feature)).toHaveLength(1);
  });

  it("every nav route is an absolute path", () => {
    for (const n of NAV) {
      expect(n.route.startsWith("/")).toBe(true);
    }
  });

  it("has journal entries and editions", () => {
    expect(JOURNAL.length).toBeGreaterThan(0);
    expect(EDITIONS.length).toBeGreaterThan(0);
  });
});
