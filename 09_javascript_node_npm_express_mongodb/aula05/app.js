import path from 'node:path'
import { fileURLToPath } from 'node:url'

import write from './modules/write.js'
import read from './modules/read.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.resolve(__dirname, 'pessoas.json')

async function readFileAndRender(filePath) {
    try {
        const rawData = await read(filePath)
        const pessoas = JSON.parse(rawData)

        for (const { nome } of pessoas) {
            console.log(nome)
        }
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error('JSON inválido')
        } else {
            console.error('Erro ao ler o arquivo:', error.message)
        }
    }
}

readFileAndRender(filePath)
