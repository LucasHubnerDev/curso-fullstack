const toggleSenha = document.getElementById("toggleSenha");
const senhaInput = document.getElementById("senha");
const iconeOlho = document.getElementById("iconeOlho");

toggleSenha.addEventListener("click", () => {
    const isPassword = senhaInput.type === "password";

    // alterna tipo do input
    senhaInput.type = isPassword ? "text" : "password";

    // alterna ícone
    iconeOlho.classList.toggle("bi-eye");
    iconeOlho.classList.toggle("bi-eye-slash");
});