export const ACCENT = "#EA1F45";

export type NavItem = { route: string; label: string };

export const NAV: NavItem[] = [
  { route: "/programme", label: "/programme" },
  { route: "/voices", label: "/voices" },
  { route: "/venue", label: "/venue" },
  { route: "/journal", label: "/journal" },
  { route: "/about", label: "/about" },
];

export type Speaker = { id: string; name: string; role: string; lang: string };

export const SPEAKERS: Speaker[] = [
  { id: "s1", name: "Ammu Sreedharan", role: "Poet", lang: "Malayalam" },
  { id: "s2", name: "Rehan Qureshi", role: "Novelist", lang: "Urdu / English" },
  { id: "s3", name: "Leela Thampuran", role: "Translator", lang: "Malayalam / Tamil" },
  { id: "s4", name: "Joseph Vadakkan", role: "Essayist", lang: "Malayalam" },
  { id: "s5", name: "Nandita Bose", role: "Publisher", lang: "Bengali" },
  { id: "s6", name: "Fathima Rasheed", role: "Playwright", lang: "Malayalam / Arabic" },
  { id: "s7", name: "Kiran Mattancherry", role: "Graphic novelist", lang: "English" },
  { id: "s8", name: "Devika Iyer", role: "Critic", lang: "Tamil / English" },
  { id: "s9", name: "Abbas Mehdi", role: "Poet", lang: "Kashmiri" },
  { id: "s10", name: "Sara Kuriakose", role: "Memoirist", lang: "Malayalam" },
  { id: "s11", name: "Thomas Ittira", role: "Historian", lang: "English" },
  { id: "s12", name: "Meenakshi Warrier", role: "Screenwriter", lang: "Malayalam" },
];

export type Session = {
  id: string;
  time: string;
  title: string;
  people: string;
  stage: string;
  lang: string;
};

export const SESSIONS: Record<string, Session[]> = {
  d1: [
    { id: "a1", time: "10:00", title: "The first three letters", people: "Ammu Sreedharan, Leela Thampuran, Joseph Vadakkan", stage: "Sand Stage", lang: "Malayalam" },
    { id: "a2", time: "12:30", title: "What survives translation", people: "Leela Thampuran, Devika Iyer", stage: "Translation Room", lang: "Bilingual" },
    { id: "a3", time: "15:00", title: "A publisher reads her rejections", people: "Nandita Bose", stage: "The Long Table", lang: "English" },
    { id: "a4", time: "18:30", title: "Opening reading: nine poets, nine minutes each", people: "Nine participants", stage: "Sand Stage", lang: "Multilingual" },
    { id: "a5", time: "21:00", title: "Late Hall: verse and arrack", people: "Open floor", stage: "Late Hall", lang: "Malayalam" },
  ],
  d2: [
    { id: "b1", time: "09:30", title: "Writing the coast", people: "Sara Kuriakose, Thomas Ittira", stage: "The Long Table", lang: "Malayalam" },
    { id: "b2", time: "11:30", title: "The novel is not tired", people: "Rehan Qureshi, Meenakshi Warrier", stage: "Sand Stage", lang: "English" },
    { id: "b3", time: "14:00", title: "Drawing what cannot be said", people: "Kiran Mattancherry", stage: "Poetry Shed", lang: "English" },
    { id: "b4", time: "16:30", title: "Kashmiri, out loud", people: "Abbas Mehdi", stage: "Translation Room", lang: "Kashmiri" },
    { id: "b5", time: "19:00", title: "Malayalam theatre after the pandemic", people: "Fathima Rasheed and company", stage: "Late Hall", lang: "Malayalam" },
  ],
  d3: [
    { id: "c1", time: "10:00", title: "Children write the sea", people: "Workshop, ages 8–13", stage: "Children's Yard", lang: "Malayalam" },
    { id: "c2", time: "12:00", title: "Criticism as a form of love", people: "Devika Iyer, Joseph Vadakkan", stage: "The Long Table", lang: "English" },
    { id: "c3", time: "15:30", title: "Six ways to open a book", people: "Rehan Qureshi", stage: "Poetry Shed", lang: "English" },
    { id: "c4", time: "17:30", title: "The archive is a rumour", people: "Thomas Ittira, Nandita Bose", stage: "Translation Room", lang: "Bilingual" },
    { id: "c5", time: "20:30", title: "Night poetry, unmoderated", people: "Open floor", stage: "Late Hall", lang: "Multilingual" },
  ],
  d4: [
    { id: "e1", time: "10:30", title: "A letter to the next edition", people: "Ammu Sreedharan", stage: "Sand Stage", lang: "Malayalam" },
    { id: "e2", time: "13:00", title: "Small presses, long games", people: "Nandita Bose, Kiran Mattancherry", stage: "The Long Table", lang: "English" },
    { id: "e3", time: "16:00", title: "What we got wrong this year", people: "Festival team, in public", stage: "Translation Room", lang: "Bilingual" },
    { id: "e4", time: "18:00", title: "Closing: the last reading on the sand", people: "All participants", stage: "Sand Stage", lang: "Multilingual" },
  ],
};

export type DayTab = { key: string; label: string };

export const DAY_TABS: DayTab[] = [
  { key: "d1", label: "Day 01 — 15 Jan" },
  { key: "d2", label: "Day 02 — 16 Jan" },
  { key: "d3", label: "Day 03 — 17 Jan" },
  { key: "d4", label: "Day 04 — 18 Jan" },
];

export type JournalEntry = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  kind: string;
};

export const JOURNAL: JournalEntry[] = [
  { id: "j1", date: "12 Jun 2026", title: "Notes on choosing a beach over a convention centre", excerpt: "Why the fourth edition moves out of a hall and onto sand, and what that costs.", kind: "Note" },
  { id: "j2", date: "28 Apr 2026", title: "Nine translators on the word they cannot carry across", excerpt: "A short survey, conducted over WhatsApp, of untranslatable Malayalam.", kind: "Feature" },
  { id: "j3", date: "03 Mar 2026", title: "The 003 edition, in numbers", excerpt: "Sixty-four sessions, 11,400 attendees, one power cut during a poetry reading.", kind: "Report" },
  { id: "j4", date: "19 Jan 2026", title: "What the Late Hall taught us about programming after midnight", excerpt: "The best sessions were the ones nobody scheduled.", kind: "Note" },
];

export type Pass = { name: string; price: string; detail: string; feature: boolean };

export const PASSES: Pass[] = [
  { name: "Day pass", price: "₹499", detail: "Any single day, all six stages. Available at the gate while capacity lasts.", feature: false },
  { name: "Festival pass", price: "₹1,499", detail: "All four days, priority seating in the Translation Room, printed programme.", feature: true },
  { name: "Patron", price: "₹4,999", detail: "All four days, the Long Table dinner, and one student pass gifted in your name.", feature: false },
];

export type Edition = { num: string; year: string; city: string; note: string };

export const EDITIONS: Edition[] = [
  { num: "001", year: "2021", city: "Thrissur", note: "Eleven translators, one rented hall, no budget." },
  { num: "002", year: "2023", city: "Kochi", note: "First open call. Twenty-eight sessions across a warehouse." },
  { num: "003", year: "2025", city: "Thiruvananthapuram", note: "Sixty-four sessions. The Late Hall begins." },
  { num: "004", year: "2027", city: "Karunagappally", note: "Ninety sessions across the town. 15–18 January." },
];

export const ALL_SESSIONS: Session[] = ([] as Session[]).concat(
  SESSIONS.d1,
  SESSIONS.d2,
  SESSIONS.d3,
  SESSIONS.d4
);

export const FEATURED_SESSIONS = [
  SESSIONS.d1[0],
  SESSIONS.d2[1],
  SESSIONS.d3[4],
  SESSIONS.d4[2],
  SESSIONS.d2[3],
].map((s, i) => ({
  ...s,
  num: "00" + (i + 1),
  meta: s.stage + " / " + s.time,
}));

export const TARGET_DATE = "2027-01-15T09:00:00+05:30";
