// Seletor para o checkbox de ativação do menu hamburguer
const navToggle = document.getElementById("nav-toggle");

// Seletor para o slider
const slider = document.querySelector(".similar-slider-area");

// Seletor para o menu
const navbarMenu = document.querySelector(".navbar-menu");

// Seletor para o slider
const slider1 = document.querySelector(".slider-inner");

// Seletor para os botões de navegação
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Variável para rastrear o índice atual do slide
let currentIndex = 0;

// Função para ajustar a margem superior do slider quando o menu é ativado/desativado
function ajustarMargemSlider() {
    if (navToggle.checked) {
        // Obtém a altura do menu
        const menuHeight = navbarMenu.offsetHeight;
        // Define a margem superior do slider para acomodar o menu
        slider.style.marginTop = menuHeight + "px";
        // Adiciona a classe 'active' ao menu para ativá-lo
        navbarMenu.classList.add("active");
    } else {
        slider.style.marginTop = "0";
        // Remove a classe 'active' do menu para desativá-lo
        navbarMenu.classList.remove("active");
    }
}
// Função para mover para o próximo slide
function nextSlide() {
    currentIndex++;
    if (currentIndex >= slider1.children.length) {
        currentIndex = 0;
    }
    goToSlide(currentIndex);
}

// Função para mover para o slide anterior
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slider1.children.length - 1;
    }
    goToSlide(currentIndex);
}

// Função para navegar até um slide específico
function goToSlide(index) {
    slider1.style.transform = `translateX(-${index * 100}%)`;
}

// Adicione um ouvinte de eventos para detectar alterações no estado do checkbox
navToggle.addEventListener("change", ajustarMargemSlider);

// Adicione ouvintes de eventos para os botões de navegação
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Chame a função para definir a margem inicialmente com base no estado inicial do checkbox
ajustarMargemSlider();

// Adicione um ouvinte de eventos para detectar alterações no estado do checkbox
navToggle.addEventListener("change", ajustarMargemSlider);

// Chame a função para definir a margem inicialmente com base no estado inicial do checkbox
ajustarMargemSlider();
