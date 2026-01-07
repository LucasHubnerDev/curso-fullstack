const container = document.querySelector(".container")

const elementos = [
    {tag: 'p', texto:'hello friend'},
    {tag: 'div', texto:'hello friend'},
    {tag: 'footer', texto:'hello friend'},
    {tag: 'section', texto:'hello friend'}
]

// for of para percorrer diretamente as propriedades de cada índice
// usando atribuição por desestruturação
for(let {tag, texto} of elementos) {
    const element = document.createElement(tag)
    element.textContent = texto
    container.appendChild(element)
}