// document.write() -> comando do navegador
// document.write("escrito diretamente na página")
const btnSubmit = document.querySelector(".btn-submit")
const msg = document.querySelector("#msg")

const handleSubmit = () => {
    event.preventDefault();
    msg.textContent = "sua mensagem foi enviada"
}

btnSubmit.addEventListener("click", () => {
    handleSubmit();
})
