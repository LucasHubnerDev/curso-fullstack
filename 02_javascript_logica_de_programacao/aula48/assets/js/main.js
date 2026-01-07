const btnAddTask = document.querySelector("#btn-add-task")
const listTasks = document.querySelector("#list-tasks")
const inputDescriptionTask = document.querySelector("#input-description-task")

let tasks = []

const addTask = () => {
    const description = inputDescriptionTask.value.trim()
    if (!description) return
    // Date.now (retorna o timestamp atual, quantos segundos se passaram desde 01/01/1970)
    tasks.push({
        id: Date.now(),
        text: description
    })

    inputDescriptionTask.value = ""
    inputDescriptionTask.focus()

    saveTasks()
    renderTasks()
}

const renderTasks = () => {
    listTasks.innerHTML = ""

    tasks.forEach(task => {
        const li = document.createElement("li")
        li.className = "list-group-item d-flex justify-content-between"
        li.dataset.id = task.id

        const span = document.createElement("span")
        span.textContent = task.text

        const button = document.createElement("button")
        button.className = "btn btn-outline-danger btn-delete-task"

        const icon = document.createElement("i")
        icon.className = "bi bi-x-circle"

        button.appendChild(icon)
        li.append(span, button)

        listTasks.appendChild(li)
    })

}

document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-delete-task")
    if (!btn) return

    const li = btn.closest("li")
    const id = Number(li.dataset.id)

    tasks = tasks.filter(task => task.id !== id)

    saveTasks()
    renderTasks()
})

const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

const loadTasks = () => {
    const data = localStorage.getItem("tasks")
    tasks = data ? JSON.parse(data) : []
    renderTasks()
}

inputDescriptionTask.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask()
})

btnAddTask.addEventListener("click", addTask)

loadTasks()
