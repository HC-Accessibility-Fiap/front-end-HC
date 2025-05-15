
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

window.revelar = ScrollReveal({
    reset: true
})

revelar.reveal('.esconder', {
    duration: 1000,
    distance: '50px'
})

revelar.reveal('.card_servicos', {
    duration: 1000,
    distance: '50px',
    delay: 100
})

revelar.reveal('.card1', {
    duration: 1000,
    distance: '50px',
    delay: 200
})

revelar.reveal('.card2', {
    duration: 1000,
    distance: '50px',
    delay: 300
})

revelar.reveal('.card3', {
    duration: 1000,
    distance: '50px',
    delay: 400
})

revelar.reveal('.imagem_inrea', {
    duration: 1000,
    distance: '50px',
    delay: 150
})