// Everyone shown in the Founders section of the About page, and the teams they're on.
//
// To add a headshot: save it as public/images/headshots/first-last.png (square, 800x800)
// and add `headshot: "/images/headshots/first-last.png"` to that person below.
// People without a headshot show their initials instead.

export interface Person {
  name: string;
  lastName: string; // used for A-Z sorting
  headshot?: string;
}

export const people = {
  aarashGohari: { name: "Aarash Gohari", lastName: "Gohari", headshot: "/images/headshots/aarash-gohari.png" },
  adrianOrtega: { name: "Adrian Ortega", lastName: "Ortega" },
  aliceDao: { name: "Alice Dao", lastName: "Dao" },
  andreTiu: { name: "Andre Tiu", lastName: "Tiu" },
  andrewL: { name: "Andrew L.", lastName: "L" },
  ashlynnRingham: { name: "Ashlynn Ringham", lastName: "Ringham" },
  callieTaylor: { name: "Callie Taylor", lastName: "Taylor" },
  christianCaingcoy: { name: "Christian Caingcoy", lastName: "Caingcoy" },
  cindyDao: { name: "Cindy Dao", lastName: "Dao" },
  danielLopez: { name: "Daniel Lopez", lastName: "Lopez" },
  edwinAlvarez: { name: "Edwin Alvarez", lastName: "Alvarez" },
  henokWondem: { name: "Henok Wondem", lastName: "Wondem" },
  jettJoncich: { name: "Jett Joncich", lastName: "Joncich" },
  justinPanopio: { name: "Justin Panopio", lastName: "Panopio" },
  kayraH: { name: "Kayra H.", lastName: "H" },
  khristianOrdonio: { name: "Khristian Ordonio", lastName: "Ordonio", headshot: "/images/headshots/khristian-ordonio.png" },
  maddoxDolor: { name: "Maddox Dolor", lastName: "Dolor", headshot: "/images/headshots/maddox-dolor.png" },
  narekTonoyan: { name: "Narek (Tony) Tonoyan", lastName: "Tonoyan", headshot: "/images/headshots/narek-tonoyan.png" },
  nateTran: { name: "Nate Tran", lastName: "Tran" },
  nathanielOrdonio: { name: "Nathaniel (Yul) Ordonio", lastName: "Ordonio", headshot: "/images/headshots/nathaniel-ordonio.png" },
  nicholasMartinez: { name: "Nicholas Martinez", lastName: "Martinez" },
  patrickChiong: { name: "Patrick Chiong", lastName: "Chiong" },
  reaseyYou: { name: "Reasey You", lastName: "You" },
  ricardoVazquez: { name: "Ricardo Vazquez", lastName: "Vazquez" },
  richiesHuynh: { name: "Richies Huynh", lastName: "Huynh", headshot: "/images/headshots/richies-huynh.png" },
  vaughnGuintu: { name: "Vaughn Guintu", lastName: "Guintu", headshot: "/images/headshots/vaughn-guintu.png" },
} satisfies Record<string, Person>;

export type PersonId = keyof typeof people;

export interface TeamMember {
  person: PersonId;
  role: string;
  lead?: boolean;
}

export interface Team {
  id: string; // used in the link, e.g. /about#founders-software
  name: string;
  members: TeamMember[];
}

// Leads first, then everyone else. Each group goes A-Z by last name,
// then by full name if two people share a last name.
export function sortMembers(members: TeamMember[]): TeamMember[] {
  return [...members].sort((a, b) => {
    if (Boolean(a.lead) !== Boolean(b.lead)) {
      return a.lead ? -1 : 1;
    }
    const personA = people[a.person];
    const personB = people[b.person];
    return personA.lastName.localeCompare(personB.lastName) || personA.name.localeCompare(personB.name);
  });
}

// First letter of the first and last name, ignoring nicknames in parentheses.
// "Narek (Tony) Tonoyan" -> "NT", "Kayra H." -> "KH"
export function getInitials(name: string): string {
  const words = name
    .replace(/\(.*?\)/g, "")
    .split(" ")
    .filter((word) => word !== "");
  const firstWord = words[0];
  const lastWord = words[words.length - 1];
  if (words.length === 1) {
    return firstWord[0].toUpperCase();
  }
  return (firstWord[0] + lastWord[0]).toUpperCase();
}

// Tabs show in this order. Members can be listed in any order; they're sorted on screen.
export const teams: Team[] = [
  {
    id: "c-suite",
    name: "C-Suite",
    members: [
      { person: "vaughnGuintu", role: "Chief Executive Officer (CEO)" },
      { person: "edwinAlvarez", role: "Chief Operating Officer (COO)" },
      { person: "reaseyYou", role: "Chief Financial Officer (CFO)" },
      { person: "khristianOrdonio", role: "Chief Product Officer (CPO)" },
    ],
  },
  {
    id: "software",
    name: "Software",
    members: [
      { person: "narekTonoyan", role: "Software Lead", lead: true },
      { person: "richiesHuynh", role: "Software Lead", lead: true },
      { person: "ricardoVazquez", role: "Software Developer" },
      { person: "justinPanopio", role: "Software Developer" },
      { person: "henokWondem", role: "Software Developer" },
      { person: "nicholasMartinez", role: "Software Developer" },
      { person: "adrianOrtega", role: "Software Developer" },
    ],
  },
  {
    id: "outreach",
    name: "Outreach",
    members: [
      { person: "reaseyYou", role: "Outreach Lead", lead: true },
      { person: "nateTran", role: "Outreach" },
      { person: "cindyDao", role: "Outreach" },
      { person: "callieTaylor", role: "Outreach" },
      { person: "nathanielOrdonio", role: "Outreach" },
    ],
  },
  {
    id: "finance",
    name: "Finance",
    members: [
      { person: "reaseyYou", role: "Finance Lead", lead: true },
      { person: "aarashGohari", role: "Finance" },
      { person: "aliceDao", role: "Finance" },
      { person: "maddoxDolor", role: "Finance" },
      { person: "nateTran", role: "Finance" },
    ],
  },
  {
    id: "drone-design",
    name: "Drone Design",
    members: [
      { person: "kayraH", role: "Drone Design Lead", lead: true },
      { person: "andreTiu", role: "Drone Design" },
      { person: "andrewL", role: "Drone Design" },
      { person: "danielLopez", role: "Drone Design" },
      { person: "nicholasMartinez", role: "Drone Design" },
      { person: "patrickChiong", role: "Drone Design" },
    ],
  },
  {
    id: "wall-interface",
    name: "Wall Interface",
    members: [
      { person: "edwinAlvarez", role: "Wall Interface Lead", lead: true },
      { person: "ashlynnRingham", role: "Wall Interface" },
      { person: "christianCaingcoy", role: "Wall Interface" },
      { person: "jettJoncich", role: "Wall Interface" },
      { person: "reaseyYou", role: "Wall Interface" },
    ],
  },
  {
    id: "drone-bay",
    name: "Drone Bay",
    members: [
      { person: "nathanielOrdonio", role: "Drone Bay Lead", lead: true },
      { person: "callieTaylor", role: "Drone Bay" },
      { person: "maddoxDolor", role: "Drone Bay" },
    ],
  },
];
