import { NoteDuration } from './types'

export const sampleRate = 44100
export const bpm = 180
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
