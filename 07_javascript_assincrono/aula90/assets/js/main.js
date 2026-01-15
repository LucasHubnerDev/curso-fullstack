document.addEventListener("click", (e) => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === "a") {
        e.preventDefault();
        loadPage(el);
    }
})

const loadPage = async (el) => {
    const href = el.getAttribute("href");

    try {
        const response = await fetch(href)
        const html = await response.text()
        loadResult(html)
    } catch (error) {
        console.log(error)
    }
}

const loadResult = (html) => {
    const div = document.querySelector("#resultado")
    div.innerHTML = html
}