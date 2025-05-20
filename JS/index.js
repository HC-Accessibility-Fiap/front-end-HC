// HAMBURGUER

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Fechar menu ao clicar nos links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});

//------------------------------------------------

// EVENTO DE ANIMAÇÃO NO HEADER

let header = document.getElementById("header")

document.addEventListener("scroll", function() {
    if (window.pageYOffset > 0) {
        header.style.boxShadow = "3px 3px 3px rgba(0, 0, 0, 0.22)";
    } else if (window.pageYOffset == 0){
        header.style.boxShadow = "none"
    }
})
// --------------------------------------------------

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
    if (input_email.value.length == 0) {
        label_email.setAttribute("class", "form-label")
        label_email.innerHTML = "E-mail"
    } else if (input_email.value.length < 6) {
        label_email.setAttribute("class", "change-color")
        label_email.innerHTML = `
        <label>E-mail Inválido <span class="material-symbols-outlined">
        warning
        </span> 
        </label> 
        `
    } else {
        label_email.innerHTML = `<label>E-mail Válido <span class="material-symbols-outlined">
        check
        </span></label>` 
        label_email.setAttribute("class", "change-color-2")
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

// --------------------------------------------------

//FAQ

document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade do acordeão
    const perguntasFaq = document.querySelectorAll('.pergunta-faq');
    
    perguntasFaq.forEach(pergunta => {
        pergunta.addEventListener('click', () => {
            const item = pergunta.parentElement;
            const resposta = pergunta.nextElementSibling;
            const icone = pergunta.querySelector('i');
            
            // Fecha todos os outros itens
            document.querySelectorAll('.item-faq').forEach(outroItem => {
                if (outroItem !== item) {
                    outroItem.classList.remove('ativo');
                    outroItem.querySelector('.resposta-faq').style.maxHeight = '0';
                    outroItem.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });
            
            // Alterna o item atual
            item.classList.toggle('ativo');
            
            if (item.classList.contains('ativo')) {
                resposta.style.maxHeight = resposta.scrollHeight + 'px';
                icone.style.transform = 'rotate(180deg)';
            } else {
                resposta.style.maxHeight = '0';
                icone.style.transform = 'rotate(0deg)';
            }
        });
    });
    
    // Funcionalidade de busca
    const campoBusca = document.getElementById('busca-faq');
    
    if (campoBusca) {
        campoBusca.addEventListener('keyup', function() {
            const termoBusca = this.value.toLowerCase();
            const perguntas = document.querySelectorAll('.pergunta-faq span:first-child');
            
            perguntas.forEach(pergunta => {
                const textoPergunta = pergunta.textContent.toLowerCase();
                const itemFaq = pergunta.closest('.item-faq');
                
                if (textoPergunta.includes(termoBusca)) {
                    itemFaq.style.display = '';
                } else {
                    itemFaq.style.display = 'none';
                }
            });
        });
    }
    
    // Inicializa o primeiro item como ativo
    const primeiroItemFaq = document.querySelector('.item-faq');
    if (primeiroItemFaq) {
        primeiroItemFaq.classList.add('ativo');
        const primeiraResposta = primeiroItemFaq.querySelector('.resposta-faq');
        primeiraResposta.style.maxHeight = primeiraResposta.scrollHeight + 'px';
    }
});