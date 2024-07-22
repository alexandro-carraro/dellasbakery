// Inicializa o ScrollReveal para animações de rolagem
window.revelar = ScrollReveal({ reset: true });

// Configura as opções padrão para animações de revelação
const revealOptions = {
    distance: '100%', // Distância de deslocamento dos elementos
    opacity: 0 // Opacidade inicial dos elementos
};

// Aplica animação de revelação aos elementos com configurações específicas

// Revela a seção do slide com animação da direita
revelar.reveal('.section-slide-container', {
    ...revealOptions,
    origin: 'right', // Origem do efeito de revelação
    duration: 5000 // Duração da animação em milissegundos
});

// Revela o texto da descrição com animação da direita
revelar.reveal('.brief-description-container-txt', {
    ...revealOptions,
    origin: 'right', // Origem do efeito de revelação
    duration: 5000 // Duração da animação em milissegundos
});

// Revela o título da seção de produtos com animação da esquerda
revelar.reveal('.section-products-container-title', {
    origin: 'left', // Origem do efeito de revelação
    distance: '100%', // Distância de deslocamento
    duration: 1000, // Duração da animação em milissegundos
    opacity: 0 // Opacidade inicial
});

// Revela os itens da grade com uma animação padrão
revelar.reveal('.item1, .item2, .item3, .item4, .item5, .item6, .item7, .item8, .item9, .item10, .item11, .item12, .item13, .item14, .item15, .item16, .item17, .item18, .item19, .item20', {
    duration: 1000, // Duração da animação em milissegundos
    opacity: 0 // Opacidade inicial
});

// Revela o botão do footer com uma animação padrão
revelar.reveal('.footer-button-home', {
    duration: 1000, // Duração da animação em milissegundos
    opacity: 0 // Opacidade inicial
});

// Função para abrir o WhatsApp com uma mensagem predefinida
function openWhatsApp() {
    const telefone = '5547996144717'; // Número de telefone
    const mensagem = 'Ol%C3%A1!%20Cheguei%20at%C3%A9%20aqui%20por%20meio%20do%20site,%20e%20gostaria%20de%20falar%20sobre%20os%20produtos!'; // Mensagem codificada
    const url = `https://wa.me/${telefone}?text=${mensagem}`; // URL para abrir o WhatsApp
    window.open(url, '_blank'); // Abre a URL em uma nova aba
}

// Função para abrir a barra lateral
function openNav() {
    document.getElementById("sidebar").style.width = "180px"; // Define a largura da barra lateral
    document.getElementById("openbtn").style.display = "none"; // Oculta o botão de abrir
}

// Função para fechar a barra lateral
function closeNav() {
    document.getElementById("sidebar").style.width = "0"; // Define a largura da barra lateral como 0
    document.getElementById("openbtn").style.display = ""; // Exibe o botão de abrir
}

// Adiciona eventos de clique para as imagens da grade e o overlay
document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item img'); // Seleciona todas as imagens na grade
    const overlay = document.getElementById('overlay'); // Seleciona o overlay

    gridItems.forEach(img => {
        img.addEventListener('click', (event) => {
            event.stopPropagation(); // Impede que o clique na imagem feche a expansão

            // Adiciona ou remove a classe que aumenta a imagem
            img.classList.toggle('enlarged');

            // Exibe ou oculta o overlay com base na classe da imagem
            if (img.classList.contains('enlarged')) {
                overlay.style.display = 'block'; // Exibe o overlay
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
