function rand(min = 500, max = 1000) {
    return Math.floor(Math.random() * (max - min) + min)
}

function f1(callback) {
    setTimeout(() => {
        console.log("f1")
        if (callback) callback();
    }, rand())
}

function f2(callback) {
    setTimeout(() => {
        console.log("f2")
        if (callback) callback();
    }, rand())
}

function f3(callback) {
    setTimeout(() => {
        console.log("f3")
        if (callback) callback();
    }, rand())
}

// exemplo de callback
// f1(() => f2(() => f3()))

// exemplo de callback
f1(f1Callback)

function f1Callback() {
    f2(f2Callback)
}

function f2Callback() {
    f3(f3Callback)
}

function f3Callback() {
    console.log("hello friend")
}