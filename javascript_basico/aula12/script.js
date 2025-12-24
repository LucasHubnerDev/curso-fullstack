let a = "A"; // a -> b
let b = "B"; // b -> c
let c = "C"; // c -> a

// forma antiga de resolver
// const valor = a;
// a = b;
// b = c;
// c = valor

// forma atual
[a, b, c] = [b, c, a]

console.log(a, b, c)
