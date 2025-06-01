import generate, { Tone } from './generate'
import save from './save'
import tones from './tones'

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
  const result = create(tones)
  output(result)
}

main()
