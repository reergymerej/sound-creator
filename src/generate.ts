import { env } from "./env"

export type Tone = {
  amplitude: number
  duration: number
  frequency: number
}

const generate = ({ amplitude, duration, frequency }: Tone): Buffer => {
  const totalSamples = Math.ceil(env.SAMPLE_RATE * duration)
  const buffer = Buffer.alloc(totalSamples * 2) // 2 bytes per sample (16-bit)
  for (let i = 0; i < totalSamples; i++) {
    const time = i / env.SAMPLE_RATE
    // actual generation
    const sample = Math.sin(2 * Math.PI * frequency * time)
    const scaledSample = Math.round(sample * amplitude * 32767) // scale to int16
    try {
      buffer.writeInt16LE(scaledSample, i * 2)
    } catch (error) {
      console.error(`Error at sample ${i}:`)
      console.log(`i: ${i}, sample: ${sample}, scaledSample: ${scaledSample}`)
      throw error
    }
  }
  return buffer
}

export default generate
