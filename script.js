// codigo para acionar alert quando o form for enviado completo
document.getElementById('formContato')?.addEventListener('submit', function(e){
   e.preventDefault();
   alert("Mensagem enviada com sucesso! (simulação)");
   this.reset(); 
});

// Carrossel animacao

let currentIndex = 0;
const carrosselImagens = document.querySelector('.carrossel-images');
const totalImagens = document.querySelectorAll('.carrossel-images img').length;

document.querySelector('.next')?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImagens;
    updateCarousel();
});

document.querySelector('.prev')?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImagens) % totalImagens;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carrosselImagens.style.transform = `translateX(${offset}%)`;
}
