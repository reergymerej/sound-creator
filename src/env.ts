import 'dotenv/config'

export type Env = {
    SAMPLE_RATE: number;
    BPM: number;
}

export const env: Env = {
  SAMPLE_RATE: parseInt(process.env.SAMPLE_RATE || '', 10) || 44100,
  BPM: parseInt(process.env.BPM || '', 10) || 120,
}
