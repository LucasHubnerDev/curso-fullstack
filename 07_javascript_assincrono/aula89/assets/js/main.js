const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener("load", () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })

}

document.addEventListener("click", (e) => {
    const elemento = e.target
    const tag = elemento.tagName.toLowerCase();

    if (tag === "a") {
        e.preventDefault()
        loadPage(elemento)
    }
})

const loadPage = async(elemento) => {
    const obj = {
        method: "GET",
        url: elemento.getAttribute('href')
    }

    try {
        const response = await request(obj)
        loadResult(response)
    } catch (error) {
        console.log(error)
    }
}

const loadResult = (response) => {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = response
}
