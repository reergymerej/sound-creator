import generate, { Tone } from './generate'
import save from './save'

type CreateResult = Buffer

const create = (tones: Tone[]): CreateResult => {
  const buffers = tones.map((tone) => generate(tone))
  return Buffer.concat(buffers)
}

const output = (result: CreateResult) => {
  const savePath = './out/output.raw'
  console.log(`output to ${savePath}`)
  save(savePath, result)
}

const main = () => {
  const buffer = Buffer.alloc(0)

  const tones: Tone[] = [
    {
      amplitude: 0.5,
      duration: 0.125,
      frequency: 440,
    },
    {
      amplitude: 0.5,
      duration: 0.25,
      frequency: 880,
    },
    {
      amplitude: 0.25,
      duration: 0.25,
      frequency: 880 * 2,
    },
  ]

  const result = create(tones)
  output(result)
}

main()
