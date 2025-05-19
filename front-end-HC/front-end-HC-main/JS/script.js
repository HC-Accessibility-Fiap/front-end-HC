/* SCRIPT FORMS */

const input_nome = document.getElementById("input-nome");
const input_email = document.getElementById("input-email")
const input_senha = document.getElementById("input-senha");

const label_nome = document.getElementById("label-nome");
const label_email = document.getElementById("label-email");
const label_senha = document.getElementById("label-senha");

const botao = document.getElementById("botao")

const cadastrado = document.getElementById("usuario-cadastrado")

const usuarios = []

input_nome.addEventListener("keyup", trocaNome);
input_senha.addEventListener("keyup", trocaSenha);
input_email.addEventListener("keyup", trocaEmail)
botao.addEventListener("click", cadastrarUsuario)


function cadastrarUsuario() {
    cadastrado.innerHTML = `
    ${input_nome.value},  você foi cadastrado (a) com sucesso! <br>
    Em breve receberá mais novidades sobre nosso projeto!
    `

    input_nome.value = "";
    trocaNome()
    input_email.value = "";
    trocaSobrenome()
    input_senha.value = "";
    trocaSenha()

}


function trocaNome() {
    if (input_nome.value.length == 0) {
        label_nome.setAttribute("class", "form-label")
        label_nome.innerHTML = "Nome"
    } else if (input_nome.value.length < 10) {
        label_nome.setAttribute("class", "change-color")
        label_nome.innerHTML = `
        <label>Nome Inválido <span class="material-symbols-outlined">
        warning
        </span> 
        </label> 
        `
    } else {
        label_nome.innerHTML = `<label>Nome Válido <span class="material-symbols-outlined">
        check
        </span></label>` 
        label_nome.setAttribute("class", "change-color-2")
    }
}

function trocaEmail() {
    const email = input_email.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
        // Campo vazio
        label_email.className = "form-label";
        label_email.textContent = "E-mail";
    } else if (!emailRegex.test(email)) {
        // E-mail inválido
        label_email.className = "change-color";
        label_email.innerHTML = `
        <label>Formato inválido <span class="material-symbols-outlined">
        warning</span></label>`;
    } else {
        // E-mail válido
        label_email.className = "change-color-2";
        label_email.innerHTML = `
        <label>E-mail válido <span class="material-symbols-outlined">
        check</span></label>`;
    }
}

function trocaSenha() {
    if (input_senha.value.length == 0) {
        label_senha.setAttribute("class", "form-label")
        label_senha.innerHTML = "Senha"
    }
    else if (input_senha.value.length < 6) {
        label_senha.setAttribute("class", "change-color")
        label_senha.innerHTML =  `<label>Senha inválida<span class="material-symbols-outlined">
        warning
        </span> 
        </label> 
        `
    } else {
        label_senha.innerHTML = `<label>Senha válida<span class="material-symbols-outlined">
        check
        </span></label>` 
        label_senha.setAttribute("class", "change-color-2")
    }
}