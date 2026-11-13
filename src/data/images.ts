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
    src: "/images/editorial/cotu-circle-blue-hour.png",
    alt: "Editorial illustration of the brick acoustic circle and steel public art above downtown Tulsa railroad tracks at blue hour.",
    credit: "Original AI-assisted editorial illustration",
    license: "Project-owned development artwork",
    productionApproved: false,
  },
  cloud: {
    id: "cloud",
    src: "/images/editorial/artificial-cloud-study.png",
    alt: "Weathered monumental steel public art against the Tulsa sky.",
    credit: "Original AI-assisted editorial illustration",
    license: "Project-owned development artwork",
    productionApproved: false,
  },
  orbit: {
    id: "orbit",
    src: "/images/editorial/tulsa-arts-district-orbit.png",
    alt: "Editorial illustration of a green public space, brick cultural buildings and Art Deco towers in downtown Tulsa.",
    credit: "Original AI-assisted editorial illustration",
    license: "Project-owned development artwork",
    productionApproved: false,
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
