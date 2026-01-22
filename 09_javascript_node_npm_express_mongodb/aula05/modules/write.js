import * as fs from 'node:fs/promises'

const write = (diretorio, conteudo) => {
    fs.writeFile(diretorio, conteudo, { flag: 'w' })
}

export default write

