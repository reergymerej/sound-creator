import { Tone } from './generate'
import save from './save'
import { NOTE, NoteDurationKeys, noteDurations, ToneFrequency } from './constants'
import { env } from './env'

const getNoteDuration = (() => {
  const cache = new Map<string, number>()
  const beatsPerMeasure = 4
  return (note: NoteDurationKeys, bpm: number): number => {
    const key = `${note}-${bpm}`
    if (cache.has(key)) {
      return cache.get(key)!
    }
    const bps = bpm / 60 // beats per second
    const noteDurationNumber = noteDurations[note]
    const result =  (noteDurationNumber * beatsPerMeasure) / bps
    cache.set(key, result)
    return result
  }
})()

const tones: Tone[] = []

const factory = (frequency: number, duration: number): Tone => ({
  amplitude: 0.75,
  duration,
  frequency,
})

// note should be one of the TONE constants

const factoryNote = (frequency: number, duration: number): Tone => ({
  amplitude: 0.75,
  duration,
  frequency,
})

const factoryRest = (duration: number): Tone => ({
  amplitude: 0.0,
  duration,
  frequency: 0,
})

const loops = 4
for (let i = 0; i < loops; i++) {
  let frequency = 200 // 20Hz, lower limit of human hearing
  const max = 20000 // 20kHz, upper limit of human hearing

  tones.push(
    factoryNote(ToneFrequency.A, getNoteDuration(NOTE.QUARTER, env.BPM))
  )
  tones.push(
    factoryNote(ToneFrequency.B, getNoteDuration(NOTE.QUARTER, env.BPM))
  )
  tones.push(
    factoryNote(ToneFrequency.C, getNoteDuration(NOTE.QUARTER, env.BPM))
  )
  tones.push(
    factoryNote(ToneFrequency.D, getNoteDuration(NOTE.QUARTER, env.BPM))
  )
  tones.push(
    factoryNote(ToneFrequency.E, getNoteDuration(NOTE.QUARTER, env.BPM))
  )
  tones.push(
    factoryNote(ToneFrequency.F, getNoteDuration(NOTE.QUARTER, env.BPM))
  )
  tones.push(
    factoryNote(ToneFrequency.G, getNoteDuration(NOTE.HALF, env.BPM))
  )
}

const savePath = './out/tones.json'
save(savePath, JSON.stringify(tones, null, 2))

export default tones
