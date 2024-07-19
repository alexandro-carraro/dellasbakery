window.revelar = ScrollReveal({reset:true});

revelar.reveal('.section-slide-container', {
    origin: 'right', 
    distance: '100%', 
    duration: 5000,
    opacity: 0,
});

revelar.reveal('.brief-description-container-txt', {
    origin: 'right', 
    distance: '80%', 
    duration: 5000,
    opacity: 0,
});

revelar.reveal('.section-products-container-title', {
    origin: 'left', 
    distance: '100%', 
    duration: 1000,
    opacity: 0,
});

revelar.reveal('.item1, .item2, .item3, .item4, .item5, .item6, .item7, .item8, .item9, .item10, .item11, .item12, .item13, .item14, .item15, .item15, .item16, .item17, .item18, .item19, .item20', {
    duration: 1000,
    opacity: 0,
});

revelar.reveal('.footer-button-home', {
    duration: 1000,
    opacity: 0,
});


///

function openWhatsApp() {
    const telefone = '5547996144717';
    const mensagem = 'Ol%C3%A1!%20Cheguei%20at%C3%A9%20aqui%20por%20meio%20do%20site,%20e%20gostaria%20de%20falar%20sobre%20os%20produtos!';
    const url = `https://wa.me/${telefone}?text=${mensagem}`;
    window.open(url, '_blank');
}