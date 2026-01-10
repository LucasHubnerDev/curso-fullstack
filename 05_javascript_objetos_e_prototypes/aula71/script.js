// Object.defineProperty() e Object.defineProperties()
// métodos para configurar propriedades

function Product(name, price, stock) {
    // propriedades declaradas com this se tornam publicas (acesso externo)
    // this.name = name;
    // this.price = price;
    // this.stock = stock;

    // enumerable, onde eu defino se a chave da propriedade pode ser exibida (iterável)
    // value, onde eu passo o valor da propriedade, posso passar qualquer coisa
    // writable, onde eu defino se o valor pode ser alterado
    // configurable, onde eu defino se posso reconfigurar a propriedade e deleta-la
    const propriedades = {
        name: {
            enumerable: true,
            writable: false,
            value: name,
            configurable: false
        },
        price: {
            enumerable: true,
            writable: true,
            value: price,
            configurable: false
        },
    }

    const configs = {
        enumerable: true, // pode mostrar a chave?
        value: stock, // qual o valor?
        writable: false, // pode alterar?
        configurable: true // posso modificar todas as configurações anteriores posteriormente?
    }

    // definePropery, para definir somente uma propriedade
    // primeiro argumento é o objeto
    // segundo argumento é a key da propriedade
    // o terceito argumento é um objeto com as configurações
    Object.defineProperty(this, "stock", configs)

    // defineProperties, para definir várias propriedadas
    // eu passo as configurações diretamente nas propriedades
    Object.defineProperties(this, propriedades)
}

const p1 = new Product("camisa", 20.60, 20)
// Object.keys me retorna um array com as chaves iteráveis
console.log(Object.keys(p1))