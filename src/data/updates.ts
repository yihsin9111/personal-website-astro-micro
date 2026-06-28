// Edit this file to manage the Updates section on the homepage.
// Each entry needs a date (YYYY-MM-DD) and a title.
// url is optional — if provided, the title becomes a link.

export type Update = {
  date: string;
  title: string;
  url?: string;
};

export const updates: Update[] = [
  {
    date: "2026-01-12",
    title: "Graduated from NTUEE ",
  },
];
