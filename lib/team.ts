// Everyone shown in the Founders section of the About page, and the teams they're on.
//
// To add a headshot: save it as public/images/headshots/first-last.jpg (square, 800x800)
// and add `headshot: "/images/headshots/first-last.jpg"` to that person below.
// People without a headshot show the Gagamba logo as a stand-in.

export interface Person {
  name: string;
  lastName: string; // used for A-Z sorting
  headshot?: string;
}

export const people = {
  aarashGohari: { name: "Aarash Gohari", lastName: "Gohari", headshot: "/images/headshots/aarash-gohari.jpg" },
  adrianOrtega: { name: "Adrian Ortega", lastName: "Ortega", headshot: "/images/headshots/adrian-ortega.jpg" },
  aliceDao: { name: "Alice Dao", lastName: "Dao", headshot: "/images/headshots/alice-dao.jpg" },
  andreTiu: { name: "Andre Tiu", lastName: "Tiu", headshot: "/images/headshots/andre-tiu.jpg" },
  andrewL: { name: "Andrew L.", lastName: "L", headshot: "/images/headshots/andrew-l.jpg" },
  ashlynnRingham: { name: "Ashlynn Ringham", lastName: "Ringham", headshot: "/images/headshots/ashlynn-ringham.jpg" },
  christianCaingcoy: { name: "Christian Caingcoy", lastName: "Caingcoy", headshot: "/images/headshots/christian-caingcoy.jpg" },
  cindyDao: { name: "Cindy Dao", lastName: "Dao", headshot: "/images/headshots/cindy-dao.jpg" },
  danielLopez: { name: "Daniel Lopez", lastName: "Lopez" },
  edwinAlvarez: { name: "Edwin Alvarez", lastName: "Alvarez", headshot: "/images/headshots/edwin-alvarez.jpg" },
  henokWondem: { name: "Henok Wondem", lastName: "Wondem", headshot: "/images/headshots/henok-wondem.jpg" },
  jettJoncich: { name: "Jett Joncich", lastName: "Joncich", headshot: "/images/headshots/jett-joncich.jpg" },
  justinPanopio: { name: "Justin Panopio", lastName: "Panopio", headshot: "/images/headshots/justin-panopio.jpg" },
  kayraH: { name: "Kayra H.", lastName: "H", headshot: "/images/headshots/kayra-h.jpg" },
  khristianOrdonio: { name: "Khristian Ordonio", lastName: "Ordonio", headshot: "/images/headshots/khristian-ordonio.jpg" },
  maddoxDolor: { name: "Maddox Dolor", lastName: "Dolor", headshot: "/images/headshots/maddox-dolor.jpg" },
  narekTonoyan: { name: "Narek (Tony) Tonoyan", lastName: "Tonoyan", headshot: "/images/headshots/narek-tonoyan.jpg" },
  nateTran: { name: "Nate Tran", lastName: "Tran", headshot: "/images/headshots/nate-tran.jpg" },
  nathanielOrdonio: { name: "Nathaniel (Yul) Ordonio", lastName: "Ordonio", headshot: "/images/headshots/nathaniel-ordonio.jpg" },
  nicholasMartinez: { name: "Nicholas Martinez", lastName: "Martinez", headshot: "/images/headshots/nicholas-martinez.jpg" },
  patrickChiong: { name: "Patrick Chiong", lastName: "Chiong", headshot: "/images/headshots/patrick-chiong.jpg" },
  reaseyYou: { name: "Reasey You", lastName: "You", headshot: "/images/headshots/reasey-you.jpg" },
  ricardoVazquez: { name: "Ricardo Vazquez", lastName: "Vazquez", headshot: "/images/headshots/ricardo-vazquez.jpg" },
  richiesHuynh: { name: "Richies Huynh", lastName: "Huynh", headshot: "/images/headshots/richies-huynh.jpg" },
  vaughnGuintu: { name: "Vaughn Guintu", lastName: "Guintu", headshot: "/images/headshots/vaughn-guintu.jpg" },
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

// Tabs show in this order. Members can be listed in any order; they're sorted on screen.
export const teams: Team[] = [
  {
    id: "c-suite",
    name: "C-Suite",
    members: [
      { person: "vaughnGuintu", role: "Chief Executive Officer (CEO)" },
      { person: "edwinAlvarez", role: "Chief Operating Officer (COO)" },
      { person: "reaseyYou", role: "Chief Financial Officer (CFO)" },
      { person: "khristianOrdonio", role: "Chief Policy Officer (CPO)" },
    ],
  },
  {
    id: "software",
    name: "Software",
    members: [
      { person: "narekTonoyan", role: "Lead Software Engineer", lead: true },
      { person: "richiesHuynh", role: "Lead Software Engineer", lead: true },
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
      { person: "nateTran", role: "Outreach" },
      { person: "cindyDao", role: "Outreach" },
      { person: "nathanielOrdonio", role: "Outreach" },
    ],
  },
  {
    id: "finance",
    name: "Finance",
    members: [
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
      { person: "edwinAlvarez", role: "Wall Interface System\nLead Engineer", lead: true },
      { person: "ashlynnRingham", role: "Wall Interface System Engineer" },
      { person: "christianCaingcoy", role: "Wall Interface System Engineer" },
      { person: "jettJoncich", role: "Wall Interface System Engineer" },
      { person: "reaseyYou", role: "Wall Interface System Engineer" },
    ],
  },
  {
    id: "drone-bay",
    name: "Drone Bay",
    members: [
      { person: "nathanielOrdonio", role: "Drone Bay Lead Engineer", lead: true },
      { person: "maddoxDolor", role: "Drone Bay Engineer" },
    ],
  },
];
