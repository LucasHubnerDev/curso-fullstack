// const div = document.querySelector(".paragrafos")
// const body = document.querySelector("body")

// criando uma nodeList, parecido com array, só que de elementos html
// const ps = div.querySelectorAll("p") 
// métodos e propriedades aplicáveis em arrays também funciona em NodeList
// console.log(ps, ps.length)

// pegando todos os estilos computados no body
// getComputedStyle é uma função do navegador que retornar os estilos que realmente estão sendo aplicados ao elemento
// const estilosBody = getComputedStyle(document.body);
// console.log(estilosBody)
// const bgBody = estilosBody.backgroundColor


// for( let p of ps) {
//     p.style.backgroundColor = bgBody
// }

// FORMA MAIS MODERNA

// capturando as tag p
const paragrafos = document.querySelectorAll(".paragrafos p");

// desestruturando o objeto retornado pelo método getComputedStyle(elemento)
const { backgroundColor } = getComputedStyle(document.body);

// percorrendo a NodeList capturada
paragrafos.forEach(p => {

    // aplicando estilo nos elementos da NodeList capturada
    p.style.backgroundColor = backgroundColor;
});
