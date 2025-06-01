import { Tone } from './generate'
import save from './save'
import { bpm, NOTE, NoteDurationKeys, noteDurations } from './constants'

const getNoteDuration = (note: NoteDurationKeys, bpm: number): number => {
  const noteDurationNumber = noteDurations[note]
  const beatsPerMeasure = 4
  const bps = bpm / 60 // beats per second
  return (noteDurationNumber * beatsPerMeasure) / bps
}

const tones: Tone[] = []

const loops = 4
for (let i = 0; i < loops; i++) {
  let frequency = 200 // 20Hz, lower limit of human hearing
  const max = 20000 // 20kHz, upper limit of human hearing

  tones.push({
    amplitude: 0.75,
    duration: getNoteDuration(NOTE.EIGHTH, bpm),
    frequency,
  })

  tones.push({
    // rest
    amplitude: 0.0,
    duration: getNoteDuration(NOTE.EIGHTH, bpm),
    frequency,
  })

  tones.push({
    amplitude: 0.75,
    duration: getNoteDuration(NOTE.EIGHTH, bpm),
    frequency: (frequency * 2) / 3,
  })

  tones.push({
    // rest
    amplitude: 0.0,
    duration: getNoteDuration(NOTE.EIGHTH, bpm),
    frequency,
  })
}

const savePath = './out/tones.json'
save(savePath, JSON.stringify(tones, null, 2))

export default tones
