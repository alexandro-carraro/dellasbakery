///////////////////////////// FUNÇÕES GLOBAIS ///////////////////////////////

// Inicializa o ScrollReveal para animações de rolagem
window.revelar = ScrollReveal({ reset: true });

// Configura as opções padrão para animações de revelação
const revealOptions = {
    distance: '100%', // Distância de deslocamento dos elementos
    opacity: 0       // Opacidade inicial dos elementos
};

// Revela o botão do footer com uma animação padrão
revelar.reveal('.footer-button-home', {
    duration: 1000, // Duração da animação em milissegundos
    opacity: 0      // Opacidade inicial
});

// Função para abrir a barra lateral
function openNav() {
    document.getElementById("sidebar").style.width = "180px";  // Define a largura da barra lateral
    document.getElementById("openbtn").style.display = "none"; // Oculta o botão de abrir
}

// Função para fechar a barra lateral
function closeNav() {
    document.getElementById("sidebar").style.width = "0";      // Define a largura da barra lateral como 0
    document.getElementById("openbtn").style.display = "";    // Exibe o botão de abrir
}

///////////////////////////// FUNÇÕES INDEX ///////////////////////////////

// Revela a seção do slide com animação da direita
revelar.reveal('.section-slide-container', {
    ...revealOptions,
    origin: 'right',  // Origem do efeito de revelação
    duration: 3000    // Duração da animação em milissegundos
});

// Revela o texto da descrição com animação da direita
revelar.reveal('.brief-description-container-txt', {
    ...revealOptions,
    origin: 'right',  // Origem do efeito de revelação
    duration: 5000    // Duração da animação em milissegundos
});

// Revela o título da seção de produtos com animação da esquerda
revelar.reveal('.section-products-container-title', {
    origin: 'left',   // Origem do efeito de revelação
    distance: '100%', // Distância de deslocamento
    duration: 1000,  // Duração da animação em milissegundos
    opacity: 0       // Opacidade inicial
});

// Revela os itens da grade com uma animação padrão
revelar.reveal('.item1, .item2, .item3, .item4, .item5, .item6, .item7, .item8, .item9, .item10, .item11, .item12, .item13, .item14, .item15, .item16, .item17, .item18, .item19, .item20', {
    duration: 1000, // Duração da animação em milissegundos
    opacity: 0      // Opacidade inicial
});

// Função para abrir o WhatsApp com uma mensagem predefinida
function openWhatsApp() {
    const telefone = '5547996144717'; // Número de telefone
    const mensagem = 'Ol%C3%A1!%20Cheguei%20at%C3%A9%20aqui%20por%20meio%20do%20site,%20e%20gostaria%20de%20falar%20sobre%20os%20produtos!'; // Mensagem codificada
    const url = `https://wa.me/${telefone}?text=${mensagem}`; // URL para abrir o WhatsApp
    window.open(url, '_blank'); // Abre a URL em uma nova aba
}

// Adiciona eventos de clique para as imagens da grade e o overlay
document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item img'); // Seleciona todas as imagens na grade
    const overlay = document.getElementById('overlay'); // Seleciona o overlay

    // Adiciona eventos de clique nas imagens da grade
    gridItems.forEach(img => {
        img.addEventListener('click', (event) => {
            event.stopPropagation(); // Impede que o clique na imagem feche a expansão

            // Adiciona ou remove a classe que aumenta a imagem
            img.classList.toggle('enlarged');

            // Exibe ou oculta o overlay com base na classe da imagem
            if (img.classList.contains('enlarged')) {
                overlay.style.display = 'block'; // Exibe o overlay

                // Centraliza a imagem ampliada na tela
                const rect = img.getBoundingClientRect();
                window.scrollTo({
                    top: rect.top + window.pageYOffset - (window.innerHeight / 2) + (rect.height / 2),
                    behavior: 'smooth'
                });
            } else {
                overlay.style.display = 'none'; // Oculta o overlay
            }
        });
    });

    // Fecha a expansão da imagem e o overlay ao clicar fora de qualquer imagem
    document.addEventListener('click', () => {
        gridItems.forEach(img => {
            img.classList.remove('enlarged'); // Remove a classe de imagem ampliada
        });
        overlay.style.display = 'none'; // Oculta o overlay
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var whatsappButton = document.querySelector('.section-products-container-whathsapp');
    var targetItems = [];
    
    // Adiciona todos os itens de item1 a item21 ao array targetItems
    for (let i = 1; i <= 20; i++) {
        targetItems.push(document.querySelector('.grid-item.item' + i));
    }

    function checkItemVisibility() {
        var windowHeight = window.innerHeight;
        var isVisible = false;

        // Verifica se qualquer item do intervalo está visível
        targetItems.forEach(function(item) {
            if (item) {
                var itemRect = item.getBoundingClientRect();
                if (itemRect.top <= windowHeight && itemRect.bottom >= 0) {
                    isVisible = true;
                }
            }
        });

        // Ajusta a posição do botão com base na visibilidade dos itens
        whatsappButton.style.position = isVisible ? 'fixed' : 'static';
    }

    // Verifica se a tela é menor que 768px (considerado mobile)
    function handleVisibilityForMobile() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            // Verifica a visibilidade dos itens ao rolar e ao carregar a página
            window.addEventListener('scroll', checkItemVisibility);
            window.addEventListener('resize', checkItemVisibility);
            checkItemVisibility(); // Verifica a visibilidade inicial
        } else {
            // Garante que a posição do botão seja fixa em telas maiores que 768px
            whatsappButton.style.position = 'fixed';
        }
    }

    // Inicializa a verificação e ajusta conforme necessário
    handleVisibilityForMobile();
    window.addEventListener('resize', handleVisibilityForMobile);
});



///////////////////////////// FUNÇÕES ABOUT ///////////////////////////////

// Revela o texto da descrição com animação da esquerda
revelar.reveal('.brief-description-container-txt-2', {
    ...revealOptions,
    distance: '0%', // Distância de deslocamento
    origin: 'top',  // Origem do efeito de revelação
    duration: 5000    // Duração da animação em milissegundos
});

///////////////////////////// FUNÇÕES GALLERY ///////////////////////////////

// Função para abrir a galeria
function openGallery(category) {
    const galleryModal = document.getElementById('galleryModal'); // Seleciona o modal da galeria
    const galleryContent = document.getElementById('galleryContent'); // Seleciona o conteúdo da galeria

    // Limpa o conteúdo anterior
    galleryContent.innerHTML = '';

    // Adiciona imagens específicas da categoria
    const images = {
        'bolosCaseiros': ['bolo-cenoura.png', 'bolo-chocolate.png', 'bolo-coco.png', 'bolo-docedeleite.png', 'bolo-doisamores.png', 'bolo-formigueiro.png', 'bolo-leiteninho.png', 'bolo-limao.png'],

        'sobremesas': ['bombom-morango.jpg', 'bombom-uva.png', 'mousse-maracuja.png', 'pave-limao.png', 'pudim-deleite.png', 'torta-abacaxi.png', 'torta-bolacha.png'],

        'miniCakeDonuts': ['lembrancinha-donuts.png', 'cento-donuts.png', '12minicake-donuts.png', '24minicake-donuts.png', 'caixa-36donuts.png', 'mini-donuts1.png', 'mini-donuts2.png', 'mini-donuts3.png', 'mini-donuts4.png'],

        'boloDeFesta': ['bolo-festa.png', 'bolo-festa2.png', 'bolo-festa3.png', 'bolo-festa4.png', 'bolo-festa5.png', 'bolo-festa6.png'],
        
        'boloGourmet': ['bolo-gourmet.png', 'bolo-gourmet1.png', 'bolo-gourmet2.png', 'bolo-gourmet3.png', 'bolo-gourmet4.png', 'bolo-gourmet5.png']
    };

    // Adiciona imagens da categoria selecionada ao conteúdo da galeria
    images[category].forEach(src => {
        const img = document.createElement('img');
        img.src = `../assets/products/${src}`;
        galleryContent.appendChild(img);
    });

    galleryModal.style.display = 'flex'; // Exibe o modal da galeria
    document.body.style.overflow = 'hidden'; // Desabilita o scroll da página
}

// Função para fechar a galeria
function closeGallery() {
    const galleryModal = document.getElementById('galleryModal'); // Seleciona o modal da galeria
    galleryModal.style.display = 'none'; // Oculta o modal da galeria
    document.body.style.overflow = ''; // Reativa o scroll da página
}

// Revela o texto da descrição na galeria com animação da esquerda
revelar.reveal('.gallery-column', {
    ...revealOptions,
    origin: 'top',  // Origem do efeito de revelação
    distance: '0%', // Distância de deslocamento
    duration: 2000, // Duração da animação em milissegundos
    opacity: 0
});

// Verifica se o dispositivo é móvel
const isMobile = () => window.innerWidth <= 700;

document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.gallery-item img'); // Seleciona todas as imagens na galeria
    const overlays = document.querySelectorAll('.gallery-item .overlay'); // Seleciona todos os overlays

    // Função para ativar o overlay
    const handleOverlay = (entries, observer) => {
        entries.forEach(entry => {
            const overlay = entry.target.nextElementSibling; // O overlay associado à imagem
            if (entry.isIntersecting) {
                overlay.style.opacity = '1'; // Ativa o overlay
            } else {
                overlay.style.opacity = '0'; // Desativa o overlay
            }
        });
    };

    if (isMobile()) {
        // Configura o Intersection Observer somente em dispositivos móveis
        const observer = new IntersectionObserver(handleOverlay, {
            threshold: 1.0 // A imagem deve estar 100% visível
        });

        // Observa cada item da galeria
        gridItems.forEach(item => {
            observer.observe(item);
        });
    } else {
        // Adiciona eventos de mouse para dispositivos desktop
        gridItems.forEach((item, index) => {
            const overlay = overlays[index];

            item.addEventListener('mouseenter', () => {
                overlay.style.opacity = '1'; // Ativa o overlay
            });

            item.addEventListener('mouseleave', () => {
                overlay.style.opacity = '0'; // Desativa o overlay
            });
        });
    }
});



///////////////////////////// FUNÇÕES CONTACT ///////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    function checkOverlay() {
        const overlay = document.querySelector('.section-contact-container-map .overlay');
        const mapImage = document.querySelector('.section-contact-container-map .map-image');
        
        if (window.innerWidth <= 700) { // Verifica se é um dispositivo móvel
            const rect = mapImage.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const imageMiddle = rect.top + rect.height / 2;
            
            if (imageMiddle >= windowHeight / 2 - 50 && imageMiddle <= windowHeight / 2 + 50) {
                overlay.classList.add('active');
            } else {
                overlay.classList.remove('active');
            }
        } else {
            overlay.classList.remove('active'); // Remove o overlay em telas maiores
        }
    }

    window.addEventListener('scroll', checkOverlay);
    window.addEventListener('resize', checkOverlay);
    checkOverlay(); // Verifica a posição ao carregar a página
});


