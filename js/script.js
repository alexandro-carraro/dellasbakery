// Inicializa o ScrollReveal com a opção de reset para as animações.
window.revelar = ScrollReveal({ reset: true });

// Configurações de revelação padrão para os elementos.
const revealOptions = {
    distance: '100%', // Distância que o elemento se moverá ao ser revelado.
    opacity: 0 // Opacidade inicial do elemento.
};

// Revela o botão "home" com duração de 1 segundo.
revelar.reveal('.footer-button-home', {
    duration: 1000,
    opacity: 0 // Começa invisível.
});

// Função para abrir o menu lateral.
function openNav() {
    document.getElementById("sidebar").style.width = "180px"; // Define a largura do menu lateral.
    document.getElementById("openbtn").style.display = "none"; // Oculta o botão de abrir menu.
}

// Função para fechar o menu lateral.
function closeNav() {
    document.getElementById("sidebar").style.width = "0"; // Reduz a largura do menu lateral a zero.
    document.getElementById("openbtn").style.display = ""; // Exibe novamente o botão de abrir menu.
}

// Revela a seção "slide container" com opções personalizadas.
revelar.reveal('.section-slide-container', {
    ...revealOptions, // Usa as opções definidas anteriormente.
    origin: 'right', // Vem do lado direito.
    duration: 3000 // Duração de 3 segundos.
});

// Revela o texto da descrição breve com origem à direita.
revelar.reveal('.brief-description-container-txt', {
    ...revealOptions,
    origin: 'right',
    duration: 4000 // Duração de 4 segundos.
});

// Revela o título da seção de produtos com origem à esquerda.
revelar.reveal('.section-products-container-title', {
    origin: 'left', // Vem do lado esquerdo.
    distance: '100%', // Distância que o elemento se moverá ao ser revelado.
    duration: 1000, // Duração de 1 segundo.
    opacity: 0 // Começa invisível.
});

// Revela os itens da grade de produtos com uma duração padrão.
revelar.reveal('.item1, .item2, .item3, .item4, .item5, .item6, .item7, .item8, .item9, .item10, .item11, .item12, .item13, .item14, .item15, .item16, .item17, .item18, .item19, .item20', {
    duration: 1000, // Duração de 1 segundo.
    opacity: 0 // Começa invisível.
});

// Função para abrir o WhatsApp com uma mensagem predefinida.
function openWhatsApp() {
    const telefone = '5547996144717'; // Número de telefone.
    const mensagem = 'Ol%C3%A1!%20Cheguei%20at%C3%A9%20aqui%20por%20meio%20do%20site,%20e%20gostaria%20de%20falar%20sobre%20os%20produtos!'; // Mensagem predefinida.
    const url = `https://wa.me/${telefone}?text=${mensagem}`; // Cria a URL para abrir o WhatsApp.
    window.open(url, '_blank'); // Abre o link em uma nova aba.
}

// Adiciona um evento quando o DOM é completamente carregado.
document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item img'); // Seleciona todas as imagens da grade.
    const overlay = document.getElementById('overlay'); // Seleciona o elemento de sobreposição.

    // Adiciona um evento de clique em cada imagem da grade.
    gridItems.forEach(img => {
        img.addEventListener('click', (event) => {
            event.stopPropagation(); // Impede a propagação do evento de clique.
            img.classList.toggle('enlarged'); // Adiciona ou remove a classe 'enlarged'.
            if (img.classList.contains('enlarged')) {
                overlay.style.display = 'block'; // Exibe a sobreposição.
                const rect = img.getBoundingClientRect(); // Obtém a posição da imagem na tela.
                window.scrollTo({
                    top: rect.top + window.pageYOffset - (window.innerHeight / 2) + (rect.height / 2), // Rola suavemente para a imagem centralizada.
                    behavior: 'smooth' // Efeito de rolagem suave.
                });
            } else {
                overlay.style.display = 'none'; // Oculta a sobreposição se a imagem não estiver ampliada.
            }
        });
    });

    // Adiciona um evento de clique no documento para fechar a sobreposição ao clicar fora da imagem.
    document.addEventListener('click', () => {
        gridItems.forEach(img => {
            img.classList.remove('enlarged'); // Remove a classe 'enlarged' de todas as imagens.
        });
        overlay.style.display = 'none'; // Oculta a sobreposição.
    });
});

// Adiciona um evento quando o DOM é completamente carregado para gerenciar a visibilidade do botão do WhatsApp.
document.addEventListener('DOMContentLoaded', function() {
    var whatsappButton = document.querySelector('.section-products-container-whathsapp'); // Seleciona o botão do WhatsApp.
    var targetItems = []; // Cria um array para armazenar os itens-alvo.
    
    // Adiciona os elementos da grade ao array.
    for (let i = 1; i <= 22; i++) {
        targetItems.push(document.querySelector('.grid-item.item' + i)); // Seleciona cada item da grade e adiciona ao array.
    }

    // Função para verificar a visibilidade dos itens na tela.
    function checkItemVisibility() {
        var windowHeight = window.innerHeight; // Obtém a altura da janela.
        var isVisible = false; // Inicializa a variável de visibilidade.

        targetItems.forEach(function(item) {
            if (item) {
                var itemRect = item.getBoundingClientRect(); // Obtém a posição do item na tela.
                // Verifica se o item está visível na tela.
                if (itemRect.top <= windowHeight && itemRect.bottom >= 0) {
                    isVisible = true; // Se está visível, define como verdadeiro.
                }
            }
        });

        // Altera a posição do botão do WhatsApp com base na visibilidade dos itens.
        whatsappButton.style.position = isVisible ? 'fixed' : 'static'; // Se visível, posição fixa; caso contrário, posição estática.
    }

    // Função para lidar com a visibilidade em dispositivos móveis.
    function handleVisibilityForMobile() {
        if (window.matchMedia("(max-width: 768px)").matches) { // Verifica se a largura da tela é menor ou igual a 768px.
            window.addEventListener('scroll', checkItemVisibility); // Adiciona o evento de scroll para verificar visibilidade.
            window.addEventListener('resize', checkItemVisibility); // Adiciona o evento de resize para verificar visibilidade.
            checkItemVisibility(); // Verifica a visibilidade inicialmente.
        } else {
            whatsappButton.style.position = 'static'; // Se não for mobile, define posição estática.
        }
    }

    handleVisibilityForMobile(); // Chama a função para lidar com a visibilidade ao carregar a página.
    window.addEventListener('resize', handleVisibilityForMobile); // Adiciona o evento de resize para lidar com a visibilidade.
});

// Adiciona um evento que executa a função quando o DOM está completamente carregado.
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão do WhatsApp na seção de produtos.
    var whatsappButton = document.querySelector('.section-products-container-whathsapp');
    var targetItems = []; // Cria um array para armazenar os itens-alvo.

    // Seleciona os itens da grade de produtos e os adiciona ao array.
    for (let i = 1; i <= 20; i++) {
        targetItems.push(document.querySelector('.grid-item.item' + i)); // Adiciona cada item ao array.
    }

    // Função para verificar a visibilidade dos itens na tela.
    function checkItemVisibility() {
        var windowHeight = window.innerHeight; // Obtém a altura da janela.
        var isVisible = false; // Inicializa a variável de visibilidade.

        // Verifica a posição de cada item-alvo.
        targetItems.forEach(function(item) {
            if (item) {
                var itemRect = item.getBoundingClientRect(); // Obtém a posição do item.
                // Verifica se o item está visível na tela.
                if (itemRect.top <= windowHeight && itemRect.bottom >= 0) {
                    isVisible = true; // Se está visível, define como verdadeiro.
                }
            }
        });

        // Altera a posição do botão do WhatsApp com base na visibilidade dos itens.
        whatsappButton.style.position = isVisible ? 'fixed' : 'static'; // Se visível, posição fixa; caso contrário, posição estática.
    }

    // Adiciona eventos de scroll e resize para verificar a visibilidade.
    window.addEventListener('scroll', checkItemVisibility);
    window.addEventListener('resize', checkItemVisibility);
    checkItemVisibility(); // Chama a função inicialmente.
});

// Revela a descrição breve com opções personalizadas.
revelar.reveal('.brief-description-container-txt-2', {
    ...revealOptions, // Usa as opções definidas anteriormente.
    distance: '0%', // Não se move ao ser revelado.
    origin: 'top', // Vem de cima.
    duration: 5000 // Duração de 5 segundos.
});

// Função para abrir a galeria de imagens com base na categoria selecionada.
function openGallery(category) {
    const galleryModal = document.getElementById('galleryModal'); // Seleciona o modal da galeria.
    const galleryContent = document.getElementById('galleryContent'); // Seleciona a área de conteúdo da galeria.
    galleryContent.innerHTML = ''; // Limpa o conteúdo anterior.

    // Define as imagens de cada categoria.
    const images = {
        'bolosCaseiros': ['bolo-cenoura.png', 'bolo-chocolate.png', 'bolo-coco.png', 'bolo-docedeleite.png', 'bolo-doisamores.png', 'bolo-formigueiro.png', 'bolo-leiteninho.png', 'bolo-limao.png'],
        'sobremesas': ['bombom-morango.jpg', 'bombom-uva.png', 'mousse-maracuja.png', 'pave-limao.png', 'pudim-deleite.png', 'torta-abacaxi.png', 'torta-bolacha.png'],
        'miniCakeDonuts': ['lembrancinha-donuts.png', 'cento-donuts.png', '12minicake-donuts.png', '24minicake-donuts.png', 'caixa-36donuts.png', 'mini-donuts1.png', 'mini-donuts2.png', 'mini-donuts3.png', 'mini-donuts4.png'],
        'boloDeFesta': ['bolo-festa.png', 'bolo-festa2.png', 'bolo-festa3.png', 'bolo-festa4.png', 'bolo-festa5.png', 'bolo-festa6.png'],
        'boloGourmet': ['bolo-gourmet.png', 'bolo-gourmet1.png', 'bolo-gourmet2.png', 'bolo-gourmet3.png', 'bolo-gourmet4.png', 'bolo-gourmet5.png']
    };

    // Cria e adiciona as imagens da categoria selecionada à galeria.
    images[category].forEach(src => {
        const img = document.createElement('img'); // Cria um novo elemento de imagem.
        img.src = `../assets/products/${src}`; // Define a fonte da imagem.
        galleryContent.appendChild(img); // Adiciona a imagem ao conteúdo da galeria.
    });

    // Exibe o modal da galeria e oculta a rolagem do corpo.
    galleryModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Função para fechar a galeria.
function closeGallery() {
    const galleryModal = document.getElementById('galleryModal'); // Seleciona o modal da galeria.
    galleryModal.style.display = 'none'; // Oculta o modal da galeria.
    document.body.style.overflow = ''; // Restaura a rolagem do corpo.
}

// Revela as colunas da galeria com opções personalizadas.
revelar.reveal('.gallery-column', {
    ...revealOptions, // Usa as opções definidas anteriormente.
    origin: 'top', // Vem de cima.
    distance: '0%', // Não se move ao ser revelado.
    duration: 2000, // Duração de 2 segundos.
    opacity: 0 // Começa invisível.
});

// Função que verifica se a tela é de um dispositivo móvel.
const isMobile = () => window.innerWidth <= 700;

// Adiciona um evento que executa a função quando o DOM está completamente carregado.
document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.gallery-item img'); // Seleciona todas as imagens da galeria.
    const overlays = document.querySelectorAll('.gallery-item .overlay'); // Seleciona todos os overlays das galeria.

    // Função que lida com a visibilidade dos overlays.
    const handleOverlay = (entries, observer) => {
        entries.forEach(entry => {
            const overlay = entry.target.nextElementSibling; // Seleciona o overlay seguinte ao item observado.
            // Verifica se o item está visível na tela.
            if (entry.isIntersecting) {
                overlay.style.opacity = '1'; // Torna o overlay visível.
            } else {
                overlay.style.opacity = '0'; // Torna o overlay invisível.
            }
        });
    };

    // Se o dispositivo for móvel, usa um Intersection Observer para controlar a visibilidade dos overlays.
    if (isMobile()) {
        const observer = new IntersectionObserver(handleOverlay, { threshold: 1.0 }); // Cria um novo observador.
        gridItems.forEach(item => {
            observer.observe(item); // Observa cada item da galeria.
        });
    } else {
        // Se não for móvel, adiciona eventos de mouse para mostrar e ocultar o overlay.
        gridItems.forEach((item, index) => {
            const overlay = overlays[index]; // Seleciona o overlay correspondente ao item.
            item.addEventListener('mouseenter', () => {
                overlay.style.opacity = '1'; // Torna o overlay visível ao passar o mouse.
            });
            item.addEventListener('mouseleave', () => {
                overlay.style.opacity = '0'; // Torna o overlay invisível ao remover o mouse.
            });
        });
    }
});

// Adiciona um evento que executa a função quando o DOM está completamente carregado.
document.addEventListener("DOMContentLoaded", function() {
    // Função para verificar a visibilidade do overlay do mapa de contato.
    function checkOverlay() {
        const overlay = document.querySelector('.section-contact-container-map .overlay'); // Seleciona o overlay do mapa.
        const mapImage = document.querySelector('.section-contact-container-map .map-image'); // Seleciona a imagem do mapa.
        
        // Verifica se a largura da tela é menor ou igual a 700px.
        if (window.innerWidth <= 700) {
            const rect = mapImage.getBoundingClientRect(); // Obtém a posição da imagem do mapa.
            const windowHeight = window.innerHeight; // Obtém a altura da janela.
            const imageMiddle = rect.top + rect.height / 2; // Calcula a posição vertical do meio da imagem.
            
            // Verifica se a imagem está centralizada na tela.
            if (imageMiddle >= windowHeight / 2 - 50 && imageMiddle <= windowHeight / 2 + 50) {
                overlay.classList.add('active'); // Adiciona a classe 'active' ao overlay se a imagem estiver centralizada.
            } else {
                overlay.classList.remove('active'); // Remove a classe 'active' caso contrário.
            }
        } else {
            overlay.classList.remove('active'); // Remove a classe 'active' se a tela for maior que 700px.
        }
    }

    // Adiciona eventos de scroll e resize para verificar a visibilidade do overlay.
    window.addEventListener('scroll', checkOverlay);
    window.addEventListener('resize', checkOverlay);
    checkOverlay(); // Chama a função inicialmente.
});

