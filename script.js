// Sélection du menu burger et du menu
document.getElementById('burger').addEventListener('click', function() {
    // Ajoute/retire la classe active au menu lorsqu'on clique sur le burger
    document.getElementById('menu').classList.toggle('active');
});