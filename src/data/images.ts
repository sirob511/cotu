export type SiteImage = {
  id: string;
  src: string;
  alt: string;
  credit?: string;
  license?: string;
  source?: string;
  productionApproved: boolean;
};

export const images: Record<string, SiteImage> = {
  hero: {
    id: "hero",
    src: "/images/editorial/downtown-tulsa-highsmith.jpg",
    alt: "Downtown Tulsa street looking toward BOK Tower between other high-rise buildings.",
    credit: "Carol M. Highsmith / Library of Congress, LC-DIG-highsm-65576",
    license: "Public domain; Library of Congress lists no known restrictions on publication.",
    source: "https://www.loc.gov/pictures/item/2020743523/",
    productionApproved: true,
  },
  cloud: {
    id: "cloud",
    src: "/images/editorial/downtown-tulsa-highsmith.jpg",
    alt: "Downtown Tulsa street looking toward BOK Tower between other high-rise buildings.",
    credit: "Carol M. Highsmith / Library of Congress, LC-DIG-highsm-65576",
    license: "Public domain; Library of Congress lists no known restrictions on publication.",
    source: "https://www.loc.gov/pictures/item/2020743523/",
    productionApproved: true,
  },
  orbit: {
    id: "orbit",
    src: "/images/editorial/tulsa-union-depot-highsmith.jpg",
    alt: "Art Deco facade and arched windows of Tulsa Union Depot beside the Boston Avenue pedestrian bridge.",
    credit: "Carol M. Highsmith / Library of Congress, LC-DIG-highsm-65478",
    license: "Public domain; Library of Congress lists no known restrictions on publication.",
    source: "https://www.loc.gov/pictures/item/2020743615/",
    productionApproved: true,
  },
  tulsaKingTrailer: {
    id: "tulsa-king-trailer",
    src: "/images/press/tulsa-king/official-trailer.jpg",
    alt: "Sylvester Stallone as Dwight Manfredi in the official Tulsa King trailer thumbnail.",
    credit: "Paramount+ official trailer",
    license: "Official YouTube trailer thumbnail; editorial use subject to final rights review",
    source: "https://www.youtube.com/watch?v=aaQSScwZPbA",
    productionApproved: false,
  },
  tulsaKingEpisode: {
    id: "tulsa-king-episode-102",
    src: "/images/press/tulsa-king/episode-102-dwight-tyson.jpg",
    alt: "Sylvester Stallone as Dwight Manfredi and Jay Will as Tyson in Tulsa King Season 1, Episode 2.",
    credit: "Brian Douglas/Paramount+",
    license: "Paramount Press Express still; editorial use subject to final rights review",
    source: "https://www.paramountpressexpress.com/paramount-plus/shows/tulsa-king/photos?episode=22834",
    productionApproved: false,
  },
};
