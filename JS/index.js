
// EVENTO DE ANIMAÇÃO NO HEADER

let header = document.getElementById("header")

document.addEventListener("scroll", function() {
    if (window.pageYOffset > 0) {
        header.style.boxShadow = "3px 3px 3px rgba(0, 0, 0, 0.500)";
    } else if (window.pageYOffset == 0){
        header.style.boxShadow = "none"
    }
})
// --------------------------------------------------

// ANIMAÇÃO AO ESCROLLAR

window.revelar = ScrollReveal({
    reset: true
})

revelar.reveal('.esconder', {
    duration: 1000,
    distance: '30px'
})

revelar.reveal('.card_servicos', {
    duration: 1000,
    distance: '30px',
    delay: 100
})

revelar.reveal('.card1', {
    duration: 1000,
    distance: '30px',
    delay: 200
})

revelar.reveal('.card2', {
    duration: 1000,
    distance: '30px',
    delay: 300
})

revelar.reveal('.card3', {
    duration: 1000,
    distance: '30px',
    delay: 400
})

revelar.reveal('.imagem_inrea', {
    duration: 1000,
    distance: '30px',
    delay: 150
})

revelar.reveal('.card1_integrantes', {
    duration: 1000,
    distance: '30px',
    delay: 300
})

revelar.reveal('.card2_integrantes', {
    duration: 1000,
    distance: '30px',
    delay: 300
})
// -----------------------------------------------