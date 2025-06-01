import fs from 'fs'

const save = (path: string, value: Buffer | string) => {
  return fs.writeFileSync(path, value)
}
export default save
