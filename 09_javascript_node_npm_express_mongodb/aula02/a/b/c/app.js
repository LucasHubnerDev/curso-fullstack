const path = require("path")

// __dirname mostra o diretório absoluto
// __filename mostra o diretório + o arquivo atual
// console.log(__dirname)
// console.log(__filename)

// resolve é um método de path usado para calcular o caminho absoluto de um caminho relativo
// posso ir passando instruções de navegação que ele vai lidar automaticamente com o sistema de arquivos
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'))