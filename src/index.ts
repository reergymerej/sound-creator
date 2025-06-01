import generate from './generate'
import save from './save'

type CreateResult = Buffer

const create = (): CreateResult => {
    return generate()
}

const output = (result: CreateResult) => {
    const savePath = './out/output.raw'
    console.log(`output to ${savePath}`)
    save(savePath, result)
}

const main = () => {
    const result = create()
    output(result)
}

main()