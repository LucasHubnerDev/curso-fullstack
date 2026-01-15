// fetch("pessoas.json")
//   .then(response => {
//     return response.json()
//   })
//   .then(json => loadElementOnPage(json))
//   .catch(err => {
//     console.log(err)
//   })

axios("pessoas.json")
.then((response) => loadElementOnPage(response.data))

const loadElementOnPage = (pessoas) => {
  const div = document.querySelector("#consulta")
  const table = document.createElement("table")
  for (let pessoa of pessoas) {
    const tr = document.createElement("tr")
    Object.keys(pessoa).forEach((key) => {
      const td = document.createElement("td")
      td.textContent = pessoa[key]
      tr.appendChild(td)
    })
    table.appendChild(tr)
  }
  div.appendChild(table)
}