
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