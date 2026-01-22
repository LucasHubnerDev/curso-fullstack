import { readFile } from "fs/promises"

const ler = (diretorio) => readFile(diretorio, 'utf-8')

export default ler