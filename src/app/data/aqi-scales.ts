import { AqiScale } from "../interfaces/aqi-scale.interface";

export const aqiScales:AqiScale[] = [
  { range: [0, 50], description: 'Good', icon: 'smile', emoji: '😊' },
  { range: [51, 100], description: 'Moderate', icon: 'meh', emoji: '😐' },
  { range: [101, 150], description: 'Unhealthy for Sensitive Groups', icon: 'frown', emoji: '🙁' },
  { range: [151, 200], description: 'Unhealthy', icon: 'skull', emoji: '😷' },
  { range: [201, 300], description: 'Very Unhealthy', icon: 'skull', emoji: '☠️' },
  { range: [301, 500], description: 'Hazardous', icon: 'skull', emoji: '☠️' },
];