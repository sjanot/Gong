export type BillboardStatus = "available" | "reserved" | "occupied";

export interface Billboard {
  id: string;
  name: string;
  location: string;
  direction: string;
  category: "centrum" | "okolie" | "dalsie";
  status: BillboardStatus;
  gps?: string;
  mapsUrl?: string;
  illuminated?: boolean;
  pricePerMonth: number;
  image?: string;
}

export const billboards: Billboard[] = [
  // CENTRUM - 12 billboardov (fotky #18-32 z originálu, bez #21-23)
  {
    id: "c1",
    name: "Billboard #18",
    location: "Dolný Kubín — Centrum",
    direction: "hlavná cesta",
    category: "centrum",
    status: "available",
    pricePerMonth: 95,
    image: "/billboards/18-billboard-dolny-kubin-jpg.jpg",
  },
  {
    id: "c2",
    name: "Billboard #19",
    location: "Dolný Kubín — Centrum",
    direction: "hlavná cesta",
    category: "centrum",
    status: "occupied",
    pricePerMonth: 95,
    image: "/billboards/19-billboard-dolny-kubin-jpg.jpg",
  },
  {
    id: "c3",
    name: "Billboard #20",
    location: "Dolný Kubín — Centrum",
    direction: "pri námestí",
    category: "centrum",
    status: "occupied",
    pricePerMonth: 95,
    image: "/billboards/20-billboard-dolny-kubin-jpg.jpg",
  },
  {
    id: "c4",
    name: "Billboard #24",
    location: "Dolný Kubín — Centrum",
    direction: "pri obchodnom dome",
    category: "centrum",
    status: "occupied",
    pricePerMonth: 95,
    image: "/billboards/24-billboard-dolny-kubin-jpg.jpg",
  },
  {
    id: "c5",
    name: "Billboard #25",
    location: "Dolný Kubín — Centrum",
    direction: "hlavná križovatka",
    category: "centrum",
    status: "occupied",
    pricePerMonth: 95,
    image: "/billboards/25-billboard-dolny-kubin-jpg.jpg",
  },
  {
    id: "c6",
    name: "Billboard #26A",
    location: "Dolný Kubín — Centrum",
    direction: "pri autobusovej stanici",
    category: "centrum",
    status: "occupied",
    pricePerMonth: 95,
    image: "/billboards/26A-billboard-dolny-kubin-jpg.jpg",
  },
  {
    id: "c7",
    name: "Billboard #26B",
    location: "Dolný Kubín — Centrum",
    direction: "smerom na sídlisko",
    category: "centrum",
    status: "occupied",
    pricePerMonth: 95,
    image: "/billboards/26B-billboard-dolny-kubin-jpg.jpg",
  },
  {
    id: "c8",
    name: "Billboard #27",
    location: "Dolný Kubín — Centrum",
    direction: "pri pošte",
    category: "centrum",
    status: "occupied",
    pricePerMonth: 95,
    image: "/billboards/27-billboard-dolny-kubin-jpg.jpg",
  },
  {
    id: "c9",
    name: "Billboard #28",
    location: "Dolný Kubín — Centrum",
    direction: "hlavná ulica",
    category: "centrum",
    status: "occupied",
    pricePerMonth: 95,
    image: "/billboards/28-billboard-dolny-kubin-jpg.jpg",
  },
  {
    id: "c10",
    name: "Billboard #29",
    location: "Dolný Kubín — Centrum",
    direction: "pri parkovisku",
    category: "centrum",
    status: "occupied",
    pricePerMonth: 95,
    image: "/billboards/29-billboard-dolny-kubin-jpg.jpg",
  },
  {
    id: "c11",
    name: "Billboard #30",
    location: "Dolný Kubín — Centrum",
    direction: "smer na Oravu",
    category: "centrum",
    status: "occupied",
    pricePerMonth: 95,
    image: "/billboards/30-billboard-dolny-kubin-jpg.jpg",
  },
  {
    id: "c12",
    name: "Billboard #31",
    location: "Dolný Kubín — Centrum",
    direction: "pri železničnej stanici",
    category: "centrum",
    status: "occupied",
    pricePerMonth: 95,
    image: "/billboards/31-billboard-dolny-kubin-jpg.jpg",
  },
  // OKOLIE - 14 billboardov (fotky #1-17 z originálu)
  {
    id: "o1",
    name: "Billboard #1",
    location: "Veličná",
    direction: "smer do DK",
    category: "okolie",
    status: "occupied",
    gps: "49°12'32.3\"N 19°15'34.3\"E",
    pricePerMonth: 95,
    image: "/billboards/1-billboard-velicna-jpg.jpg",
  },
  {
    id: "o2",
    name: "Billboard #2",
    location: "Veličná",
    direction: "smer do Veličnej",
    category: "okolie",
    status: "occupied",
    gps: "49°12'32.3\"N 19°15'34.3\"E",
    pricePerMonth: 95,
    image: "/billboards/2-billboard-velicna-jpg.jpg",
  },
  {
    id: "o3",
    name: "Billboard #3",
    location: "Veličná",
    direction: "smer do DK",
    category: "okolie",
    status: "occupied",
    gps: "49°12'36.2\"N 19°16'06.7\"E",
    pricePerMonth: 95,
    image: "/billboards/3-billboard-velicna-jpg.jpg",
  },
  {
    id: "o4",
    name: "Billboard #4",
    location: "Veličná",
    direction: "smer do DK",
    category: "okolie",
    status: "occupied",
    gps: "49°12'36.2\"N 19°16'06.7\"E",
    pricePerMonth: 95,
    image: "/billboards/4-billboard-velicna-jpg.jpg",
  },
  {
    id: "o5",
    name: "Billboard #5",
    location: "Veličná",
    direction: "smer do DK",
    category: "okolie",
    status: "occupied",
    gps: "49°12'37.1\"N 19°16'08.5\"E",
    pricePerMonth: 95,
    image: "/billboards/5-billboard-velicna-jpg.jpg",
  },
  {
    id: "o6",
    name: "Billboard #6",
    location: "Veličná",
    direction: "smer do DK",
    category: "okolie",
    status: "occupied",
    gps: "49°12'37.1\"N 19°16'08.5\"E",
    pricePerMonth: 95,
    image: "/billboards/6-billboard-velicna-jpg.jpg",
  },
  {
    id: "o7",
    name: "Billboard #7",
    location: "Veličná",
    direction: "smer do Veličnej",
    category: "okolie",
    status: "reserved",
    gps: "49°12'37.1\"N 19°16'08.5\"E",
    pricePerMonth: 95,
    image: "/billboards/7-billboard-velicna-jpg.jpg",
  },
  {
    id: "o8",
    name: "Billboard #8",
    location: "Veličná",
    direction: "smer do Veličnej",
    category: "okolie",
    status: "occupied",
    gps: "49°12'33.4\"N 19°15'49.6\"E",
    pricePerMonth: 95,
    image: "/billboards/8-billboard-velicna-jpg.jpg",
  },
  {
    id: "o9",
    name: "Billboard #9",
    location: "Veličná",
    direction: "smer do DK",
    category: "okolie",
    status: "occupied",
    gps: "49°12'27.4\"N 19°15'08.7\"E",
    pricePerMonth: 95,
    image: "/billboards/9-billboard-velicna-jpg.jpg",
  },
  {
    id: "o10",
    name: "Billboard #11",
    location: "Veličná",
    direction: "smer do DK",
    category: "okolie",
    status: "occupied",
    gps: "49°12'33.4\"N 19°15'49.6\"E",
    pricePerMonth: 95,
    image: "/billboards/11-billboard-velicna-jpg.jpg",
  },
  {
    id: "o11",
    name: "Billboard #12",
    location: "Párnica",
    direction: "smer do DK",
    category: "okolie",
    status: "occupied",
    gps: "49°11'43.7\"N 19°12'01.3\"E",
    pricePerMonth: 95,
    image: "/billboards/12-billboard-parnica-jpg.jpg",
  },
  {
    id: "o12",
    name: "Billboard #16A",
    location: "Valaská Dubová",
    direction: "smer do Ružomberka",
    category: "okolie",
    status: "occupied",
    gps: "49°08'28.3\"N 19°17'16.5\"E",
    pricePerMonth: 95,
    image: "/billboards/16A-billboard-valaska-dubova-jpg.jpg",
  },
  {
    id: "o13",
    name: "Billboard #16B",
    location: "Valaská Dubová",
    direction: "smer do DK",
    category: "okolie",
    status: "occupied",
    gps: "49°08'28.3\"N 19°17'16.5\"E",
    illuminated: true,
    pricePerMonth: 100,
    image: "/billboards/16B-billboard-valaska-dubova-jpg.jpg",
  },
  {
    id: "o14",
    name: "Billboard #17A",
    location: "Kňažia",
    direction: "smer do Námestova",
    category: "okolie",
    status: "occupied",
    gps: "49°13'51.1\"N 19°19'17.7\"E",
    pricePerMonth: 95,
    image: "/billboards/17A-billboard-knazia-jpg.jpg",
  },
  // ĎALŠIE PLOCHY
  {
    id: "d1",
    name: "Reklamná plocha Kraľovany",
    location: "Kraľovany",
    direction: "pri hlavnej ceste",
    category: "dalsie",
    status: "occupied",
    pricePerMonth: 95,
    image: "/billboards/ponuka-kralovany24-jpg.jpg",
  },
];

export function getStatusLabel(status: BillboardStatus): string {
  switch (status) {
    case "available":
      return "Voľná ihneď";
    case "reserved":
      return "Rezervovaná";
    case "occupied":
      return "Obsadená";
  }
}

export function getStatusColor(status: BillboardStatus): string {
  switch (status) {
    case "available":
      return "bg-green-500";
    case "reserved":
      return "bg-yellow-500";
    case "occupied":
      return "bg-red-400";
  }
}
