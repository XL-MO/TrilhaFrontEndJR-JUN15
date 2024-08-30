// Inicializa o Swiper
document.addEventListener('DOMContentLoaded', function () {
    // O código dentro deste bloco é executado quando o DOM estiver completamente carregado
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // Número de slides a serem exibidos ao mesmo tempo
        spaceBetween: 10, // Espaço entre os slides
        navigation: {
            nextEl: '.swiper-button-next', // Seletor para o botão de navegação "próximo"
            prevEl: '.swiper-button-prev', // Seletor para o botão de navegação "anterior"
        },
        pagination: {
            el: '.swiper-pagination', // Seletor para a paginação dos slides
            clickable: true, // Permite que a paginação seja clicável
        },
        breakpoints: {
            // Ajusta o número de slides e o espaço entre eles em diferentes larguras de tela
            640: {
                slidesPerView: 2, // Exibe 2 slides ao mesmo tempo para telas com largura mínima de 640px
                spaceBetween: 20, // Espaço de 20px entre os slides
            },
            768: {
                slidesPerView: 3, // Exibe 3 slides ao mesmo tempo para telas com largura mínima de 768px
                spaceBetween: 30, // Espaço de 30px entre os slides
            },
        },
    });
});

// Adiciona a classe 'show' quando o elemento entra na área visível
document.addEventListener('scroll', function () {
    // Seleciona todos os elementos com a classe 'content-container'
    let containers = document.querySelectorAll('.content-container');
    containers.forEach(container => {
        // Verifica se o topo do elemento está dentro da área visível da janela
        if (container.getBoundingClientRect().top < window.innerHeight) {
            // Adiciona a classe 'show' ao elemento para aplicar efeitos de animação ou estilo
            container.classList.add('show');
        }
    });
});
