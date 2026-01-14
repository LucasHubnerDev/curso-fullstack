class Cpf {
  static validar(cpf) {
    if (!cpf) return false

    if (cpf.length !== 11) return false

    // impede CPFs com todos os dígitos iguais
    if ([...cpf].every(n => n === cpf[0])) return false

    const numeros = [...cpf].map(Number)

    const dv1 = numeros[9]
    const dv2 = numeros[10]

    const calcDv1 = this.calcularDigito(numeros.slice(0, 9))
    const calcDv2 = this.calcularDigito(numeros.slice(0, 9).concat(calcDv1))

    return dv1 === calcDv1 && dv2 === calcDv2
  }

  static calcularDigito(numeros) {
    let multiplicador = numeros.length + 1

    const soma = numeros.reduce((acc, n) => {
      acc += n * multiplicador--
      return acc
    }, 0)

    const resto = soma % 11
    return resto < 2 ? 0 : 11 - resto
  }
}
