import fs from 'fs'

const save = (path: string, buffer: Buffer) => {
  return fs.writeFileSync(path, buffer)
}
export default save