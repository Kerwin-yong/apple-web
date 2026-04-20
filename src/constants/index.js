import {
  highlightFirstVideo,
  highlightForthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Meet A19 Pro.",
      "Breakthrough battery life",
      "Vapour cooled for lightning-fast performance",  
    ],
    video: highlightSecondVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Ceramic Shield. Solid as ever.", "Tumble tested. Reality ready.", "Go ahead, let it clink. It can take it."],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 3,
    textLists: [
      "iPhone 17 Pro has the",
      "best ever battery life, ",
      "up to 3 more hours per full charge",
    ],
    video: highlightForthVideo,
    videoDuration: 4,
  },
  {
    id: 4,
    textLists: ["18MP Center Stage front camera.", "It's a total frame changer."],
    video: highlightThirdVideo,
    videoDuration: 4,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 17 Pro in Cosmic Orange",
    color: ["#E8732A", "#F1A37E", "#42261F"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 17 Pro in Deep Blue",
    color: ["#353D45", "#515C67", "#1D2126"],
    img: yellowImg,
  },
  {
    id: 3,
    title: "iPhone 17 Pro in Bright Silver",
    color: ["#E2E4E5", "#F5F5F7", "#494B4D"],
    img: yellowImg,
  },
];

export const sizes = [
  { label: '6.3"', value: "small" },
  { label: '6.9"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales and Redunds",
  "Legal",
  "Site Map",
];