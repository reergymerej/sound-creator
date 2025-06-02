import { NoteDuration } from './types'

export const noteDurations: { [key in NoteDuration]: number } = {
  '1': 1,
  '1/2': 0.5,
  '1/3': 1 / 3,
  '1/4': 0.25,
  '1/8': 0.125,
  '1/16': 0.0625,
  '1/32': 0.03125,
  '1/64': 0.015625,
}

export type NoteDurationKeys = keyof typeof noteDurations

export const NOTE: { [key: string]: NoteDuration } = {
  WHOLE: '1',
  HALF: '1/2',
  THIRD: '1/3',
  QUARTER: '1/4',
  EIGHTH: '1/8',
  SIXTEENTH: '1/16',
  THIRTY_SECOND: '1/32',
  SIXTY_FOURTH: '1/64',
}

export const ToneFrequency = {
  A: 440, // A4
  A_SHARP: 466.16, // A#4
  B_FLAT: 466.16, // Bb4
  B: 493.88, // B4
  C: 261.63, // C4
  C_SHARP: 277.18, // C#4
  D: 293.66, // D4
  D_SHARP: 311.13, // D#4
  E_FLAT: 311.13, // Eb4
  E: 329.63, // E4
  F: 349.23, // F4
  F_SHARP: 369.99, // F#4
  G: 392.00, // G4
  G_SHARP: 415.30, // G#4
} as const