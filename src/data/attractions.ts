export type AttractionCategory =
  | "center"
  | "art"
  | "music"
  | "park"
  | "history"
  | "parking";

export type Attraction = {
  name: string;
  slug: string;
  category: AttractionCategory;
  latitude: number;
  longitude: number;
  walk: string;
  pairing: string;
  url?: string;
};

export const attractions: Attraction[] = [
  {
    name: "Center of the Universe",
    slug: "center-of-the-universe",
    category: "center",
    latitude: 36.15689,
    longitude: -95.99153,
    walk: "You are here",
    pairing: "Tulsa's small circle with the outsized echo.",
  },
  {
    name: "Artificial Cloud",
    slug: "artificial-cloud",
    category: "art",
    latitude: 36.15702,
    longitude: -95.99142,
    walk: "Beside the circle",
    pairing: "Robert Haozous's monumental weathering steel sculpture.",
  },
  {
    name: "Guthrie Green",
    slug: "guthrie-green",
    category: "park",
    latitude: 36.15894,
    longitude: -95.99423,
    walk: "About 5 minutes",
    pairing: "A green pause with events, food and room to linger.",
    url: "https://guthriegreen.com/",
  },
  {
    name: "Bob Dylan Center",
    slug: "bob-dylan-center",
    category: "music",
    latitude: 36.1593,
    longitude: -95.9947,
    walk: "About 6 minutes",
    pairing: "Turn a quick acoustic curiosity into a music-history afternoon.",
    url: "https://bobdylancenter.com/",
  },
  {
    name: "Woody Guthrie Center",
    slug: "woody-guthrie-center",
    category: "music",
    latitude: 36.15914,
    longitude: -95.99426,
    walk: "About 6 minutes",
    pairing: "Oklahoma songwriting and social history one block from the green.",
    url: "https://woodyguthriecenter.org/",
  },
  {
    name: "Cain's Ballroom",
    slug: "cains-ballroom",
    category: "music",
    latitude: 36.16147,
    longitude: -95.99484,
    walk: "About 10 minutes",
    pairing: "The historic home of western swing and a still-working music room.",
    url: "https://www.cainsballroom.com/",
  },
  {
    name: "Greenwood Rising",
    slug: "greenwood-rising",
    category: "history",
    latitude: 36.16009,
    longitude: -95.98788,
    walk: "About 10 minutes",
    pairing: "A vital, carefully interpreted introduction to Black Wall Street.",
    url: "https://www.greenwoodrising.org/",
  },
  {
    name: "BOK Center",
    slug: "bok-center",
    category: "art",
    latitude: 36.15273,
    longitude: -95.99691,
    walk: "About 10 minutes",
    pairing: "A dramatic piece of contemporary downtown architecture.",
    url: "https://www.bokcenter.com/",
  },
];

export const orbitPlans = {
  "30": ["center-of-the-universe", "artificial-cloud", "guthrie-green"],
  "90": [
    "center-of-the-universe",
    "artificial-cloud",
    "guthrie-green",
    "bob-dylan-center",
    "woody-guthrie-center",
  ],
  half: [
    "center-of-the-universe",
    "artificial-cloud",
    "guthrie-green",
    "bob-dylan-center",
    "woody-guthrie-center",
    "cains-ballroom",
    "greenwood-rising",
  ],
} as const;
