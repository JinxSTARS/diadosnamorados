document.getElementById('coracao').addEventListener('click', function() {
    var coracao = document.createElement('div');
    coracao.classList.add('coracao-pulsante');
    coracao.style.left = (Math.random() * window.innerWidth) + 'px';
    coracao.style.top = (Math.random() * window.innerHeight) + 'px';
    document.body.appendChild(coracao);
    setTimeout(function() {
        coracao.remove();
    }, 800);
});
