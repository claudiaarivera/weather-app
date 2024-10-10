import { UVIndexScale } from "../interfaces/uv-index-scale";

export const uvIndexScales: UVIndexScale[] = [
  {
    range: [0, 2],
    name: "Low",
    tip: "No protection needed. Safe to be outdoors.",
  },
  {
    range: [3, 5],
    name: "Moderate",
    tip: "Wear sunglasses, use SPF 30+ sunscreen, and seek shade around midday.",
  },
  {
    range: [6, 7],
    name: "High",
    tip: "Wear sunglasses, use SPF 30+ sunscreen, and seek shade around midday.",
  },
  {
    range: [8, 10],
    name: "Very High",
    tip: "Wear sunglasses, use SPF 30+ sunscreen, and seek shade around midday."
  },
  {
    range: [11],
    name: "Extreme",
    tip: "Use SPF 50+, stay indoors."
  }
]