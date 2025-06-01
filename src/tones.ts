import { Tone } from './generate'
import save from './save'

const tones: Tone[] = []

let frequency = 20 // 20Hz, lower limit of human hearing
const max = 20000 // 20kHz, upper limit of human hearing

const duration = 0.2

while (frequency < max) {
  console.log(frequency)
  tones.push({
    amplitude: 0.25,
    duration,
    frequency,
  })
  frequency *= 2
}

tones.push({
  amplitude: 0.25,
  duration,
  frequency: max,
})

const savePath = './out/tones.json'
save(savePath, JSON.stringify(tones, null, 2))

export default tones
